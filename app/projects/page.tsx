'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import NavbarGlobal from "@/components/nav-bar-global"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Website",
      description: "A brief description of Project 1 and its key features.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.yourdomain.com",
      status: { type: "active", startDate: "Oct 2024" }
    },
    {
      title: "Pitch Perfect",
      description: "An overview of Project 2 and what makes it unique.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.yourdomain.com",
      status: { type: "active", startDate: "Jan 2024" },
      specialTag: "24-hour Hackathon"
    },
    {
      title: "UM Rowing Recruit Experience",
      description: "Highlighting the main aspects and achievements of Project 3.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.yourdomain.com",
      status: { type: "completed", startDate: "Jul 2023", endDate: "Nov 2023" }
    },
    {
      title: "360° Videography",
      description: "Detailing the challenges and solutions in Project 4.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["React Native", "Firebase", "Redux"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4.yourdomain.com",
      status: { type: "completed", startDate: "Mar 2024", endDate:" " }
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavbarGlobal />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
            <header className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning experience.
            </p>
        </header>

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
                    {project.status.type === "active" ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></span>
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        {project.status.startDate} - {project.status.endDate}
                      </Badge>
                    )}
                    {project.specialTag && (
                      <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
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
    </div>
  )
}