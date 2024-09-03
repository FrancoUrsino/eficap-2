import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Form from '@/components/Form'
import sobre from '@/assets/sobre.svg'
import wpp from '@/assets/wpp.svg'

function page() {
  return (
    <>
      <main className='bg-slate-50'>
        <div className='py-20'>
          <section className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center items-center w-11/12 mx-auto pb-6'>
            <div>
              <p className='text-primaryColor text-sm md:text-xl lg:text-lg xl:text-2xl flex text-center justify-center items-center lg:mt-6'><Image src={sobre} alt='icono sobre' width={35} className='mr-1' />Dejanos tu mensaje y será respondido a la brevedad</p>
              <Form />
            </div>
            <div className='mx-auto w-11/12'>
              <h2 className='text-primaryColor font-bold text-2xl lg:text-3xl uppercase lg:pt-0 mb-2'>información</h2>
              <p className='flex py-2 text-lg lg:text-lg xl:text-2xl'><Image src={wpp} alt='whatsapp logo' width={25} /><Link href="mailto:eficap@eficap.com.ar " target="_blank" className='pl-2 font-light hover:text-primaryColor' rel="noopener noreferrer">eficap@eficap.com.ar</Link></p>
              <p className='flex py-2 text-lg lg:text-lg xl:text-2xl'><Image src={wpp} alt='whatsapp logo' width={25} /><Link href="tel:1535253017" className='pl-2 font-light hover:text-primaryColor' rel="noopener noreferrer">153-525-3017</Link></p>
              <p className='flex py-2 lg:pb-4 xl:pb-10 text-lg lg:text-lg xl:text-2xl '><Image src={wpp} alt='whatsapp logo' width={25} /><Link href="tel:49244466" className='pl-2 font-light hover:text-primaryColor'>4924-4466</Link></p>
              <h2 className='text-primaryColor font-bold text-2xl lg:text-3xl uppercase mt-6 mb-4'>sucursales</h2>
              <p className='md:font-light text-sm md:text-lg pb-4'>Pueden encontrarnos de lunes a viernes de 9 a 18hs</p>
              <div className='flex mb-6 lg:w-9/12'>
                <p>Distrito Tecnológico<br/>Parque Patricios<br/>CABA</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105050.0459255371!2d-58.401221!3d-34.634142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1a1d4aa3c7%3A0x6861764e9bda7a41!2sEFICAP%20%3A%20Servicio%20T%C3%A9cnico%20y%20Calibraci%C3%B3n%20de%20Pipetas!5e0!3m2!1ses-419!2sar!4v1725239542462!5m2!1ses-419!2sar" width="200" height="130" className="mx-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Oficinas de CABA'></iframe>
              </div>
              <div className='flex my-3 lg:w-9/12'>
                <p>Ciudad de La Plata<br/>Provincia de Bs As</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26172.275895992512!2d-57.95304900000001!3d-34.91813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e631b2b8756d%3A0xa55653c9398516b6!2sGabiluz!5e0!3m2!1ses-419!2sar!4v1725239625511!5m2!1ses-419!2sar" width="200" height="130" className="mx-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Oficinas de La plata'></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default page