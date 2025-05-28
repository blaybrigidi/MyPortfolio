'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FileItem {
  name: string
  type: 'file' | 'folder'
  content?: string
  children?: FileItem[]
  icon: string
  size?: string
  modified?: string
}

export default function FileExplorer() {
  const [openFolders, setOpenFolders] = useState<string[]>(['about'])
  const [selectedFile, setSelectedFile] = useState<string | null>('README.md')

  const fileSystem: FileItem[] = [
    {
      name: 'about',
      type: 'folder',
      icon: '📁',
      children: [
        {
          name: 'README.md',
          type: 'file',
          icon: '📄',
          size: '2.1 KB',
          modified: '2024-01-15',
          content: `# Brigidi Ackah Blay

## About Me
Full Stack Developer with industry-grade experience building scalable APIs, ML-integrated systems, and secure full-stack applications. Strong background in backend optimization, data processing, and machine learning, with a focus on delivering robust, production-ready solutions.

## Current Focus
- 🎓 Computer Science @ Ashesi University (2022-2026)
- 💼 Full Stack Developer @ MoneyLink
- 🔬 ML-driven systems and API optimization
- 🌱 Continuous learning and innovation

## Philosophy
"Code is poetry written in logic. Every line should tell a story, solve a problem, and inspire the next solution."

## Fun Facts
- ☕ Coffee-driven development
- 🎮 Gaming enthusiast
- 📚 Lifelong learner
- 🌍 Ghana 🇬🇭 to the world`
        },
        {
          name: 'personality.json',
          type: 'file',
          icon: '🧠',
          size: '1.5 KB',
          modified: '2024-01-10',
          content: `{
  "traits": {
    "problemSolver": true,
    "teamPlayer": true,
    "innovator": true,
    "detailOriented": true
  },
  "workStyle": {
    "methodology": "Agile",
    "communication": "Clear and direct",
    "collaboration": "Highly collaborative",
    "learningApproach": "Hands-on experimentation"
  },
  "interests": [
    "Machine Learning",
    "System Architecture",
    "Performance Optimization",
    "Open Source Contribution",
    "Tech Innovation"
  ],
  "values": [
    "Quality over quantity",
    "Continuous improvement",
    "Knowledge sharing",
    "Ethical technology"
  ]
}`
        },
        {
          name: 'goals.txt',
          type: 'file',
          icon: '🎯',
          size: '0.8 KB',
          modified: '2024-01-12',
          content: `SHORT TERM GOALS (2024)
========================
✓ Complete Canvas Grade Monitoring System
✓ Master advanced React patterns
✓ Contribute to open source projects
○ Learn Kubernetes and cloud deployment
○ Build a personal AI assistant

LONG TERM GOALS (2025-2026)
===========================
○ Graduate with honors from Ashesi University
○ Land a role at a top tech company
○ Launch a successful SaaS product
○ Mentor upcoming developers
○ Speak at tech conferences

DREAM GOALS
===========
○ Start my own tech company
○ Contribute to major open source projects
○ Write a technical book
○ Build technology that impacts millions`
        }
      ]
    },
    {
      name: 'contact',
      type: 'folder',
      icon: '📞',
      children: [
        {
          name: 'social.links',
          type: 'file',
          icon: '🔗',
          size: '0.5 KB',
          modified: '2024-01-08',
          content: `# Social Links

📧 Email: brigidi.blay@ashesi.edu.gh
📱 Phone: (909) 5410066
💼 LinkedIn: linkedin.com/in/brigidi-blay-574906274
🐙 GitHub: github.com/blaybrigidi
🌐 Portfolio: brigidi-portfolio.vercel.app

## Preferred Contact Methods
1. Email (Professional inquiries)
2. LinkedIn (Networking)
3. Phone (Urgent matters)

## Response Time
- Email: Within 24 hours
- LinkedIn: Within 48 hours
- Phone: Immediate (business hours)`
        }
      ]
    }
  ]

  const toggleFolder = (folderName: string) => {
    setOpenFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    )
  }

  const renderFileTree = (items: FileItem[], depth = 0) => {
    return items.map((item, index) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`ml-${depth * 4}`}
      >
        <div
          className={`flex items-center space-x-2 p-2 rounded cursor-pointer transition-all duration-200 ${
            selectedFile === item.name 
              ? 'bg-cyber-blue/20 text-cyber-blue' 
              : 'hover:bg-gray-800/50'
          }`}
          onClick={() => {
            if (item.type === 'folder') {
              toggleFolder(item.name)
            } else {
              setSelectedFile(item.name)
            }
          }}
        >
          <span className="text-sm">{item.icon}</span>
          <span className="font-mono text-sm">{item.name}</span>
          {item.type === 'folder' && (
            <span className="text-xs text-gray-500">
              {openFolders.includes(item.name) ? '▼' : '▶'}
            </span>
          )}
        </div>
        
        {item.type === 'folder' && openFolders.includes(item.name) && item.children && (
          <div className="ml-4">
            {renderFileTree(item.children, depth + 1)}
          </div>
        )}
      </motion.div>
    ))
  }

  const getSelectedFileContent = () => {
    const findFile = (items: FileItem[]): FileItem | null => {
      for (const item of items) {
        if (item.name === selectedFile) return item
        if (item.children) {
          const found = findFile(item.children)
          if (found) return found
        }
      }
      return null
    }
    return findFile(fileSystem)
  }

  const selectedFileData = getSelectedFileContent()

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyber-blue neon-text mb-4">
            ls -la ./about
          </h2>
          <p className="text-gray-400 font-mono">
            Exploring the file system of my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          {/* File Explorer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-dark rounded-lg h-full overflow-hidden">
              {/* Explorer Header */}
              <div className="flex items-center space-x-2 p-4 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">
                  File Explorer
                </span>
              </div>
              
              {/* File Tree */}
              <div className="p-4 overflow-y-auto h-full">
                {renderFileTree(fileSystem)}
              </div>
            </div>
          </motion.div>

          {/* File Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="glass-dark rounded-lg h-full overflow-hidden">
              {/* Content Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                  <span className="text-cyber-blue font-mono">
                    {selectedFileData?.icon} {selectedFile}
                  </span>
                  {selectedFileData?.size && (
                    <span className="text-gray-500 text-sm font-mono">
                      {selectedFileData.size}
                    </span>
                  )}
                </div>
                {selectedFileData?.modified && (
                  <span className="text-gray-500 text-sm font-mono">
                    Modified: {selectedFileData.modified}
                  </span>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto h-full">
                {selectedFileData?.content ? (
                  <motion.pre
                    key={selectedFile}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm font-mono text-gray-300 whitespace-pre-wrap leading-relaxed"
                  >
                    {selectedFileData.content}
                  </motion.pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500 font-mono">
                    Select a file to view its contents
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Terminal Command */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="inline-block glass-dark rounded-lg p-4 font-mono text-sm">
            <span className="text-cyber-blue">$</span>
            <span className="text-matrix-green ml-2">
              cat {selectedFile || 'README.md'} | grep -i "passionate developer"
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 