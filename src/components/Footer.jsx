import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.jpg'
import mail from '@/assets/gmail.svg'
import call from '@/assets/llamada.svg'
import twitter from '@/assets/twitter.svg'
import wpp from '@/assets/wpp.svg'

const Footer = () => {
  return (
    <>
      <hr className='-translate-y-4' />
      <footer className="p-8 mx-auto bg-slate-50 flex">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-betweent">
              <Image loading='lazy' src={logo} alt="EFICAP" width={150} className='pt-3' />
          <div className='justify-self-center w-11/12 lg:justify-self-end'>
            <p className="font-normal text-primary-color text-sm lg:text-lg md:text-sm mb-2 text-center pt-10 md:pt-2">1997©EFICAP | All Rigths Reserved</p>
            <p className="font-normal text-primary-color text-sm lg:text-lg md:text-sm text-center ">Diseño y Desarrollo por <Link href="mailto:francooursinoo@gmail.com">Franco Ursino</Link></p>
          </div>
          <div className="flex space-x-4 mt-8 md:my-auto">
              <Link href="mailto:eficap@eficap.com.ar" target="_blank"><Image loading='lazy' src={mail} alt='mail logo' width={30} /></Link>
              <Link href="https://wa.me/+5491535253017?text=Buenas!+me+contacto+desde+la+página+web" target="_blank"><Image loading='lazy' src={wpp} alt='mail logo' width={28} /></Link>
              <Link href="https://twitter.com/ServicioEficap?t=fnRzqzdXx4yV#q3h68NHw&s=09" target="_blank"><Image loading='lazy' src={twitter} alt='mail logo' width={30} /></Link>
              <Link href="tel:49244466" target="_blank"><Image loading='lazy' src={call} alt='mail logo' width={33} /></Link>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;