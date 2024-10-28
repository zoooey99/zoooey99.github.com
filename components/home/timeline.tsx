import React from 'react'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Activity = {
  startYear: number
  endYear: number | 'Present'
  title: string
  description: string
  moreInfo: string
  imageUrl: string
}

const activities: Activity[] = [
  {
    startYear: 2024,
    endYear: 2024,
    title: "CIM Showcase",
    description: "Showcased my virtual reality project at the CIM Showcase event.",
    moreInfo: "At the CIM Showcase, I had the opportunity to present my innovative virtual reality project, demonstrating the intersection of technology and immersive media. This event allowed me to share my work with industry professionals and peers, gaining valuable feedback and insights.",
    imageUrl: "/placeholder.svg?height=200&width=200"
  },
  {
    startYear: 2020,
    endYear: 'Present',
    title: "Co-founder and Co-President of KTP UMiami",
    description: "Leading and growing the University of Miami chapter of Kappa Theta Pi.",
    moreInfo: "As Co-President, I've helped grow our chapter to over 100 members, organized tech workshops, and facilitated networking events with industry professionals.",
    imageUrl: "/placeholder.svg?height=200&width=200"
  },
  {
    startYear: 2022,
    endYear: 'Present',
    title: "President of the KTP National Organization",
    description: "Overseeing and guiding the national operations of Kappa Theta Pi.",
    moreInfo: "In this role, I work with chapters across the country to promote technology education, foster leadership, and create opportunities for members to grow professionally.",
    imageUrl: "/placeholder.svg?height=200&width=200"
  },
  {
    startYear: 2023,
    endYear: 'Present',
    title: "Founder of HUBS",
    description: "Entrepreneurial venture creating innovative solutions.",
    moreInfo: "HUBS is a startup I founded that aims to revolutionize the way people connect and collaborate in shared living spaces. We're developing a platform that enhances community engagement and resource sharing.",
    imageUrl: "/placeholder.svg?height=200&width=200"
  },
  {
    startYear: 2022,
    endYear: 2023,
    title: "Unity Developer and 360° Videographer at VESL",
    description: "Developed immersive experiences and captured 360° content.",
    moreInfo: "At VESL, I worked on creating virtual reality experiences using Unity and captured immersive 360° video content. This role allowed me to blend my technical skills with my creative side.",
    imageUrl: "/placeholder.svg?height=200&width=200"
  },
  {
    startYear: 2019,
    endYear: 2022,
    title: "D1 Athlete",
    description: "Competed at the highest collegiate level, demonstrating dedication and teamwork.",
    moreInfo: "As a D1 athlete, I learned valuable lessons about discipline, time management, and teamwork. These skills have been instrumental in my academic and professional pursuits.",
    imageUrl: "/placeholder.svg?height=200&width=200"
  },
]

const ActivityItem: React.FC<{ activity: Activity }> = ({ activity }) => {
  const formatDateRange = (start: number, end: number | 'Present') => {
    return end === 'Present' ? `${start} - Present` : `${start} - ${end}`
  }

  return (
    <div className="relative pl-8 pb-16 last:pb-0">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200">
        <div className="absolute w-4 h-4 bg-primary rounded-full -left-1.5 top-8"></div>
      </div>
      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary bg-primary/10 rounded-full">
          {formatDateRange(activity.startYear, activity.endYear)}
        </span>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={activity.title}>
          <div className="space-y-4">
            <Image 
              src={activity.imageUrl} 
              alt={`${activity.title} icon`} 
              width={200} 
              height={200} 
              className="rounded-md object-cover"
            />
            <div>
              <AccordionTrigger>
                <h3 className="text-2xl font-semibold mb-2 text-left">
                  {activity.title}
                </h3>
              </AccordionTrigger>
              <p className="text-muted-foreground">{activity.description}</p>
              <AccordionContent>
                <p className="mt-2 text-muted-foreground">{activity.moreInfo}</p>
              </AccordionContent>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const Timeline: React.FC = () => {
  const sortedActivities = [...activities].sort((a, b) => {
    if (b.endYear === 'Present' && a.endYear === 'Present') {
      return b.startYear - a.startYear
    }
    if (b.endYear === 'Present') return 1
    if (a.endYear === 'Present') return -1
    return (b.endYear as number) - (a.endYear as number)
  })

  return (
    <section className="py-16 px-6 sm:px-[6vw]">
      <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
      <div className="max-w-2xl mx-auto">
        {sortedActivities.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))}
      </div>
    </section>
  )
}

export default Timeline