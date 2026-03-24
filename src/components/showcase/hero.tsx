import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <section className='relative w-full px-7 flex flex-col gap-4 items-center justify-center pt-30 min-h-4/5'>
            <div className='w-full h-full absolute bg-black/80 -z-1 top-0'/>
            <video autoPlay loop muted playsInline className=' absolute -z-2 inset-0 h-full w-full object-cover'>
                <source src='/homeclip.mp4' type="video/webm" />
            </video>
            <h1 className='text-2xl font-montserrat font-bold text-center text-white'>Transforme Sua Visão em Impacto Real com a Ativa Gráfica.</h1>
            <h2 className='text-xs font-montserrat text-whitegray text-center bg-black/30 p-2 border-b border-white/20'>Design estratégico e produção gráfica de alto padrão para empresas que querem ser lembradas, respeitadas e escolhidas.</h2>
            <Link href={''} className='text-white shadow-[0_0_5px] shadow-green-500 bg-greenaccent p-4 border-l-2 border-t-2 font-bold text-xs border-white rounded-full'>Quero Elevar o Nível da Minha Marca</Link>
            <p className='text-xs font-montserrat text-whitegray text-center'>Sua Marca Não Pode Parecer Amadora.</p>
        </section>
    )
}
