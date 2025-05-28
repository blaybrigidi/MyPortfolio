'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function TerminalHero() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const lines = [
    'Welcome to my digital workspace...',
    'Full Stack Developer | ML Engineer | Problem Solver',
    'Specializing in scalable APIs and intelligent systems',
    'Currently building the future, one line of code at a time',
    'Ready to collaborate? Let\'s create something amazing!'
  ]

  useEffect(() => {
    if (currentLine < lines.length) {
      const line = lines[currentLine]
      let charIndex = 0
      
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayText(line.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setTimeout(() => {
            setCurrentLine(prev => prev + 1)
            setDisplayText('')
          }, 1000)
        }
      }, 50)

      return () => clearInterval(typeInterval)
    }
  }, [currentLine])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="terminal glass-dark rounded-lg p-8 relative overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 text-sm font-mono">
              brigidi@portfolio:~$ cat introduction.txt
            </span>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-cyber-blue neon-text mb-6"
            >
              Brigidi Ackah Blay
            </motion.h1>

            <div className="space-y-2 font-mono text-lg">
              {lines.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-matrix-green"
                >
                  <span className="text-cyber-blue">$</span> {line}
                </motion.div>
              ))}
              
              {currentLine < lines.length && (
                <div className="text-matrix-green">
                  <span className="text-cyber-blue">$</span> {displayText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                    ▋
                  </span>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="mt-8 p-4 glass rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono">
                <div className="text-cyber-purple">
                  📧 brigidi.blay@ashesi.edu.gh
                </div>
                <div className="text-cyber-pink">
                  📱 (909) 5410066
                </div>
                <div className="text-cyber-blue">
                  🔗 linkedin.com/in/brigidi-blay-574906274
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'Experience', value: '2+ Years' },
                { label: 'Projects', value: '10+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Coffee Cups', value: '∞' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 glass rounded-lg">
                  <div className="text-2xl font-bold text-cyber-blue neon-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Holographic overlay */}
          <div className="absolute inset-0 holographic pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  )
} 