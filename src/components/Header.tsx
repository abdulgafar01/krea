import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import { Bell, ChevronDown, Headset, ImagePlus } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react'

const Header = () => {
  return (
    <div>
     <header className="hidden items-center justify-between px-6 py-4  md:flex">
        <div className='flex items-center gap-2'>
            <Image src='/logo.svg' alt='logo' width={18} height={18} className="block dark:hidden"/>
            <Image src='/logo-white.svg' alt='logo' width={18} height={18} className="hidden dark:block"/>

            <span className="font-bold text-lg">
            benevolentminibot
            </span>

      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-purple-300 to-blue-100 flex items-center justify-center">
        <div className='w-4 h-4 z-30 rounded-full bg-gradient-to-b from-purple-400 to-purple-500 backdrop-blur-2xl opacity-40'></div>
      </div>

            <ChevronDown/>
        </div>
        <Nav/>
        <div className="flex items-center gap-3">
          <Button className='bg-gray-100 hover:bg-gray-50 p-3 rounded-lg text-gray-800 cursor-pointer'>
            <ImagePlus/>
            <span>

            Gallery
            </span>
        </Button>
          <Button className='bg-gray-100  hover:bg-gray-50 p-3 rounded-lg text-gray-800 cursor-pointer'>

            <Headset/>
            <span>
            Support
            </span>
        </Button>

          <div className='bg-gray-100 p-3 rounded-lg dark:text-gray-800 cursor-pointer'>
            <Bell width={16} height={16}/>
          </div>
          <ModeToggle/>
           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center"/>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className='flex items-center justify-between px-6 py-4'>
             
            <Button size="icon" className='p-3 rounded-lg dark:bg-gray-50'>
              <Menu className="h-10 w-10 text-white dark:text-gray-800 cursor-pointer font-bold" />
            </Button>

            <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  className="block dark:hidden"
                />
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  className="hidden dark:block"
                />
                <span className="font-bold text-lg">benevolentminibot</span>
              </div>

            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-4">
            <SheetHeader>
               <SheetTitle>

              <div>

              </div>
               </SheetTitle>
            </SheetHeader>

            {/* Nav inside drawer */}
            <div className=" flex flex-col items-start gap-4">
              <div >
              <Nav />
              </div>
              <div className='flex flex-col gap-4 items-start'>
              <Button className="bg-gray-100 p-3 rounded-lg hover:bg-gray-50 cursor-pointer text-gray-800">
                <ImagePlus /> 
                <span>
                Gallery
                </span>
              </Button>
              <Button className="bg-gray-100 p-3 rounded-lg  hover:bg-gray-50 cursor-pointer text-gray-800">
                <Headset />
                <span>
                 Support
                </span>
              </Button>

              </div>
              <div className="flex items-start flex-col gap-3 mt-4">
                <ModeToggle />
                <div className="bg-gray-100 p-3 rounded-lg dark:text-gray-800">
                  <Bell width={16} height={16} />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  )
}

export default Header
