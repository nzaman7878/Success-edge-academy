export const courseCategories = [
  { id: 'all', label: 'All Programs' },
  { id: 'jee', label: 'IIT-JEE (Mains + Adv)' },
  { id: 'neet', label: 'NEET Medical' },
  { id: 'boards', label: 'Board Champions (9–12)' },
  { id: 'foundation', label: 'Foundation (6–8)' },
]

export const coursesData = [
  {
    id: 'jee-apex',
    title: 'JEE Apex: 2-Year Integrated Classroom Program',
    category: 'jee',
    targetAudience: 'Moving to Class 11 (2026–2028)',
    grade: 'Class 11 & 12',
    badge: 'Most Popular',
    badgeVariant: 'gold',
    duration: '24 Months',
    schedule: '4 Days / Week • 4.5 Hours / Day',
    seatsLeft: 6,
    batchStarts: '15th April 2026',
    overview:
      'Rigorous two-year flagship program designed from basic NCERT principles up to international Olympiad and JEE Advanced level problem solving.',
    features: [
      'Ex-IITian Senior Faculty for Physics, Chemistry & Math',
      'Comprehensive 14-Volume Printed Concept & Exercise Modules',
      'Over 6,000+ Curated Practice Problems with Video Solutions',
      'National All-India Test Series (AITS) with Percentile Analytics',
      'Weekly 1-on-1 Academic Counseling & Performance Review',
    ],
    curriculum: [
      {
        subject: 'Physics',
        topics: 'Mechanics, Electrodynamics, Optics, Thermodynamics, Modern Physics',
      },
      {
        subject: 'Chemistry',
        topics: 'Physical, Organic Mechanisms, Inorganic NCERT Drill & Coordination Compounds',
      },
      {
        subject: 'Mathematics',
        topics: 'Calculus, Vectors & 3D Geometry, Coordinate Geometry, Algebra, Probability',
      },
    ],
    mode: 'Classroom & Hybrid',
  },
  {
    id: 'neet-pulse',
    title: 'NEET Pulse: Complete Medical Entrance Program',
    category: 'neet',
    targetAudience: 'Moving to Class 11 or 12',
    grade: 'Class 11 & 12',
    badge: 'High Selection Rate',
    badgeVariant: 'emerald',
    duration: '1 to 2 Years',
    schedule: '5 Days / Week • 4 Hours / Day',
    seatsLeft: 9,
    batchStarts: '20th April 2026',
    overview:
      'Tailored medical curriculum emphasizing 100% NCERT Biology line-by-line mastery, high-speed calculation tricks in Physics, and error-free Organic Chemistry.',
    features: [
      'Classes led by MBBS Doctors and Senior Medical Coaches',
      'Biology 360/360 Target Drilling with Diagrammatic Memory Sheets',
      'Negative Marking Reduction Workshops & Speed Drills',
      'Full-Length OMR-Based NTA Simulated Practice Tests',
      'Dedicated Doubt Clearing Table before & after every class',
    ],
    curriculum: [
      {
        subject: 'Biology (Botany & Zoology)',
        topics: 'Human Physiology, Genetics, Ecology, Cell Biology, Plant Kingdom, Biotech',
      },
      {
        subject: 'Physics',
        topics: 'Kinematics, Thermodynamics, Magnetism, Current Electricity, Wave Optics',
      },
      {
        subject: 'Chemistry',
        topics: 'Chemical Equilibrium, Biomolecules, Solutions, Electrochemistry, Hydrocarbons',
      },
    ],
    mode: 'Classroom & Hybrid',
  },
  {
    id: 'boards-star-10',
    title: 'Class 10 Board Accelerator: 100/100 Target',
    category: 'boards',
    targetAudience: 'Students entering Class 10 (CBSE / ICSE / State)',
    grade: 'Class 10',
    badge: 'Guaranteed Score Boost',
    badgeVariant: 'blue',
    duration: '10 Months',
    schedule: '3 Days / Week • 3 Hours / Day',
    seatsLeft: 12,
    batchStarts: '5th April 2026',
    overview:
      'Master fundamental concepts in Science, Mathematics, English, and Social Science with special emphasis on board answer-presentation techniques.',
    features: [
      'Previous 15-Year Solved Board Question Bank',
      'Subjective Answer Writing Workshops with Marking Scheme Training',
      'Pre-Board Mock Simulations (3 Rounds with Strict Evaluation)',
      'Stress-free, high-engagement teaching methodology',
      'Regular Parent-Teacher Performance Meets',
    ],
    curriculum: [
      {
        subject: 'Mathematics',
        topics: 'Quadratic Equations, Trigonometry, Circles, Statistics, Coordinate Geometry',
      },
      {
        subject: 'Science',
        topics: 'Chemical Reactions, Life Processes, Light & Human Eye, Electricity, Carbon',
      },
      {
        subject: 'Social & English',
        topics: 'History, Civics, Geography, Economics, Grammar & Structured Writing Skills',
      },
    ],
    mode: 'Offline Classroom',
  },
  {
    id: 'boards-senior-12',
    title: 'Class 12 Board Booster & Competitive Edge',
    category: 'boards',
    targetAudience: 'Class 12 Science Stream (PCM / PCB)',
    grade: 'Class 12',
    badge: 'Dual Board + CUET Focus',
    badgeVariant: 'purple',
    duration: '9 Months',
    schedule: '4 Days / Week • 3.5 Hours / Day',
    seatsLeft: 8,
    batchStarts: '10th April 2026',
    overview:
      'Balanced curriculum preparing students to score 95%+ in Class 12 Boards while laying solid grounds for CUET and engineering/medical entrance exams.',
    features: [
      'Synchronized school exam and board syllabus completion by October',
      'Intensive 4-month Board revision and step-marking training',
      'Complete lab practical exam assistance and viva prep',
      'Chapter-wise formula sheets and summary mind-maps',
    ],
    curriculum: [
      {
        subject: 'Physics & Chemistry',
        topics: 'Complete Class 12 NCERT Theory, Derivations, Numericals & Exemplar',
      },
      {
        subject: 'Mathematics / Biology',
        topics: 'In-depth problem solving, NCERT Exemplar & CBSE Sample Papers',
      },
    ],
    mode: 'Classroom & Hybrid',
  },
  {
    id: 'foundation-junior',
    title: 'Junior Foundation: Ignite Curiosity & Logic',
    category: 'foundation',
    targetAudience: 'Classes 6, 7 & 8 Students',
    grade: 'Classes 6–8',
    badge: 'Olympiad & NTSE Ready',
    badgeVariant: 'gold',
    duration: 'Academic Year',
    schedule: '3 Days / Week • 2 Hours / Day (Afternoon / Evening)',
    seatsLeft: 14,
    batchStarts: '1st May 2026',
    overview:
      'Builds deep conceptual fundamentals, logical reasoning, and mental arithmetic early on, making science and math fascinating rather than intimidating.',
    features: [
      'Olympiad & Talent Search (NSTSE, IMO, NSO) specialized modules',
      'Hands-on experimental science kits and visual geometry tools',
      'Speed mental math tricks and Vedic arithmetic fundamentals',
      'Fun, interactive classroom environment with zero rote memorization',
    ],
    curriculum: [
      {
        subject: 'Science Exploration',
        topics: 'Physics phenomena, Chemistry around us, Living world & environment',
      },
      {
        subject: 'Mathematics & Logic',
        topics: 'Number systems, Geometry visualization, Puzzles, Analytical reasoning',
      },
    ],
    mode: 'Offline Classroom',
  },
  {
    id: 'jee-neet-crash',
    title: 'Fast-Track Crash Course & Test Series',
    category: 'jee',
    targetAudience: 'Current Class 12 & Dropper Aspirants',
    grade: 'Class 12 / Repeaters',
    badge: 'Last-Mile Sprint',
    badgeVariant: 'rose',
    duration: '60 Days',
    schedule: 'Daily 5 Hours • Intensive Practice',
    seatsLeft: 5,
    batchStarts: 'Rolling Batches',
    overview:
      'High-velocity 60-day revision sprint covering high-weightage chapters, time management hacks, and 30 full-syllabus CBT mock tests.',
    features: [
      'Targeted 500 Most Probable Questions per subject',
      'Daily 3-hour simulated CBT test followed by 2-hour video analysis',
      'Exam temperament and negative marks reduction drills',
      'Formula sheets, memory charts, and quick-revision flashcards',
    ],
    curriculum: [
      {
        subject: 'Full Syllabus Sprint',
        topics: 'Complete Class 11 & 12 syllabus prioritized by exam weightage and trends',
      },
    ],
    mode: 'Classroom & Online',
  },
]
