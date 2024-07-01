
'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import Image from "next/image"
  


import React from 'react'

const MobileNav = () => {
  return (
    <nav className='flex justify-between items-center p-5 shadow-md bg-white lg:hidden'>
<img src="/vron.png" alt=" logo" width={50} height={50} />
<Sheet>
  <SheetTrigger><img src="/menu-burger.png" alt=" logo" width={40} height={40} className="cursor-pointer" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <ul className='flex flex-col gap-5 justify-start items-start '>
{
    navLinks.map((navLink) => (
        <SheetClose key={navLink.id} asChild>

<li className='text-textColor font-bold capitalize hover:text-primary'>{navLink.title}</li>
        </SheetClose>
    ))
}
        </ul>

        <div className='flex flex-col gap-8 items-start mt-20'>
<Image 
src='/basket-shopping-simple.png'
alt='basket icon'
width={24}
height={24}
/>
<Image 
src='/user.png'
alt='basket icon'
width={24}
height={24}
/>
        </div>

    </SheetHeader>
  </SheetContent>
</Sheet>

    </nav>
  )
}

export default MobileNav