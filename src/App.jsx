import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import AboutSection from './components/AboutSection'
import CoursesSection from './components/CoursesSection'

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null)

  const handleScrollToSection = (sectionId) => {
    const el = document.querySelector(sectionId)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleEnquireCourse = (course) => {
    setIsDemoModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#050c18] text-slate-100 selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      <Navbar onBookDemoClick={() => setIsDemoModalOpen(true)} />
      <main className="flex-1 space-y-16 lg:space-y-24">
        <Hero
          onBookDemoClick={() => setIsDemoModalOpen(true)}
          onExploreCoursesClick={() => handleScrollToSection('#courses')}
        />
        <StatsStrip />
        <AboutSection onBookDemoClick={() => setIsDemoModalOpen(true)} />
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourseForModal(course)}
          onEnquireCourse={handleEnquireCourse}
        />
      </main>
    </div>
  )
}




export default App


