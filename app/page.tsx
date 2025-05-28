'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />
      case 'about':
        return <AboutSection />
      case 'courses':
        return <CoursesSection />
      case 'projects':
        return <ProjectsSection />
      case 'experience':
        return <ExperienceSection />
      case 'contact':
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-center space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

function HomeSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Text content */}
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-gray-900"
          >
            Brigidi Ackah Blay
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-500 font-medium"
          >
            Full Stack Developer & ML Engineer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed max-w-lg"
          >
            Building scalable applications and intelligent systems with modern technologies. 
            Passionate about creating solutions that make a difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-blue-500">📧</span>
              <span>brigidi.blay@ashesi.edu.gh</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <span className="text-blue-500">📱</span>
              <span>(909) 5410066</span>
            </div>
          </motion.div>
        </div>

        {/* Right side - iPhone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="iphone float-slow">
            <div className="iphone-screen">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              
              {/* App content */}
              <div className="px-6 py-4 h-full">
                <div className="text-white mb-6">
                  <h3 className="text-lg font-semibold mb-2">Portfolio App</h3>
                  <p className="text-gray-300 text-sm">Swipe to explore</p>
                </div>
                
                {/* App grid */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="app-icon bg-blue-500"
                  >
                    💻
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.3 }}
                    className="app-icon bg-green-500"
                  >
                    🚀
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    className="app-icon bg-purple-500"
                  >
                    🎯
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.3 }}
                    className="app-icon bg-red-500"
                  >
                    📊
                  </motion.div>
                </div>
                
                {/* Recent projects */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="bg-gray-800 rounded-lg p-3"
                  >
                    <div className="text-white text-sm font-medium">Canvas Grade Monitor</div>
                    <div className="text-gray-400 text-xs">ML-driven system</div>
                  </motion.div>
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="bg-gray-800 rounded-lg p-3"
                  >
                    <div className="text-white text-sm font-medium">StoryGrid Platform</div>
                    <div className="text-gray-400 text-xs">Full-stack app</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="card p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-light text-gray-900 mb-8"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                I'm a Full Stack Developer with industry-grade experience building scalable APIs, 
                ML-integrated systems, and secure applications. Currently pursuing Computer Science 
                at Ashesi University while working at MoneyLink.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                I believe in writing clean, efficient code that solves real problems and creates 
                meaningful impact. Always learning, always building.
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">🎓 Education</h3>
                <p className="text-gray-700">Computer Science @ Ashesi University</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">💼 Current Role</h3>
                <p className="text-gray-700">Full Stack Developer @ MoneyLink</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="border-l-4 border-blue-500 pl-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">🌍 Location</h3>
                <p className="text-gray-700">Ghana 🇬🇭</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function CoursesSection() {
  const courses = [
    {
      name: 'Data Structures and Algorithms',
      code: 'CS 201',
      description: 'Advanced algorithms, complexity analysis, and data structure implementation',
      icon: '🗂️',
      grade: 'A',
      topics: ['Binary Trees', 'Graph Algorithms', 'Dynamic Programming', 'Sorting'],
      color: 'blue'
    },
    {
      name: 'Database Systems',
      code: 'CS 305',
      description: 'Relational databases, SQL optimization, and database design principles',
      icon: '🗄️',
      grade: 'A-',
      topics: ['SQL', 'Normalization', 'Indexing', 'Transactions'],
      color: 'green'
    },
    {
      name: 'Linear Algebra',
      code: 'MATH 221',
      description: 'Vector spaces, matrices, eigenvalues, and applications in ML',
      icon: '📐',
      grade: 'A',
      topics: ['Matrices', 'Eigenvalues', 'Vector Spaces', 'Transformations'],
      color: 'purple'
    },
    {
      name: 'Introduction to Artificial Intelligence',
      code: 'CS 380',
      description: 'Machine learning fundamentals, neural networks, and AI applications',
      icon: '🤖',
      grade: 'A',
      topics: ['Neural Networks', 'ML Algorithms', 'Computer Vision', 'NLP'],
      color: 'red'
    },
    {
      name: 'Software Engineering',
      code: 'CS 325',
      description: 'Software development methodologies, testing, and project management',
      icon: '⚙️',
      grade: 'A-',
      topics: ['Agile', 'Testing', 'Architecture', 'Version Control'],
      color: 'indigo'
    },
    {
      name: 'Computer Organization and Architecture',
      code: 'CS 330',
      description: 'Computer organization, assembly language, and machine code',
      icon: '🌐',
      grade: 'B+',
      topics: ['Assembly Language', 'CPU Design', 'Pipelining and Multicycle Execution', 'Cache Memory'],
      color: 'pink'
    }
  ]

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Favorite Courses
          </h2>
          <p className="text-lg text-gray-600">
            Key courses that shaped my technical foundation and passion for technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.code}
              initial={{ 
                opacity: 0, 
                y: 50,
                rotateY: index % 2 === 0 ? -15 : 15
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                rotateY: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className={`card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-${course.color}-500 ${
                index % 3 === 0 ? 'float-slow' : index % 3 === 1 ? 'float-medium' : 'float-fast'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl"
                >
                  {course.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  className={`px-3 py-1 bg-${course.color}-100 text-${course.color}-700 rounded-full text-sm font-medium`}
                >
                  {course.grade}
                </motion.div>
              </div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                className="text-lg font-semibold text-gray-900 mb-2"
              >
                {course.name}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
                className={`text-${course.color}-600 text-sm font-medium mb-3`}
              >
                {course.code}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.7 }}
                className="text-gray-600 text-sm leading-relaxed mb-4"
              >
                {course.description}
              </motion.p>
              
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
                  className="text-xs font-medium text-gray-700 mb-2"
                >
                  Key Topics:
                </motion.p>
                <div className="flex flex-wrap gap-1">
                  {course.topics.map((topic, topicIndex) => (
                    <motion.span
                      key={topic}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + 0.9 + topicIndex * 0.1,
                        type: "spring",
                        stiffness: 150
                      }}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Credits', value: '26.5', icon: '📚' },
            { label: 'Dean\'s List', value: '2 Semesters', icon: '🏆' },
            { label: 'Major', value: 'Computer Science', icon: '💻' },
            { label: 'Peer Tutor', value: 'Calculus I', icon: '🧑🏾‍🏫' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 1 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="card p-6 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xl font-semibold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Canvas Grade Monitoring System',
      description: 'ML-driven grade auditing system with 80%+ accuracy using FastAPI and Canvas API',
      tech: ['Python', 'FastAPI', 'Machine Learning', 'Canvas API'],
      period: 'Mar 2025 - Present'
    },
    {
      title: 'StoryGrid',
      description: 'Full-stack Instagram-style story sharing platform with secure cloud hosting',
      tech: ['Next.js', 'React', 'PostgreSQL', 'Cloudinary'],
      period: 'Feb 2025 - Apr 2025'
    },
    {
      title: 'Cyber Threat Scanner',
      description: 'Real-time threat intelligence tool scanning 70+ VirusTotal engines',
      tech: ['Go', 'React', 'SQLite', 'VirusTotal API'],
      period: 'Mar 2024 - Apr 2024'
    }
  ]

  const animations = ['bounce-in', 'rotate-in', 'scale-in']

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-light text-gray-900 mb-16 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className={`card p-8 ${index % 3 === 0 ? 'float-slow' : index % 3 === 1 ? 'float-medium' : 'float-fast'}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + techIndex * 0.1 + 0.5 }}
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">{project.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExperienceSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, rotateX: -15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="card p-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-light text-gray-900 mb-12"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-l-4 border-blue-500 pl-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
              <p className="text-blue-500 font-medium mb-1">MoneyLink</p>
              <p className="text-gray-500 mb-1">Jan 2022 - Present</p>
              <p className="text-gray-500 mb-6">Claremont, CA</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Developed scalable RESTful APIs with Node.js, improving reliability by 20%',
                  'Integrated client-server architecture for seamless data synchronization',
                  'Optimized MySQL database performance by 30% through strategic indexing'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="border-l-4 border-blue-500 pl-8"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Computer Science Student</h3>
              <p className="text-blue-500 font-medium mb-1">Ashesi University</p>
              <p className="text-gray-500 mb-1">Aug 2022 - May 2026</p>
              <p className="text-gray-500 mb-6">Berekuso, Ghana</p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Focus on Software Engineering and Machine Learning',
                  'Dean\'s List: Fall 2023, Spring 2024'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ContactSection() {
  const contactItems = [
    { icon: '📧', label: 'Email', value: 'brigidi.blay@ashesi.edu.gh' },
    { icon: '📱', label: 'Phone', value: '(909) 5410066' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/brigidi-blay-574906274' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/blaybrigidi' }
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="card p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-light text-gray-900 mb-8"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12"
          >
            Ready to collaborate on something amazing? Let's talk!
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contactItems.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ 
                  opacity: 0, 
                  y: 30,
                  rotate: index % 2 === 0 ? -5 : 5 
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotate: 0 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-2xl mb-2"
                >
                  {contact.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.label}</h3>
                <p className="text-gray-600">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 