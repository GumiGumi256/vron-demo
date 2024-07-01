import { testimonials } from '@/constants'
import React from 'react'
import TestimonialCard from './testimonial-card'

const Testimonials = () => {
  return (
    <section className='mt-10 mb-20'>
<div className='flex flex-col gap-2 justify-center items-center'>
<p className='text-xs font-bold capitalize text-secondary'>testimonials</p>
<h3 className='text-3xl text-textColor mb-5 font-bold'>What our customer say</h3>
<p className='text-pColor text-center text-balance mb-10 max-w-lg'>Immerse yourself in the world of Nina Interiors, where each piece of furniture tells a story of craftsmanship and quality. Our customers’ spaces have been transformed, their lifestyles elevated.</p>
</div>

<div className='flex flex-col md:flex-row gap-5 md:gap-10 w-full justify-center items-center '>
    {
        testimonials.map((testimonial) =>(
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))
    }
</div>

    </section>
  )
}

export default Testimonials