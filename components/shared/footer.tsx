import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col md:flex-row gap-14  md:mx-20 p-5 md:p-10'>
        <div className='flex-1 flex flex-col gap-10'>
            <img src='/vron.png' width={80} height={80} alt='logo' />
            <p className='max-w-[600px] text-textColor'>Every piece tells a tale, from office elegance to cozy comfort. We value relationships over transactions, crafting quality at every turn</p>
        </div>
        <div>
            <p className='font-bold text-lg text-textColor mb-5'>Product</p>
            <ul className='flex flex-col gap-4 text-pColor'>
                <li>New Arrivals</li>
                <li>Best selling</li>
                <li>Home Decor</li>
                <li>Kitchen set</li>
            </ul>
        </div>
        <div>
            <p className='font-bold text-lg text-textColor mb-5'>Learn More</p>
            <ul className='flex flex-col gap-4 text-pColor'>
                <li>Catalogue</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Pricing</li>
            </ul>
        </div>
         <div>
            <p className='font-bold text-lg text-textColor mb-5'>follow us</p>
            <ul className='flex flex-col gap-4 text-pColor'>
                <li>Facebbok</li>
                <li>Instagram</li>
                <li>X</li>
        
            </ul>
        </div>
    </section>
  )
}

export default Footer