'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  period: string
  highlights: string[]
  codeSnippet: string
  color: string
}

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 'canvas-grade',
      title: 'Canvas Grade Monitoring System',
      description: 'ML-driven grade auditing system using FastAPI and Canvas API',
      tech: ['FastAPI', 'Python', 'scikit-learn', 'Canvas API', 'ML'],
      period: 'Mar. 2025 – Present',
      highlights: [
        'Developed ML-driven grade auditing with 80%+ accuracy',
        'Modeled lecturer behavior using Random Forest and Isolation Forest',
        'Automated grade monitoring with APScheduler and SMTP alerts'
      ],
      codeSnippet: `
# ML Grade Anomaly Detection
from sklearn.ensemble import IsolationForest
import pandas as pd

class GradeAnomalyDetector:
    def __init__(self):
        self.model = IsolationForest(contamination=0.1)
    
    def detect_anomalies(self, grades_df):
        features = grades_df[['score', 'time_taken', 'attempts']]
        anomalies = self.model.fit_predict(features)
        return grades_df[anomalies == -1]
      `,
      color: 'cyber-blue'
    },
    {
      id: 'storygrid',
      title: 'StoryGrid',
      description: 'Full-stack Instagram-style story sharing platform',
      tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Cloudinary'],
      period: 'Feb. 2025 – Apr. 2025',
      highlights: [
        'Built full-stack web platform with secure Cloudinary-based image hosting',
        'Developed RESTful API endpoints with PostgreSQL via Neon',
        'Created responsive UI components with agile sprint collaboration'
      ],
      codeSnippet: `
// RESTful API with Next.js
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { title, content, imageUrl } = await req.json()
  
  const story = await prisma.story.create({
    data: { title, content, imageUrl },
    include: { author: true }
  })
  
  return NextResponse.json(story)
}
      `,
      color: 'cyber-purple'
    },
    {
      id: 'cyber-threat',
      title: 'Cyber Threat Scanner',
      description: 'Real-time threat intelligence tool with Go backend',
      tech: ['Go', 'React', 'SQLite', 'VirusTotal API', 'Tailwind CSS'],
      period: 'Mar. 2024 – Apr. 2024',
      highlights: [
        'Built threat intelligence tool scanning 70+ VirusTotal engines',
        'Deployed React + Tailwind CSS frontend for real-time visualization',
        'Optimized performance with concurrent Go routines and HTTPS validation'
      ],
      codeSnippet: `
// Concurrent threat scanning in Go
package main

import (
    "context"
    "sync"
)

func (s *Scanner) scanURLs(urls []string) {
    var wg sync.WaitGroup
    semaphore := make(chan struct{}, 10)
    
    for _, url := range urls {
        wg.Add(1)
        go func(u string) {
            defer wg.Done()
            semaphore <- struct{}{}
            defer func() { <-semaphore }()
            
            s.scanSingleURL(u)
        }(url)
    }
    wg.Wait()
}
      `,
      color: 'cyber-pink'
    }
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-cyber-blue neon-text mb-4">
            ./projects
          </h2>
          <p className="text-gray-400 font-mono">
            Innovative solutions built with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`glass-dark rounded-lg p-6 h-full cursor-pointer transition-all duration-300 hover:scale-105 border-l-4 border-${project.color} relative overflow-hidden`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold text-${project.color} neon-text`}>
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono">
                    {project.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 font-mono text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/50 rounded text-xs font-mono text-matrix-green border border-matrix-green/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className={`text-${project.color} text-xs`}>▶</span>
                      <span className="text-gray-400 text-xs font-mono">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Expanded Code View */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 code-block rounded-lg p-4 overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyber-blue text-xs font-mono">
                        code_sample.{project.tech[0].toLowerCase()}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(null)
                        }}
                        className="text-gray-500 hover:text-white text-xs"
                      >
                        ✕
                      </button>
                    </div>
                    <pre className="text-xs text-matrix-green font-mono overflow-x-auto">
                      {project.codeSnippet.trim()}
                    </pre>
                  </motion.div>
                )}

                {/* Holographic overlay */}
                <div className="absolute inset-0 holographic opacity-20 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Command */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block glass-dark rounded-lg p-4 font-mono text-sm">
            <span className="text-cyber-blue">$</span>
            <span className="text-matrix-green ml-2">
              git clone https://github.com/blaybrigidi/awesome-projects.git
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 