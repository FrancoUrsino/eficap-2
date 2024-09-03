import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import img from '@/assets/carousel/pami.png'
import img1 from '@/assets/carousel/hospItaliano.png'
import img2 from '@/assets/carousel/pricai.png'
import img3 from '@/assets/carousel/tecan.png'
import img4 from '@/assets/carousel/garrahan.png'
import img5 from '@/assets/carousel/hemocue.gif'
import img6 from '@/assets/carousel/gilson.png'
import img7 from '@/assets/carousel/starbene.png'
import img8 from '@/assets/carousel/centralab.png'
import img9 from '@/assets/carousel/favaloro.png'
import img10 from '@/assets/carousel/aathi.jpg'
import img11 from '@/assets/carousel/biorad.webp'
import img12 from '@/assets/carousel/biosafe.jpg'
import img13 from '@/assets/carousel/diamed.png'
import img14 from '@/assets/carousel/hemocentro.png'
import img15 from '@/assets/carousel/aahi.webp'
import img16 from '@/assets/carousel/abbott.png'
import img17 from '@/assets/carousel/nasa.jpg'
import img18 from '@/assets/carousel/thermo.webp'
import img19 from '@/assets/carousel/cemic.png'
import img20 from '@/assets/carousel/labsystem.png'
import img21 from '@/assets/carousel/grifols.jpg'
import img22 from '@/assets/carousel/hospClinicas.jpg'
import img23 from '@/assets/carousel/conicet.png'
import img24 from '@/assets/carousel/HORIBA.webp'
import img25 from '@/assets/carousel/opentrade.webp'


function Carousel() {
  return (
      <div>
        <Marquee direction="left" speed={100} delay={0.1}>
          <div className="my-10 mx-auto">
            <Image src={img} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Pami" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img1} width={900} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Hospital Italiano" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img2} width={1800} className='mx-4 w-2/3 lg:w-full object-fill' alt="Logo Pricai" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img3} width={500} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Tecan" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img4} width={8000} className='w-full mx-auto object-fill' alt="Logo Hospital Garrahan" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img5} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Hemocue" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img6} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Gilson" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img7} width={350} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Starbene" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img8} width={5000} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Centralab" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img9} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Fundación Favaloro Hospital Universitario" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img10} width={5000} className='mx-auto w-full object-fill' alt="Logo AATHI" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img11} width={800} className='mx-auto w-2/3 lg:w-4/5 object-fill' alt="Logo Bio-rad" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img12} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Biosafe" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img13} width={8000} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Diamed" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img14} width={5000} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Fundación Hemocentro" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img15} width={800} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo AAHI" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img16} width={400} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Abbott" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img17} width={3000} className='mx-4 w-full object-fill' alt="Logo NA-SA" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img18} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Thermo Scientific" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img19} width={350} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Cemic" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img20} width={900} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Labsystems" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img21} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Grifols" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img22} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Hospital Clínicas" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img23} width={250} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Conicet" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img24} width={450} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Horiba" />
          </div>
          <div className="my-10 mx-auto">
            <Image src={img25} width={8000} className='mx-4 w-2/3 lg:w-4/5 object-fill' alt="Logo Open Trades" />
          </div>
        </Marquee>
      </div>
  )
}

export default Carousel;