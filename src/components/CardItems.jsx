import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from './ui/card'

export default function CardItems({ src, title, items }) {
  return (
    <Card className='w-56 xl:w-64 h-auto flex flex-col justify-items-center bg-gray-100 border-none rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform-gpu hover:scale-[0.98] hover:shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300'>
      <CardContent className="px-4 py-6">
      <Image loading='lazy' src={src} alt={title} width={70} className='mx-auto' />
      <h3 className='text-primaryColor text-center py-4 uppercase'>{title}</h3>
      <ul className="grid gap-3 md:gap-0 text-xs md:text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <p className="font-extralight text-sm pb-1 capitalize">{item}</p>
          </li>
        ))}
      </ul>
      </CardContent>
    </Card>
  )
}
