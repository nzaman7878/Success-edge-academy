import React, { useState } from 'react'
import {
  Calculator,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Percent,
  Gift,
  HelpCircle,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'

export default function ScholarshipCalculator({ onClaimScholarship }) {
  const [selectedGrade, setSelectedGrade] = useState('11')
  const [selectedGoal, setSelectedGoal] = useState('jee')
  const [selectedScore, setSelectedScore] = useState('above90')

  const grades = [
    { id: '6to8', label: 'Classes 6–8' },
    { id: '9to10', label: 'Classes 9–10' },
    { id: '11', label: 'Class 11' },
    { id: '12', label: 'Class 12' },
    { id: 'repeater', label: 'Dropper / Repeater' },
  ]

  const goals = [
    { id: 'jee', label: 'IIT-JEE (Mains & Advanced)' },
    { id: 'neet', label: 'NEET UG Medical' },
    { id: 'boards', label: 'Board Top Marks (10th/12th)' },
    { id: 'olympiad', label: 'Foundation & Olympiads' },
  ]

  const scores = [
    { id: 'above93', label: '93% & Above in Previous Class', discount: 'Up to 90% Scholarship' },
    { id: '85to92', label: '85% – 92% in Previous Class', discount: 'Up to 50% Scholarship' },
    { id: '75to84', label: '75% – 84% in Previous Class', discount: 'Up to 30% Scholarship' },
    { id: 'below75', label: 'Below 75% (Needs Conceptual Boost)', discount: 'Up to 20% Early Bird Grant' },
  ]

  const calculateResult = () => {
    let scholarship = 'Up to 50% Tuition Fee Waiver'
    let estSavings = '₹35,000 – ₹60,000'
    let batchName = 'JEE Apex 2-Year Program'

    if (selectedScore === 'above93') {
      scholarship = 'Up to 90% Merit Scholarship'
      estSavings = '₹75,000 – ₹1,10,000'
    } else if (selectedScore === '85to92') {
      scholarship = 'Up to 60% Merit Scholarship'
      estSavings = '₹45,000 – ₹70,000'
    } else if (selectedScore === '75to84') {
      scholarship = 'Up to 35% Academic Grant'
      estSavings = '₹25,000 – ₹40,000'
    } else {
      scholarship = 'Up to 20% Foundation Grant'
      estSavings = '₹15,000 – ₹25,000'
    }

    if (selectedGoal === 'neet') {
      batchName = 'NEET Pulse Medical Program'
    } else if (selectedGoal === 'boards') {
      batchName = 'Board Champions Batch'
    } else if (selectedGoal === 'olympiad') {
      batchName = 'Junior Foundation Batch'
    }

    return { scholarship, estSavings, batchName }
  }

  const result = calculateResult()

  return (
    <section id="scholarship" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SETSE Merit Program"
          badgeIcon={Calculator}
          title="Calculate Your Merit Scholarship &"
          highlight="Reserve A Free Demo"
          subtitle="Estimate your tuition fee concession in under 30 seconds based on past performance and target ambitions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Calculator Inputs */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/80 border border-white/15 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Grade */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                  1. Select Student's Current Grade / Level
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {grades.map((grade) => (
                    <button
                      key={grade.id}
                      type="button"
                      onClick={() => setSelectedGrade(grade.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                        selectedGrade === grade.id
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-950/60 text-slate-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {grade.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Goal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                  2. Select Target Examination / Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`py-3 px-4 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                        selectedGoal === goal.id
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-950/60 text-slate-300 hover:text-white border border-white/10'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Prior Score Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                  3. Select Recent Academic Score Range
                </label>
                <div className="space-y-2">
                  {scores.map((score) => (
                    <button
                      key={score.id}
                      type="button"
                      onClick={() => setSelectedScore(score.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        selectedScore === score.id
                          ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-950/60 text-slate-300 hover:text-white border border-white/10'
                      }`}
                    >
                      <span>{score.label}</span>
                      <span className="text-[11px] opacity-80">{score.discount}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-2">
              <Gift className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Scholarships are formally confirmed post the Success Edge Talent Search Exam (SETSE).
              </span>
            </div>
          </div>

          {/* Right Result Summary Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/30 border-2 border-amber-400/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
                <Badge variant="gold" size="sm">
                  Estimated Benefit
                </Badge>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Demo Class Included
                </span>
              </div>

              <div className="py-6 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Eligible Scholarship
                </span>
                <div className="text-3xl sm:text-4xl font-black font-display text-amber-400 leading-tight">
                  {result.scholarship}
                </div>
                <div className="text-sm font-semibold text-white mt-2">
                  Estimated Fee Concession: <span className="text-emerald-400">{result.estSavings}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 space-y-2 mb-6 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Recommended Program:</span>
                  <span className="text-white font-semibold">{result.batchName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Class Batch Size:</span>
                  <span className="text-amber-400 font-semibold">Strict 25 Student Limit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">2-Day Demo Trial:</span>
                  <span className="text-emerald-400 font-semibold">100% Free & Guaranteed</span>
                </div>
              </div>
            </div>

            <div>
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={Sparkles}
                iconPosition="right"
                onClick={() =>
                  onClaimScholarship?.({
                    grade: selectedGrade,
                    goal: selectedGoal,
                    scholarship: result.scholarship,
                    batch: result.batchName,
                  })
                }
                className="shadow-xl shadow-amber-500/25"
              >
                Claim Scholarship & Lock Demo Slot
              </Button>
              <p className="text-[11px] text-center text-slate-400 mt-2.5">
                ⚡ Only 8 scholarship allocations remaining for this cycle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
