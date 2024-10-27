import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function FooterGlobal(){
    return(
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
    )
}