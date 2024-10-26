import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavbarGlobal() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Zoey Lee button on the left */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                  Zoey Lee
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Other navigation items on the right */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} outline outline-2 outline-offset-2 outline-white`}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
              
            <NavigationMenuItem>
              <Link href="/website-status" legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                  Website Status
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

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
    </nav>
  )
}