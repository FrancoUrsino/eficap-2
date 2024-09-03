import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-br">
      <Card className="mb-8 bg-white border-none rounded-2xl overflow-hidden shadow-[0_20px_50px_#d6d6d6] transform-gpu hover:scale-[1.02] transition-all duration-300">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-primaryColor text-center">ACORDE A LO SOLICITADO POR:</h2>
          <ul className="grid gap-3 md:gap-0 text-xs md:text-sm">
            {[
              "ANMAT DISPOSICIÓN 1682 - BANCO DE SANGRE",
              "PLAN NACIONAL DE SANGRE - CAPÍTULO E3 PÁG. 11",
              "ORGANIZACIÓN PANAMERICANA - GESTIÓN DE CALIDAD - PÁG. 231",
              "MINISTERIO DE SALUD - RESOLUCIÓN 797/2013",
              "INCUCAI - RESOLUCIÓN 406 - HISTOCOMPATIBILIDAD",
              "UNC LABORATORIO DE HEMODERIVADOS - RECOLECCIÓN DE PLASMA",
              "JOINT COMMISSION - ACREDITACIÓN HOSPITALARIA",
              "AABB/ISO 9001 - GESTIÓN DE CALIDAD",
              "PAL - FUNDACIÓN BIOQUÍMICA",
              "CAP - COLEGIO AMERICANO DE PATOLOGÍA",
              "NORMAS IRAM",
              "SENASA",
              "ITAES - ISQua"
            ].map((item, index) => (
              <li key={index} className="flex ">
                <svg className="w-6 h-6 mr-3 text-primaryColor hidden md:flex" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="flex md:hidden">-</p>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          { title: "REPARACIONES", description: "Repuestos originales y/o alternativos en varios modelos y marcas del mercado", span: "md:col-span-2" },
          { title: "MANTENIMIENTO PREVENTIVO", description: "Mensual, según normativas Nacionales e Internacionales", span: "md:col-span-1" },
          { title: "CALIBRACIONES", description: "Con uso de instrumentos patrón y entrega de certificados", span: "md:col-span-1" },
          { title: "DISERTACIONES Y CURSOS", description: "Conferencias de aprendizaje e información técnica presencial y online", span: "md:col-span-2 md:row-span-1" },
          { title: "AUDITORIAS", description: "Revisión de condiciones de trabajo de equipamientos y su funcionamiento", span: "md:col-span-2" },
          { title: "ABONOS", description: "Con visitas mensuales, armado de planillas técnicas - Manejo de normas ISO y Bioseguridad", span: "md:col-span-1" },
          { title: "PRESUPUESTO", description: "Visita técnica de diagnóstico a domicilio", span: "md:col-span-1" },
          { title: "FIRMA PROFESIONAL", description: "Profesionales matriculados - Gestión de calidad", span: "md:col-span-1" },
          { title: "EMERGENCIAS", description: "Servicio full time con disponibilidad a viajes nacionales e internacionales", span: "md:col-span-1" },
        ].map((item, index) => (
          <Card key={index} className={`bg-white border-none ${item.span} rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] transform-gpu hover:scale-[0.98] hover:shadow-[inset_0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300`}>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-3 text-primaryColor">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
        <Card className="md:col-span-3 lg:col-span-4 bg-white border-none rounded-2xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] transform-gpu hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-primaryColor">ATENCIÓN A:</h3>
            <p className="text-lg text-gray-600">
              Hospitales, Clínicas, Hemocentros, Fundaciones, Institutos de Medicina, Diagnóstico, Laboratorio, Centros de Estética y Belleza
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}