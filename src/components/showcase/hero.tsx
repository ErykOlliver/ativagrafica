import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <section className='relative w-full px-7 flex flex-col gap-6 items-center justify-center pt-32 md:pt-40 min-h-[80vh] lg:min-h-screen'>
            <div className='w-full h-full absolute bg-black/70 -z-1 top-0' />

            <video autoPlay loop muted playsInline className='absolute -z-2 inset-0 h-full w-full object-cover'>
                <source src='/homeclip.mp4' type="video/webm" />
            </video>

            <div className='z-10 flex flex-col items-center gap-6 max-w-4xl'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold text-center text-white leading-tight'>
                    Transforme Sua Visão em Impacto Real com a Ativa Gráfica.
                </h1>

                <h2 className='text-xs md:text-sm lg:text-base font-montserrat text-whitegray text-center bg-black/40 p-4 border-b border-white/10 max-w-2xl'>
                    Design estratégico e produção gráfica de alto padrão para empresas que querem ser lembradas, respeitadas e escolhidas.
                </h2>

                <div className='flex flex-col items-center gap-4 mt-4'>
                    <Link
                        href={'#'}
                        className='text-white text-center shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-green-500/60 bg-greenaccent px-8 py-4 border-l-2 border-t-2 font-bold text-sm md:text-base border-white rounded-full transition-all duration-300 hover:scale-105'
                    >
                        Quero Elevar o Nível da Minha Marca
                    </Link>

                    <p className='text-[10px] md:text-xs font-montserrat text-whitegray text-center uppercase tracking-widest'>
                        Sua Marca Não Pode Parecer Amadora.
                    </p>
                </div>
            </div>
        </section>
    )
}
