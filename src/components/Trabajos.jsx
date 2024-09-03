import React from 'react'
import Image from 'next/image'
import CardItems from './CardItems'
import spa from '@/assets/spa.svg'
import laptop from '@/assets/laptop.svg'
import tester from '@/assets/tester.svg'
import chem from '@/assets/chemistry.svg'
import perf from '@/assets/perfusion.svg'
import { Card, CardContent } from './ui/card'

function Trabajos() {
  const spaList = ["Luz pulsada - Criolipólisis", "Cavitadores - Ultrasonido", "Plasma rico en Plaquetas"]; // Ejemplo de array de items
  const infoList = ["Sofware", "Hardware", "Mantenimiento", "Armado de Equipamiento"]; // Ejemplo de array de items
  const labList = ["Serología", "Biolóca molecular", "Patología", "Histocompatibilidad", "Citogenética"]; // Ejemplo de array de items
  const caliList = ["Pipetas mecánicas y Electrónicas", "Dispensers", "Termómetros", "Balanzas"]; // Ejemplo de array de items
  const List = ["agitadores de bolsa para extracción", "selladores de tubuladura", "contadores hematológicos y coagulometros", "fotómetros de hemoglobina", "incubadores secos y húmedos", "estufas de cultivo y secado digitales", "irradiadores de sangre", "aglutinoscópios y fuentes", "agitadores de plaquetas y plasma", "heladeras y freezers", "procesadores de células madre", "lavadores y lectores de microplaca", "robots automatizados y pipeteadores", "medidores de gases e iones en sangre", "procesadores de aféresis", "Microscopios"]; // Ejemplo de array de items

  return (
    <>
      <div className='grid lg:grid-cols-3 gap-6 md:w-10/12 lg:w-full mx-auto'>
        <div className='workCards gap-6 justify-items-center lg:col-span-2'>
          <CardItems src={laptop} title="informática" items={infoList} />
          <CardItems src={spa} title="cirugias estétitcas" items={spaList} />
          <CardItems src={chem} title="laboratorios" items={labList} />
          <CardItems src={tester} title="calibraciones" items={caliList} />
        </div>

        <Card className='w-80 h-auto mx-auto flex flex-col justify-items-center bg-gray-100 border-none rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] transform-gpu hover:scale-[0.98] hover:shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300'>
          <CardContent className="px-4 py-8">
            <Image src={perf} alt='Diagnóstico y banco de sangre' width={70} className='mx-auto' />
            <h3 className='text-primaryColor text-center py-4 uppercase'>Diagnóstico y banco de sangre</h3>
            <ul className="grid gap-3 md:gap-0 text-xs md:text-sm">
              <li className="flex font-extralight text-sm capitalize pb-1">agitadores de bolsa para extracción</li>
              <li className="flex font-extralight text-sm capitalize pb-1">selladores de tubuladura</li>
              <li className="flex font-extralight text-sm capitalize pb-1">contadores hematológicos y coagulometros</li>
              <li className="flex font-extralight text-sm capitalize pb-1">fotómetros de hemoglobina</li>
              <li className="flex font-extralight text-sm capitalize pb-1">incubadores secos y húmedos</li>
              <li className="flex font-extralight text-sm capitalize pb-1">estufas de cultivo y secado digitales</li>
              <li className="flex font-extralight text-sm capitalize pb-1">irradiadores de sangre</li>
              <li className="flex font-extralight text-sm capitalize pb-1">aglutinoscópios y fuentes</li>
              <li className="flex font-extralight text-sm capitalize pb-1">agitadores de plaquetas y plasma</li>
              <li className="flex font-extralight text-sm capitalize pb-1">heladeras y freezers</li>
              <li className="flex font-extralight text-sm capitalize pb-1">procesadores de células madre</li>
              <li className="flex font-extralight text-sm capitalize pb-1">lavadores y lectores de microplaca</li>
              <li className="flex font-extralight text-sm capitalize pb-1">robots automatizados y pipeteadores</li>
              <li className="flex font-extralight text-sm capitalize pb-1">medidores de gases e iones en sangre</li>
              <li className="flex font-extralight text-sm capitalize pb-1">procesadores de aféresis</li>
              <li className="flex font-extralight text-sm capitalize pb-1">Microscopios</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Trabajos
