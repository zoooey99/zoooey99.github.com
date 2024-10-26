import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavbarGlobal(){
    return(
        <div>
            {/* navigation */}
      <NavigationMenu className="bg-transparent absolute top-4 right-4 w-full z-10">
        <NavigationMenuList>
        
        {/* about page */}
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* projects page */}
        <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} outline outline-2 outline-offset-2 outline-white`}>
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
          
        {/* website status page */}  
        <NavigationMenuItem>
          <Link href="/website-status" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Website Status
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* stats page */}
        <NavigationMenuItem>
          <Link href="/stats" legacyBehavior passHref>
            <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
              Stats
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
        </div>
    )
}