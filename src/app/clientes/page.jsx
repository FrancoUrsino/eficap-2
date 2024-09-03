import Link from 'next/link'
import React from 'react'
import Carousel from '@/components/Carousel'

function page() {
  return (
    <div className=''>
      <div className='bg-black flex justify-evenly relative md:text-lg text-white top-14 md:top-12 uppercase'>
        <Link href="tel:49244466">Teléfono: 4924-4466</Link>
        <Link href="tel:1535253017">Urgencias: 153-525-3017</Link>
      </div>
      <div className='flex flex-col relative text-center top-20'>
      <h2 className='text-primaryColor px-4 text-2xl md:text-3xl xl:text-4xl font-bold uppercase'>más de 25 años de experiencia en electromedicina</h2>
      <p className='pt-6 text-lg'>Solicite nuestras referencias</p>
      </div>
      <Carousel />
    </div>
  )
}

export default page
