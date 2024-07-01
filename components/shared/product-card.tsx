import Image from 'next/image';
import React from 'react'

interface ProductProps {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
price: string;
}

const ProductCard = ({product}: {product : ProductProps}) => {
  const {id, title, shortDescription, longDescription, price, image} = product
  return (
    <div>
     <div className='w-[300px] h-[200px] relative'>
     <Image 
      src={image}
      alt='product image'
     fill
      className='object-cover'
      />
     </div>
      <p className='mt-2 text-textColor font-bold text-lg capitalize'>{title}</p>
      <p className='text-pColor my-2'>{shortDescription}</p>
      {/* <p className='font-bold text-textColor'>{price}</p> */}
    </div>
  )
}

export default ProductCard