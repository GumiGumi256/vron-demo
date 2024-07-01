import { products } from '@/constants'
import React from 'react'
import ProductCard from './product-card'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'


const Products = () => {
  return (
    <section className='mt-24 mb-10 mx-5 md:mx-10'>
        <div className='flex flex-col justify-center items-center gap-2 max-w-[700px] mx-auto'>
            <p className='text-xs text-secondary font-bold'>Products</p>
            <h3 className='text-textColor capitalize text-3xl font-bold'>popular products</h3>
            <p className='text-center text-balance text-pColor mt-3'>Discover timeless elegance and modern functionality in our furniture collection. From eco-friendly dining sets to ergonomic office desks and cozy lounge chairs, each piece is crafted to elevate your space with style and comfort. Explore our curated selection and find the perfect match for your home or office</p>
        </div>

        
        <div className='flex justify-center items-center gap-10 w-full my-10 flex-wrap'>
{
  products.map((product) =>(

      <ProductCard key={product.id} product={product} />
    ))
}
        </div>
      
    </section>
  )
}

export default Products