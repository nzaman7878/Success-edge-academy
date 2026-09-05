import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

// In-memory submissions cache & local JSON logger file
const LOG_FILE = path.join(__dirname, 'enquiries.json')

function saveEnquiryToFile(enquiry) {
  try {
    let existing = []
    if (fs.existsSync(LOG_FILE)) {
      const data = fs.readFileSync(LOG_FILE, 'utf-8')
      if (data.trim()) existing = JSON.parse(data)
    }
    existing.unshift(enquiry)
    fs.writeFileSync(LOG_FILE, JSON.stringify(existing, null, 2))
  } catch (err) {
    console.error('Failed to write enquiry to file:', err.message)
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() })
})

// Enquiry endpoint
app.post('/api/enquire', (req, res) => {
  const { fullName, phone, email, course, grade, mode, message, hp_bot } = req.body

  // Anti-spam check
  if (hp_bot) {
    return res.status(400).json({ error: 'Spam detected' })
  }

  // Basic validation
  if (!fullName || !fullName.trim()) {
    return res.status(400).json({ error: 'Full name is required' })
  }

  const cleanPhone = (phone || '').replace(/[^0-9]/g, '')
  if (!cleanPhone || cleanPhone.length < 10) {
    return res.status(400).json({ error: 'Valid 10-digit mobile number required' })
  }

  const newEnquiry = {
    id: `SEA-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
    fullName: fullName.trim(),
    phone: cleanPhone,
    email: (email || '').trim(),
    course: course || 'General Enquiry',
    grade: grade || 'Class 11',
    mode: mode || 'Classroom',
    message: (message || '').trim(),
  }

  console.log('New Enquiry Received:', newEnquiry)
  saveEnquiryToFile(newEnquiry)

  return res.status(201).json({
    success: true,
    message: 'Enquiry received successfully! An academic advisor will reach out shortly.',
    enquiryId: newEnquiry.id,
  })
})

app.listen(PORT, () => {
  console.log(`Success Edge Academy Enquiry API running on port ${PORT}`)
})
