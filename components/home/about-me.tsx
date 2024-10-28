import React from 'react'
import Image from 'next/image'

const AboutMe: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-[6vw] bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Zoey Lee"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Junior at the University of Miami</h2>
          <p className="text-xl text-muted-foreground">
            I&apos;m studying Computer Science, Math, and Immersive Media, combining technical expertise with creative innovation.
          </p>
          <p className="text-muted-foreground">
            As a developer with a passion for entrepreneurship, I&apos;m constantly seeking opportunities to apply my skills in real-world scenarios. My interdisciplinary approach allows me to tackle complex problems and create innovative solutions at the intersection of technology and business.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe