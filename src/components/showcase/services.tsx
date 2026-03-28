import React from 'react'
import ServiceCard from '../UIKIT/services-card'
import Link from 'next/link'

const services = [
  {
    title: 'Impressão Digital & Offset',
    sub_title: 'Precisão que transmite autoridade.',
    description: 'Cores fiéis. Acabamento impecável. Padrão profissional em cada detalhe.',
    img: '/serviceImg (1).jpg'
  },
  {
    title: 'Sinalização Comercial & Eventos',
    sub_title: 'Sua marca dominando o ambiente.',
    description: 'Espaços comuns transformados em experiências visuais marcantes.',
    img: '/serviceImg (2).jpg'
  },
  {
    title: 'Adesivos & Faixas Personalizadas',
    sub_title: 'Visibilidade que gera reconhecimento.',
    description: 'Materiais resistentes com aplicação precisa e impacto imediato.',
    img: '/serviceImg (3).jpg'
  },
  {
    title: 'Banners & Displays Estratégicos',
    sub_title: 'Mensagem impossível de ignorar.',
    description: 'Peças criadas para capturar atenção e direcionar decisões.',
    img: '/serviceImg (4).jpg'
  },
]

export default function Services() {
  return (
    <section className='w-full flex flex-col gap-8 py-12 items-center justify-center h-fit bg-white'>
      <header className='w-full max-w-4xl flex flex-col px-7 py-4 h-fit gap-2'>
        <h1 className='text-lg md:text-3xl font-montserrat font-semibold text-center text-darkgray uppercase tracking-tighter'>
          Serviços Que Elevam Sua Marca ao Próximo Nível
        </h1>
        <h2 className='text-xs md:text-sm font-montserrat text-darkgray/70 text-center'>
          Não entregamos materiais. Entregamos presença, impacto e percepção de valor.
        </h2>
      </header>

      <article className='w-full lg:max-w-7xl lg:px-7 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4 h-fit'>
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            title={s.title}
            sub_title={s.sub_title}
            description={s.description}
            img={s.img}
            id={i}
          />
        ))}
      </article>

      <div className='flex px-7 flex-col items-center w-full max-w-2xl h-fit justify-center gap-6 mt-4'>
        <div className='text-center'>
          <p className='text-xs font-montserrat'>
            Sua marca já está no mercado. A pergunta é: <span className='text-greenaccent font-semibold'> ela está sendo percebida como deveria?</span>
          </p>
          <p className='text-base md:text-xl font-montserrat font-medium'>
            Quem investe em apresentação, conquista posicionamento.
          </p>
        </div>
        <Link href="" className='text-white text-center shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-greenaccent p-4 border-l-2 w-full md:w-auto md:px-12 border-t-2 font-bold text-xs border-white rounded-full transition-transform hover:scale-105'>
          Eleve o Padrão da Sua Marca Agora
        </Link>
      </div>
    </section>
  )
}
