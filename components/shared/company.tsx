import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Company = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center gap-10 mx-5 md:mx-20 mb-10 mt-20'>
    <div className='w-full md:w-1/2'>
<p className='capitalize text-xs text-secondary font-bold'>our Products</p>
<h3 className='font-bold text-[34px] md:text-[44px] text- mt-2 capitalize'>Artisan-crafted, top-tier furniture</h3>
    <p className='text-pColor text-balance my-10'>Experience the artistry of our handcrafted furniture collection, meticulously designed with premium materials for lasting beauty and functionality.</p>
    
    <Button className='bg-primary py-5 px-6 mb-10 rounded-none w-full md:w-auto'>
        Learn More
    </Button>
   <div className='w-full h-[200px] relative'>
   <Image 
    src='/vron-2.png'
    alt='man crafting wood'
    fill
className='object-cover'
/>
   </div>
    </div>
    <div className='w-full md:w-[500px]'>
       <div className='flex gap-8 items-center justify-center mt-20'>
        <div>
            <p className='text-textColor font-bold text-2xl'>10+</p>
            <p className='mt-2 text-pColor capitalize'>years of Experience</p>
        </div>
        <div>
            <p className='text-textColor font-bold text-2'>1000+</p>
            <p className='mt-2 text-pColor capitalize'>happy clients</p>
        </div>
        <div>
            <p className='text-textColor font-bold text-2xl'>3000+</p>
            <p className='mt-2 text-pColor capitalize'>projects finished</p>
        </div>
        </div> 
        <div className='w-full h-[380px] relative mt-10'>
<Image 
src='/vron-1.png'
alt='furniture'
fill
className='object-cover'
/>
        </div>
    </div>
    </section>
  )
}

export default Company