import React from 'react'
import { Moon, Sun } from "lucide-react"
import { Link } from 'react-router-dom'
 
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import { SearchIcon, CircleHelp, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from "@/components/theme-provider"

import { navItems } from '../SidebarNavItems'

const Topbar = ({setSideBarSize}) => {
  const { setTheme } = useTheme()

  const toggleSidebarSize = () => {
    setSideBarSize(prevSize => prevSize === 'large' ? 'small' : 'large');
  }

  return (
    <nav className="h-16 flex justify-between items-center px-8 border-b sticky top-0 z-50 bg-background">


            <Sheet>
                <SheetTrigger asChild>
                    <Menu className={`cursor-pointer block md:hidden`} />
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>de.ai</SheetTitle>
                        <SheetDescription>
                            Lorem ipsum, dolor sit adipisicing elit. Facilis dolore voluptatum. Libero, ex quas.
                        </SheetDescription>
                    </SheetHeader>
                    
                    <div className="flex justify-between my-5 gap-8">
                        <Button variant="ghost" className={cn('w-1/2')}>Login</Button>
                        <Button className={cn('text-white w-1/2')}>Create an Account</Button>
                    </div>

                    <ul className={`space-y-2 mt-2`}>
                        {navItems.map((item) => (
                        <li key={item.href}>
                            <SheetClose asChild>
                                <Link to={item.href} className={`w-full flex items-center gap-3 px-2 py-2 transition-all hover:bg-primary hover:text-white flex-row rounded-xl`}>
                                    <item.icon className="h-5" />
                                    <p className={`text-nowrap `}>{item.label}</p>
                                </Link>
                            </SheetClose>
                        </li>
                        ))}
                    </ul>
                    
                </SheetContent>
            </Sheet>

            <div className='flex items-center justify-between gap-5'>
                <Menu className={`cursor-pointer hidden md:block`} onClick={toggleSidebarSize}/>
                <Link to="/dashboard" className="font-semibold text-xl">de.ai</Link>
            </div>

            <div className="hidden md:flex items-center w-full max-w-md space-x-2">
                <Input type="search" placeholder="Search" className="w-full border-0 h-8 font-semibold bg-primary-foreground" />
                <Button variant="ghost" size="icon"><SearchIcon className="h-4 w-4" /></Button>
            </div>
            
            <div className="flex items-center gap-3">
                <Sheet>
                    <SheetTrigger asChild>
                        <CircleHelp className="hidden md:block h-[1.4rem] aspect-square cursor-pointer"/>
                    </SheetTrigger>
                    <SheetContent>
                        
                    </SheetContent>
                </Sheet>
                <Button variant="ghost" className={cn('hidden md:block')}>Login</Button>
                <Button className={cn('hidden md:block text-white')}>Create an Account</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className={cn('outline-none border-none focus:outline-none focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:invisible')}>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
    
    </nav>
  )
}

export default Topbar