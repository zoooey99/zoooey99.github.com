import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Mail, Linkedin, Instagram } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="font-['Source_Sans_Pro',_sans-serif]">
      <div className="bg-hero bg-center bg-fixed flex items-end justify-center h-screen pb-[15vh]">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-white text-center font-light">
          <span className="font-bold">HI!</span> my name is <span className="font-bold">Zoey Lee</span>
        </h1>
      </div>
      <div className="flex justify-center items-center py-8">
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="-ml-2 md:-ml-4">
            {[
              { src: "/images/cim-showcase.jpeg", alt: "UM interactive media showcase!" },
              { src: "/images/ice-tub.jpeg", alt: "coffee & chill ice tubs" },
              { src: "/images/rock-climbing.jpeg", alt: "zoey on some rocks that are high in air" },
              { src: "/images/shooting.jpeg", alt: "zoey shoot gun" },
              { src: "/images/suits.jpeg", alt: "zoey and mia looking spiffy" }
            ].map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center mt-4 pb-8">
        <Button asChild className="mx-2">
          <Link href="https://www.linkedin.com/in/zoeylee123/">
            <Linkedin className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild className="mx-2">
          <Link href="mailto:zjl24@miami.edu">
            <Mail className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild className="mx-2">
          <Link href="https://www.instagram.com/zoeylee.11/">
            <Instagram className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <h1> <Link href="/about">about</Link></h1>
    </div>
  )
}