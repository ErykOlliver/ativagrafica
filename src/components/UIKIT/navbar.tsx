'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import Link from 'next/link'

const navigationOptions = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Nosso Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
]

export default function NavBar() {
    const [expandMenu, setExpandMenu] = useState(false)

    return (
        <>
            <header className='w-full h-fit fixed top-0 z-100 backdrop-blur-md bg-black/20 border-b-[0.5px] border-white/30 px-7 md:px-14 flex justify-between items-center pb-3.5 pt-8 transition-all'>
                
                <Image 
                    src={'/logomark.svg'} 
                    className='w-32 md:w-40 h-auto' 
                    width={160} 
                    height={40} 
                    alt='logomarca ativa gráfica' 
                    priority 
                />

                <nav className='hidden md:block'>
                    <ul className='flex gap-8 items-center'>
                        {navigationOptions.map((n) => (
                            <li key={n.label}>
                                <Link 
                                    href={n.href} 
                                    className='text-sm font-montserrat text-white/80 hover:text-white hover:font-semibold transition-all uppercase tracking-wider'
                                >
                                    {n.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#orcamento" className='bg-greenaccent text-white px-5 py-2 rounded-full font-bold text-xs border-t border-l border-white/40 shadow-lg hover:scale-105 transition-transform'>
                                ORÇAMENTO
                            </Link>
                        </li>
                    </ul>
                </nav>

                <LuMenu
                    onClick={() => setExpandMenu(true)} 
                    className='text-white size-8 md:hidden cursor-pointer' 
                />
            </header>

            {expandMenu && (
                <div className='w-full h-screen flex flex-col fixed top-0 left-0 shadow-2xl border-b-[0.5px] border-white/70 bg-darkgray/95 backdrop-blur-3xl z-200 md:hidden'>
                    <header className='flex w-full h-fit items-center px-7 pb-3.5 pt-8 justify-between border-b border-white/20'>
                        <h1 className='text-base font-medium text-white font-montserrat uppercase tracking-widest'>Navegação</h1>
                        <LuX 
                            onClick={() => setExpandMenu(false)} 
                            className='size-9 bg-white/10 p-2 rounded-full text-white cursor-pointer' 
                        />
                    </header>
                    <article className='px-7 w-full h-fit py-8'>
                        <nav className='w-full h-fit'>
                            <ul className='w-full h-fit flex flex-col gap-4'>
                                {navigationOptions.map((n) => (
                                    <li 
                                        key={n.label} 
                                        onClick={() => setExpandMenu(false)}
                                        className='text-xl text-white font-montserrat border-b border-white/5 pb-4 transition-colors active:text-greenaccent'
                                    >
                                        <Link href={n.href} className='w-full block'>{n.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </article>
                </div>
            )}
        </>
    )
}