import { Button } from "@/components/ui/button"
import { Github, ExternalLink, BookOpen, Youtube } from "lucide-react"
import Link from "next/link"

export default function ProjectButton({ buttonType, buttonURL, numButtons }: { buttonType: string; buttonURL: string; numButtons: number}){
    const width = numButtons === 2 ? "w-[calc(50%-0.25rem)]" : "w-full"; 
    return(
    <>
    {buttonType === "Github" && (
        <Button asChild variant="outline" size="sm" className={width}>
            <Link href={buttonURL}>
                <Github className="mr-2 h-4 w-4" />
                    GitHub
            </Link>
        </Button>
    )}
    {buttonType === "Live Demo" && (
        <Button asChild size="sm" className={width}>
            <Link href={buttonURL}>
                <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
            </Link>
        </Button>
    )}
    {buttonType == "Documentation" && (
        <Button asChild variant="default" size="sm" className={width}>
            <Link href={buttonURL}>
            <BookOpen className="mr-2 h-4 w-4" />
                Documentation
            </Link>
        </Button>
    )}
    {buttonType == "YouTube" && (
        <Button asChild variant="outline" size="sm" className={width}>
            <Link href={buttonURL}>
                <Youtube className="mr-2 h-4 w-4"/>
                YouTube
            </Link>
        </Button>
    )}
  </>
  )
}
