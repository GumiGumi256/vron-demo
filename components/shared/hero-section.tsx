import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center h-[70vh] md:h-screen relative'>
        <h1 className='text-[26px] md:text-[64px] font-bold text-textColor max-w-[800px] text-center text-balance'>VRON Interior Designs</h1>
<p className='mt-2 mb-3 text-pColor max-w-lg text-center text-balance mx-3'>Creating Dream Kitchens And Wardrobe furniture </p>
<img
 src="/sketch.png"
  alt="sketch" 
  width={200} 
  height={80}
   className='object-contain absolute left-[15%] top-[12%] hidden md:block'
   />
   <img
 src="/sketch.png"
  alt="sketch" 
  width={130} 
  height={80}
   className='block md:hidden object-contain absolute -left-5 top-[18%]'
   />
<img
 src="/sketch-2.png"
  alt="sketch" 
  width={40} 
  height={40}
   className='object-contain absolute top-[18%] right-[360px] hidden md:block'
   />
   <img
 src="/sketch-2.png"
  alt="sketch" 
  width={40} 
  height={40}
   className='object-contain absolute top-[19%] right-[40px] block'
   />
<div className='relative mt-10'>
 <div className='w-full  md:w-[600px] md:absolute -top-7 left-[14%] mb-5'>
 <Input
  placeholder='search products'
  className='relative py-7 bg-white border-none pl-10 shadow-lg'
  
  />
  <img 
  src="/search.png" 
  alt=" search icon" 
  width={20}
   height={20} 
   className='absolute top-5 left-2'
   />
   <Button className='bg-primary absolute top-3 right-2'>
    search
   </Button>
 </div>
  <Image 
  src='/hero-img.png'
  alt='hero image'
  width={900}
  height={300}
  />
</div>
        </section>
  )
}

export default Hero