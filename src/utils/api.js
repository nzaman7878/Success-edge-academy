import { academyInfo } from '../data/academyInfo'

export async function submitEnquiry(payload) {
  // 1. Save to local storage for offline resiliency
  try {
    const cached = JSON.parse(localStorage.getItem('sea_enquiries') || '[]')
    cached.unshift({ ...payload, timestamp: new Date().toISOString() })
    localStorage.setItem('sea_enquiries', JSON.stringify(cached.slice(0, 50)))
  } catch (e) {
    // ignore localStorage failure
  }

  // 2. Attempt Express Backend
  try {
    const res = await fetch('/api/enquire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      return await res.json()
    }
  } catch (err) {
    console.warn('Backend endpoint unreachable, using client-side fallback:', err.message)
  }

  // 3. Fallback success response
  return {
    success: true,
    message: 'Enquiry noted! Our counselor will get in touch shortly.',
    offline: true,
  }
}

export function generateWhatsAppLeadLink(payload) {
  const text = `Hi Success Edge Academy, I want to book a Demo Class / Enquire.
Name: ${payload.fullName || 'Student'}
Phone: ${payload.phone || ''}
Course: ${payload.course || 'All Programs'}
Grade: ${payload.grade || ''}
Mode: ${payload.mode || 'Classroom'}`

  return `https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(text)}`
}
