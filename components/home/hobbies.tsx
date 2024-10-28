import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const hobbies = [
  { name: "Running", imageUrl: "/placeholder.svg?height=400&width=600", description: "Pushing my limits and staying fit through long-distance running." },
  { name: "Scuba Diving", imageUrl: "/placeholder.svg?height=400&width=600", description: "Exploring the underwater world and marine ecosystems." },
  { name: "Sailing", imageUrl: "/placeholder.svg?height=400&width=600", description: "Navigating the open waters and harnessing the power of the wind." },
  { name: "Snowboarding", imageUrl: "/placeholder.svg?height=400&width=600", description: "Carving through fresh powder on mountain slopes." },
  { name: "Climbing", imageUrl: "/placeholder.svg?height=400&width=600", description: "Challenging myself on vertical terrains, both indoors and outdoors." },
  { name: "Shooting", imageUrl: "/placeholder.svg?height=400&width=600", description: "Honing precision and focus through target practice." },
]

const Hobbies: React.FC = () => {
  return (
    <section className="py-16 px-6 sm:px-[6vw] bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Things I Love to Do</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbies.map((hobby, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={hobby.imageUrl}
              alt={hobby.name}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
              <p className="text-muted-foreground text-sm">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Hobbies