import React from 'react'
import { LuBookmark, LuTrees,LuUsersRound, LuZap } from 'react-icons/lu'
import BenefitCard from '../UIKIT/benefit-card'
import Link from 'next/link'

const benefits = [
    { icon: <LuBookmark className='size-6' />, title: 'Qualidade Excepcional', description: 'Atenção minuciosa em cada acabamento, cada cor e cada aplicação.' },
    { icon: <LuZap className='size-6' />, title: 'Rapidez na Entrega', description: 'Cumprimos prazos porque respeitamos o seu negócio.' },
    { icon: <LuTrees className='size-6' />, title: 'Soluções Sustentáveis', description: 'Produção consciente, alinhada com o futuro.' },
    { icon: <LuUsersRound className='size-6' />, title: 'Equipe Especializada', description: 'Atenção minuciosa em cada acabamento, cada cor e cada aplicação.' },

]
export default function Benefits() {
    return (
        <section className='w-full relative flex bg-black py-16 lg:py-24 px-7 flex-col gap-12 items-center justify-center h-fit'>
            
            <header className='w-full max-w-4xl h-fit flex flex-col gap-4 items-center justify-center relative z-10'>
                <h1 className='font-montserrat font-bold text-center text-white text-xl md:text-3xl lg:text-4xl uppercase tracking-tighter'>
                    POR QUE ESCOLHER A GRÁFICA ATIVA?
                </h1>
                <h2 className='font-montserrat text-xs md:text-sm lg:text-base text-center text-whitegray uppercase tracking-widest'>
                    Excelência não é detalhe. <span className='font-semibold text-white'> É padrão.</span>
                </h2>
            </header>

            <article className='w-full max-w-7xl gap-4 md:gap-6 h-fit grid grid-cols-2 lg:grid-cols-4 items-stretch justify-center relative z-10'>
                {benefits.map((b, i) => (
                    <BenefitCard key={i} title={b.title} description={b.description} icon={b.icon} />
                ))}
            </article>

            <div className='flex flex-col items-center justify-center gap-8 max-w-2xl relative z-10'>
                <p className='text-center text-whitegray font-montserrat text-xs md:text-sm leading-relaxed'>
                    Escolher uma gráfica é escolher como sua marca será percebida. <br className='hidden md:block'/> Aqui, cada projeto é tratado como prioridade máxima.
                </p>
                
                <Link 
                    href="" 
                    className='text-white text-center shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-green-500/50 bg-greenaccent px-10 py-4 border-l-2 w-full md:w-auto border-t-2 font-bold text-xs md:text-sm border-white rounded-full transition-all hover:scale-105 active:scale-95'
                >
                    Fale Conosco Agora
                </Link>
            </div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-greenaccent/5 blur-[120px] rounded-full pointer-events-none' />
        </section>
    )
}