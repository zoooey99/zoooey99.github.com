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



export default function Home(){
  return (
    <div>

      <div className="bg-hero bg-center bg-fixed flex items-center h-screen">
          <h1 className="text-2xl text-white text-center mg-auto">Hi my name is Zoey Lee.</h1>
      </div>
      <div className="flex justify-center items-center">
        <Carousel>
          <CarouselContent>
              <CarouselItem className="basis-1/3 flex justify-center">
              <div className=" w-64 h-64"><Image src="/images/cim-showcase.jpeg" alt="UM interactive media showcase!" width={300} height={300} objectFit="cover" objectPosition="center" /></div>
              </CarouselItem>

              <CarouselItem className="basis-1/3 flex justify-center">
              <div className="relative flex justify-center items-center w-64 h-64"><Image src="/images/ice-tub.jpeg" alt="coffee & chill ice tubs" width={300} height={300} objectFit="cover" objectPosition="center" /></div>
              </CarouselItem>

              <CarouselItem className="basis-1/3 flex justify-center">
              <div className="relative flex justify-center items-center w-64 h-64"><Image src="/images/rock-climbing.jpeg" alt="zoey on some rocks that are high in air" width={300} height={300} objectFit="cover" objectPosition="center" /></div>
              </CarouselItem>

              <CarouselItem className="basis-1/3 flex justify-center">
              <div className="relative flex justify-center items-center w-64 h-64"><Image src="/images/shooting.jpeg" alt="zoey shoot gun" width={300} height={300} objectFit="cover" objectPosition="center" /></div>
              </CarouselItem>

              <CarouselItem className="basis-1/3 flex justify-center">
              <div className="relative flex justify-center items-center w-64 h-64"><Image src="/images/suits.jpeg" alt="zoey and mia looking spiffy" width={300} height={300} objectFit="cover" objectPosition="center" /></div>
              </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

        </Carousel>

      </div>
      <div className="flex text-center">
        <Button asChild>
            <Link href="https://www.linkedin.com/in/zoeylee123/"><Linkedin className="h-4 w-4"/></Link>
          </Button>
          <Button asChild>
            <Link href="mailto:zjl24@miami.edu"><Mail className="h-4 w-4"/></Link>
          </Button>
          <Button asChild>
            <Link href="https://www.instagram.com/zoeylee.11/"><Instagram className="h-4 w-4"/></Link>
          </Button>

      </div>

    </div>
    
  )}

/**
 * Todo: figure out how to embed instagram posts. Tagged in?
 * Todo: Put in all pics that I want. Just throw them on there then after, figure out how to format. Or pick some shadcn formatting for now.
 * ? carosel
 * 
*/