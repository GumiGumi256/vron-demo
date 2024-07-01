import { navLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const DesktopNavbar = () => {
  return (
    <nav className='hidden md:flex justify-between items-center w-full p-5 bg-white shadow-md'>
        <div>
<Image 
src='/vron.png'
alt='brand logo'
width={90}
height={40}
/>
        </div>
        <ul className='flex gap-10 items-center'>
{
    navLinks.map((navLink) => (
<li className='text-textColor font-bold capitalize hover:text-primary' key={navLink.id}>{navLink.title}</li>
    ))
}
        </ul>
        <div className='flex gap-8 items-center'>
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
    </nav>
  )
}

export default DesktopNavbar