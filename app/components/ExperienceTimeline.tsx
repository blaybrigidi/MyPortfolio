'use client'

import { motion } from 'framer-motion'

interface Experience {
  id: string
  title: string
  company: string
  period: string
  location: string
  achievements: string[]
  commitHash: string
  branch: string
}

export default function ExperienceTimeline() {
  const experiences: Experience[] = [
    {
      id: 'moneylink',
      title: 'Full Stack Developer',
      company: 'MoneyLink',
      period: 'Jan. 2022 – Present',
      location: 'Claremont, CA',
      achievements: [
        'Developed and deployed scalable RESTful APIs with Node.js, improving request-response reliability by 20%',
        'Integrated client-server architecture by managing API consumption on the frontend, enabling seamless data synchronization and dynamic UI updates',
        'Optimized MySQL database performance by 30% through strategic indexing, query refactoring, and schema enhancements'
      ],
      commitHash: 'a7f3c2d',
      branch: 'production'
    }
  ]

  const education = [
    {
      id: 'ashesi',
      institution: 'Ashesi University',
      degree: 'Bachelor of Science in Computer Science',
      period: 'Aug. 2022 – May 2026',
      location: 'Berekuso, Ghana',
      details: ['Focus on Software Engineering and Machine Learning', 'Dean\'s List: Fall 2023, Spring 2024']
    },
    {
      id: 'ghana-intl',
      institution: 'Ghana International School',
      degree: 'Cambridge A Levels',
      period: 'Aug. 2020 – May 2022',
      location: 'Cantonments, Accra',
      details: ['Mathematics, Computer Science, Physics', 'Academic Excellence Award']
    }
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyber-blue neon-text mb-4">
            git log --experience
          </h2>
          <p className="text-gray-400 font-mono">
            Professional journey and educational milestones
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-cyber-purple mb-8 font-mono">
            ## Professional Experience
          </h3>
          
          <div className="relative">
            {/* Git timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-blue to-cyber-purple"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="relative mb-12"
              >
                {/* Commit node */}
                <div className="absolute left-6 w-4 h-4 bg-cyber-blue rounded-full border-4 border-black shadow-lg shadow-cyber-blue/50"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="glass-dark rounded-lg p-6 relative overflow-hidden">
                    {/* Commit header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-cyber-blue font-mono text-sm">
                          commit {exp.commitHash}
                        </span>
                        <span className="text-cyber-purple font-mono text-sm">
                          ({exp.branch})
                        </span>
                      </div>
                      <span className="text-gray-500 font-mono text-sm">
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Job details */}
                    <h4 className="text-xl font-bold text-cyber-blue neon-text mb-2">
                      {exp.title}
                    </h4>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-cyber-purple font-mono">
                        @ {exp.company}
                      </span>
                      <span className="text-gray-400 font-mono text-sm">
                        📍 {exp.location}
                      </span>
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.3) + (idx * 0.1) }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-matrix-green font-mono text-sm mt-1">+</span>
                          <span className="text-gray-300 font-mono text-sm">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 holographic opacity-10 pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyber-pink mb-8 font-mono">
            ## Education
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.2) }}
                className="glass-dark rounded-lg p-6 relative overflow-hidden border-l-4 border-cyber-pink"
              >
                <h4 className="text-lg font-bold text-cyber-pink neon-text mb-2">
                  {edu.institution}
                </h4>
                <p className="text-cyber-blue font-mono mb-2">
                  {edu.degree}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 font-mono text-sm">
                    {edu.period}
                  </span>
                  <span className="text-gray-500 font-mono text-sm">
                    📍 {edu.location}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-cyber-pink text-xs">▶</span>
                      <span className="text-gray-300 text-sm font-mono">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic opacity-10 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Git status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block glass-dark rounded-lg p-4 font-mono text-sm">
            <div className="text-cyber-blue mb-2">$ git status</div>
            <div className="text-matrix-green">
              On branch main<br/>
              Your branch is up to date with 'origin/main'.<br/>
              <span className="text-cyber-purple">
                Currently building the future... 🚀
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 