import BentoDesign from '@/components/servicios'
import Trabajos from '@/components/Trabajos'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import certificados from '@/assets/CERTIFICADOS.jpg'
import service from '@/assets/FOTO_SERVICE.jpg'

function page() {
  return (
    <main className='bg-slate-50 overflow-x-hidden'>
      <div className='bg-black flex justify-evenly relative md:text-lg text-white top-14 md:top-12 uppercase'>
        <Link href="tel:49244466">Teléfono: 4924-4466</Link>
        <Link href="tel:1535253017">Urgencias: 153-525-3017</Link>
      </div>
      <section className=''>
        <h1 className='title text-[7rem] md:text-[9rem] xl:text-[12rem] md:text-left font-light w-11/12 mx-auto text-center uppercase pt-32'>eficap</h1>
        <h2 className='text-4xl md:text-2xl xl:text-3xl font-extralight mt-6 md:mt-0 md:pl-3 text-center md:text-left uppercase text-primaryColor w-11/12 mx-auto flex md:relative md:-top-10'>servicio técnico de electromedicina</h2>
        <div className='my-32 md:mt-24 md:mb-40 w-10/12 md:w-1/2 xl:w-2/3 mx-auto md:mr-4 md:text-lg'>
          <p>Fundamos nuestra empresa en el año 1997 pensando en que forma podríamos resultar útiles dentro de la Electromedicina y BioIngeniería en nuestro País y Latinoamerica.</p>
          <p>Así entonces, logramos brindar servicios de Reparación, Mantenimiento Preventivo, Calibraciones, Manejo de Normativas de Calidad, Auditorías y Asistencia Informática en una amplia variedad de Instrumental Médico, Banco de Sangre, Diagnóstico, Laboratorios y Medicina Estética.</p>
        </div>
      </section>
      <section className='w-10/12 md:w-11/12 mx-auto'>
        <h2 className='text-primaryColor text-3xl md:text-4xl uppercase pl-3 pb-10 text-center md:text-start'>servicios brindados</h2>
        <BentoDesign />
      </section>
      <section className='w-10/12 md:w-11/12 mx-auto my-20 pl-3'>
        <h2 className='uppercase text-primaryColor text-3xl md:text-4xl pb-10 text-center md:text-start'>acerca de nosotros</h2>
        <div className='grid md:grid-cols-2 gap-3 justify-items-center md:justify-items-start'>
          <p className='lg:text-lg xl:text-2xl w-11/12 pb-6 md:pb-0'>CONTAMOS CON PROFESIONALES MATRICULADOS CON ASISTENCIA A CURSOS DE CAPACITACION TÉCNICA NACIONAL E INTERNACIONAL, CON OBTENCIÓN DE CERTIFICACIONES PARA INSTALAR, CONSERVAR Y REPARAR DISTINTOS TIPOS Y MODELOS DE EQUIPAMIENTOS EN ELECTROMEDICINA.</p>
          <Image loading='lazy' src={certificados} alt='certificados' width={360} className='md:w-[550px] lg:w-[500px] md:justify-self-center lg:justify-self-end' />
        </div>
        <Image loading='lazy' src={service} alt='oficina de trabajo' className='mt-6 w-full lg:h-80 object-cover' />
      </section>
      <section className='w-10/12 md:w-11/12 mx-auto my-20 pl-3'>
        <h2 className='uppercase text-primaryColor text-3xl md:text-4xl pb-10 text-center md:text-start'>sectores de trabajo</h2>
        <Trabajos />
      </section>
    </main>
  )
}

export default page