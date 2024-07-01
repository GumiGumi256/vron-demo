import { benefits } from '@/constants'
import React from 'react'
import BenefitsCard from './benefits-card'

const Benefits = () => {
  return (
    <section className='mt-5 md:mt-10 mx-5 md:mx-10'>
       <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full mb-5'>
        <div>
        <p className='mb-2 text-secondary text-xs font-bold'>Benefits</p>
        <h2 className='text-textColor capitalize font-bold text-3xl'>
            why <span className='text-primary'>VRON Interiors</span>
        </h2>
        </div>
        <p className='w-full md:max-w-lg text-balance text-pColor mt-2 md:mt-0 text-center md:text-left'>It all began with a group of Youth who sat together and came up with an idea of how the The interior Design Trends and Styles from European Countries Could Be done and adopted   In Uganda without importing them.  We established Vron Interior Designs, a branch of Vron engineering Limited  dedicated to finding a cutting-edge solutions to Home Decor and Interior Designs.</p>
       </div>

<div className='flex flex-wrap gap-20 mt-10 mb-10 '>
    {
        benefits.map((benefit) => (
            <BenefitsCard key={benefit.id} benefit={benefit} />
        ))
    }
</div>

    </section>
  )
}

export default Benefits