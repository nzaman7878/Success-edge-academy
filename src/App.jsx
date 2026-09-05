import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import AboutSection from './components/AboutSection'
import CoursesSection from './components/CoursesSection'
import CourseDetailModal from './components/CourseDetailModal'
import ResultsSection from './components/ResultsSection'
import FacultySection from './components/FacultySection'
import ScholarshipCalculator from './components/ScholarshipCalculator'
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null)
  const [prefilledCourse, setPrefilledCourse] = useState('')

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
    setPrefilledCourse(course.title)
    setIsDemoModalOpen(true)
  }

  const handleClaimScholarship = (data) => {
    setPrefilledCourse(data.batch)
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
        <ResultsSection onBookDemoClick={() => setIsDemoModalOpen(true)} />
        <FacultySection onBookDemoClick={() => setIsDemoModalOpen(true)} />
        <ScholarshipCalculator onClaimScholarship={handleClaimScholarship} />
        <TestimonialsSection onBookDemoClick={() => setIsDemoModalOpen(true)} />
      </main>

      {/* Course Detail / Syllabus Modal */}
      <CourseDetailModal
        course={selectedCourseForModal}
        isOpen={!!selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onEnquireNow={handleEnquireCourse}
      />
    </div>
  )
}









export default App


