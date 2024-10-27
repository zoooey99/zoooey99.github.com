'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import NavbarGlobal from "@/components/nav-bar-global"
import FooterGlobal from "@/components/footer-global"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Website",
      description: "An ongoing documentation of me.",
      image: "/images/project-pics/website.jpeg",
      tags: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/zoooey99/zoooey99.github.io",
      liveUrl: "https://zoeylee.me",
      status: { type: "active", startDate: "Oct 2024", endDate: "Present" }
    },
    {
      title: "Pitch Perfect",
      description: "PitchPerfect is an innovative and interactive tool designed to help students and professionals improve their presentation and public speaking skills in a fun and engaging way.",
      image: "/images/project-pics/pitch-perfect.jpeg",
      tags: ["React", "Next.js", "Unsplash API", "OpenAI API"],
      githubUrl: "https://github.com/racheltomasetti/pitchperfect",
      liveUrl: "https://pitchperfect-7afd.vercel.app/",
      status: { type: "completed", startDate: "Oct 2024" },
      specialTag: "24-hour Hackathon"
    },
    {
      title: "UM Rowing Recruit Experience",
      description: "An interactive virtual reality experience for potential recruits to experience life as a University of Miami Rowing Team athlete.",
      image: "/images/project-pics/rowing-vr.jpeg",
      tags: ["Unity", "Video Editing", "360° Videography", "VR Development"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.yourdomain.com",
      status: { type: "completed", startDate: "Jul 2023", endDate: "Nov 2023" }
    },
    {
      title: "360° Videography",
      description: "A link to all of my film. Some for VESL, some for fun.",
      image: "/images/project-pics/360-film.jpeg",
      tags: ["Video Editing","360° Videography", "Insta360"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4.yourdomain.com",
      status: { type: "completed", startDate: "Oct 2023", endDate:"May 2024" }
    },
    {
      title: "UM Soccer Senior Day 2023 - VR Film",
      description: "A virtual reality film capturing the University of Miami Soccer Senior Day 2023.",
      image: "/images/project-pics/soccer-senior-day.jpeg",
      tags: ["Video Editing","360° Videography", "Insta360"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4.yourdomain.com",
      status: { type: "completed", startDate: "Oct 2023", endDate:"Nov 2023" }
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* navigation */}
        <NavbarGlobal />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-7xl">
          {/* title & description */}
          <header className="mb-16 text-left">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Projects</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl text-left">
                  Here are some of the projects I&apos;ve worked on. I have a passion for building and making something people want.
              </p>
          </header>
      
          {/* projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-2xl mb-2 font-bold text-gray-800 dark:text-gray-100">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">

                      {project.status.type === "active" && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 hover:bg-green-100">
                          <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></span>
                          Active
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {project.status.startDate} - {project.status.endDate}
                      </Badge>

                      {project.specialTag && (
                        <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 hover:bg-red-100">
                          {project.specialTag}
                        </Badge>
                      )}
                    </div>

                    <CardDescription className="mb-4 text-sm text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 pt-0">
                    <Button asChild variant="outline" size="sm" className="w-[calc(50%-0.25rem)]">
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="w-[calc(50%-0.25rem)]">
                      <Link href={project.liveUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
          ))}
        </div>
        </div>

        {/* footer */}
        <FooterGlobal />

    </div>
  )
}
