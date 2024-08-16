import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"


export default function Home(){
  return (
    <div>

      <div className="bg-hero bg-center bg-fixed flex items-center h-screen">
          <h1 className="text-2xl text-white text-center mg-auto">Hi my name is Zoey Lee.</h1>
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