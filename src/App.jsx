import React, { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#050c18] text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      <Navbar onBookDemoClick={() => setIsDemoModalOpen(true)} />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white font-display">Success Edge Academy</h1>
          <p className="text-amber-400 mt-2 font-medium">Give Your Child The Edge To Succeed</p>
        </div>
      </main>
    </div>
  )
}

export default App


