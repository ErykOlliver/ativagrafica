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
        <section className='w-full relative flex bg-black py-4 px-7 flex-col gap-4 items-center justify-center h-fit'>
            <header className='w-full h-fit flex flex-col gap-4 items-center justify-center'>
                <h1 className='font-montserrat font-semibold text-center text-white text-lg'>POR QUE ESCOLHER A GRÁFICA ATIVA?</h1>
                <h2 className='font-montserrat text-xs text-center text-whitegray'>Excelência não é detalhe. <span className='font-semibold text-white'> É padrão.</span></h2>
            </header>
            <article className='w-full gap-2 h-fit grid grid-cols-2 items-center justify-center'>
                {benefits.map((b, i) => (
                    <BenefitCard key={i} title={b.title} description={b.description} icon={b.icon} />
                ))}
            </article>
            <div className='flex flex-col items-center justify-center gap-4'>
                <p className='text-center text-whitegray font-montserrat text-xs'>Escolher uma gráfica é escolher como sua marca será percebida. Aqui, cada projeto é tratado como prioridade.</p>
            </div>
            <Link href="" className='text-white text-center shadow-[0_0_5px] shadow-green-500 bg-greenaccent p-4 border-l-2 w-full border-t-2 font-bold text-xs border-white rounded-full'>Fale conosco Agora</Link>
        </section>
    )
}
