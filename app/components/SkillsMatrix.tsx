'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Skill {
  name: string
  category: string
  proficiency: number
  icon: string
  description: string
  color: string
}

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const skills: Skill[] = [
    // Languages
    { name: 'Python', category: 'languages', proficiency: 90, icon: '🐍', description: 'ML, APIs, Data Processing', color: 'cyber-blue' },
    { name: 'JavaScript', category: 'languages', proficiency: 85, icon: '⚡', description: 'ES6+, Async/Await, DOM', color: 'cyber-purple' },
    { name: 'Go', category: 'languages', proficiency: 75, icon: '🚀', description: 'Concurrency, APIs, Performance', color: 'cyber-pink' },
    { name: 'SQL', category: 'languages', proficiency: 80, icon: '🗄️', description: 'Complex Queries, Optimization', color: 'matrix-green' },
    { name: 'HTML/CSS', category: 'languages', proficiency: 85, icon: '🎨', description: 'Responsive Design, Animations', color: 'cyber-blue' },

    // Frameworks
    { name: 'React', category: 'frameworks', proficiency: 88, icon: '⚛️', description: 'Hooks, Context, Performance', color: 'cyber-blue' },
    { name: 'Next.js', category: 'frameworks', proficiency: 82, icon: '▲', description: 'SSR, API Routes, Optimization', color: 'cyber-purple' },
    { name: 'FastAPI', category: 'frameworks', proficiency: 85, icon: '⚡', description: 'Async APIs, Documentation', color: 'cyber-pink' },
    { name: 'Node.js', category: 'frameworks', proficiency: 80, icon: '🟢', description: 'Express, Middleware, Streams', color: 'matrix-green' },
    { name: 'PyTorch', category: 'frameworks', proficiency: 70, icon: '🔥', description: 'Neural Networks, Training', color: 'cyber-blue' },
    { name: 'TensorFlow', category: 'frameworks', proficiency: 65, icon: '🧠', description: 'ML Models, Deployment', color: 'cyber-purple' },

    // Tools
    { name: 'Git', category: 'tools', proficiency: 85, icon: '📝', description: 'Version Control, Collaboration', color: 'cyber-pink' },
    { name: 'Docker', category: 'tools', proficiency: 70, icon: '🐳', description: 'Containerization, Deployment', color: 'matrix-green' },
    { name: 'Postman', category: 'tools', proficiency: 90, icon: '📮', description: 'API Testing, Documentation', color: 'cyber-blue' },
    { name: 'VS Code', category: 'tools', proficiency: 95, icon: '💻', description: 'Extensions, Debugging, Productivity', color: 'cyber-purple' },
    { name: 'Jest', category: 'tools', proficiency: 75, icon: '🧪', description: 'Unit Testing, Mocking', color: 'cyber-pink' },
    { name: 'SQLite', category: 'tools', proficiency: 80, icon: '💾', description: 'Embedded Database, Queries', color: 'matrix-green' }
  ]

  const categories = [
    { id: 'all', label: 'All Skills', icon: '🌟' },
    { id: 'languages', label: 'Languages', icon: '💬' },
    { id: 'frameworks', label: 'Frameworks', icon: '🏗️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' }
  ]

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return 'Expert'
    if (proficiency >= 80) return 'Advanced'
    if (proficiency >= 70) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyber-blue neon-text mb-4">
            ./skills --matrix
          </h2>
          <p className="text-gray-400 font-mono">
            Technical arsenal and proficiency levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-dark rounded-lg p-2 flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded font-mono text-sm transition-all duration-300 flex items-center space-x-2 ${
                  selectedCategory === category.id
                    ? 'bg-cyber-blue text-black'
                    : 'text-cyber-blue hover:bg-cyber-blue/20'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`glass-dark rounded-lg p-6 h-full cursor-pointer transition-all duration-300 hover:scale-105 border-l-4 border-${skill.color} relative overflow-hidden`}>
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className={`text-lg font-bold text-${skill.color} neon-text`}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded bg-${skill.color}/20 text-${skill.color}`}>
                    {getProficiencyLabel(skill.proficiency)}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm font-mono mb-4">
                  {skill.description}
                </p>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-500">Proficiency</span>
                    <span className={`text-xs font-mono text-${skill.color}`}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/60 rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Experience Level Indicator */}
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < Math.floor(skill.proficiency / 20)
                          ? `bg-${skill.color} shadow-lg shadow-${skill.color}/50`
                          : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic opacity-10 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terminal Output */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block glass-dark rounded-lg p-4 font-mono text-sm">
            <div className="text-cyber-blue mb-2">$ npm list --depth=0</div>
            <div className="text-matrix-green">
              ├── problem-solving@expert<br/>
              ├── continuous-learning@always<br/>
              ├── team-collaboration@advanced<br/>
              └── coffee-consumption@unlimited
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.slice(1).map((category, index) => {
            const categorySkills = skills.filter(s => s.category === category.id)
            const avgProficiency = Math.round(
              categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0) / categorySkills.length
            )
            
            return (
              <div key={category.id} className="text-center p-4 glass rounded-lg">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-cyber-blue font-bold text-lg neon-text">
                  {avgProficiency}%
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  {category.label}
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
} 