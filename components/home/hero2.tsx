'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0)
  const text = "hi! my name is Zoey Lee".split(' ')

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-10 flex items-center justify-between p-8 ml-[5vw]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start space-y-1"
        >
          {text.map((word, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="writing-vertical-lr text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 font-black"
            >
              {word}
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block w-1/2 h-4/5 relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Zoey Lee portrait"
            layout="fill"
            objectFit="cover"
            priority
            className="rounded-3xl"
          />
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-8 z-20"
      >
        <p className="text-lg text-gray-700 font-medium ml-[5vw]">Designer & Developer</p>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-200 opacity-60" />
    </div>
  )
}