import Image from 'next/image';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TestimonialProps {
    id: number;
    name: string;
    message: string;
    rating: number;
    img: string;
}

const TestimonialCard = ({testimonial}:{testimonial: TestimonialProps}) => {
    const {id, name, message, rating, img} = testimonial
  return (
    <div className='w-[350px] md:w-[400px] bg-white shadow-md p-5'>
       <Image 
       src='/quote-up.png'
       alt='qoutes'
       width={30}
       height={30}
       className='object-contain'
       />
       <p className='text-pColor text-balance my-2  w-full'>{message}</p>
<div className='flex justify-between items-center mt-4'>
    <div className='flex gap-2 items-center'>
   <img src={img} alt="avatar" width={40} height={40} />
    <p className='font-bold text-textColor text-xs'>{name}</p>
    </div>
    <div className='flex gap-2 items-center'>
        <img src="/star.png" alt="star icon" width={20} height={20} />
        <p className='font-bold text-xs'>{rating}</p>
    </div>
</div>
        </div>
  )
}

export default TestimonialCard