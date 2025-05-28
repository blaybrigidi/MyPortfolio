'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ContactTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([
    'Welcome to Brigidi\'s Contact Terminal v1.0',
    'Type "help" for available commands',
    ''
  ])

  const commands = {
    help: () => [
      'Available commands:',
      '  email    - Get email address',
      '  phone    - Get phone number', 
      '  linkedin - Get LinkedIn profile',
      '  github   - Get GitHub profile',
      '  location - Get current location',
      '  resume   - Download resume',
      '  clear    - Clear terminal',
      '  whoami   - About me',
      ''
    ],
    email: () => ['📧 brigidi.blay@ashesi.edu.gh', ''],
    phone: () => ['📱 (909) 5410066', ''],
    linkedin: () => ['💼 linkedin.com/in/brigidi-blay-574906274', ''],
    github: () => ['🐙 github.com/blaybrigidi', ''],
    location: () => ['📍 Currently in Ghana 🇬🇭', ''],
    resume: () => ['📄 Resume download initiated...', 'Contact me for the latest version!', ''],
    whoami: () => [
      'Brigidi Ackah Blay',
      'Full Stack Developer | ML Engineer',
      'Building the future, one commit at a time 🚀',
      ''
    ],
    clear: () => []
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    const output = commands[command as keyof typeof commands]
    
    if (output) {
      if (command === 'clear') {
        setHistory([])
      } else {
        setHistory(prev => [...prev, `$ ${cmd}`, ...output()])
      }
    } else {
      setHistory(prev => [...prev, `$ ${cmd}`, `Command not found: ${cmd}`, 'Type "help" for available commands', ''])
    }
    setInput('')
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyber-blue neon-text mb-4">
            ./contact --interactive
          </h2>
          <p className="text-gray-400 font-mono">
            Interactive terminal for getting in touch
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="terminal glass-dark rounded-lg p-6 h-[500px] overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 text-sm font-mono">
              contact@brigidi:~$
            </span>
          </div>

          {/* Terminal Content */}
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 font-mono text-sm">
              {history.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`${line.startsWith('$') ? 'text-cyber-blue' : 'text-matrix-green'}`}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Input Line */}
            <div className="flex items-center space-x-2 font-mono text-sm">
              <span className="text-cyber-blue">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleCommand(input)
                  }
                }}
                className="flex-1 bg-transparent text-matrix-green outline-none"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="text-cyber-blue animate-blink">▋</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: '📧', label: 'Email', value: 'brigidi.blay@ashesi.edu.gh', color: 'cyber-blue' },
            { icon: '📱', label: 'Phone', value: '(909) 5410066', color: 'cyber-purple' },
            { icon: '💼', label: 'LinkedIn', value: 'Connect with me', color: 'cyber-pink' },
            { icon: '🐙', label: 'GitHub', value: 'Check my repos', color: 'matrix-green' }
          ].map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`glass-dark rounded-lg p-4 text-center cursor-pointer hover:scale-105 transition-all duration-300 border-l-4 border-${contact.color}`}
            >
              <div className="text-2xl mb-2">{contact.icon}</div>
              <div className={`text-${contact.color} font-bold font-mono mb-1`}>
                {contact.label}
              </div>
              <div className="text-gray-400 text-sm font-mono">
                {contact.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 