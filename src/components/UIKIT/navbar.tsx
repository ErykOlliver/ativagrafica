'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

const navigationOptions = [
    { label: 'ìnicio' },
    { label: 'Serviços' },
    { label: 'Galeria' },
    { label: 'Nosso Processo' },
    { label: 'Contato' },
]

export default function NavBar() {
    const [expandMenu, setExpandMenu] = useState(false)
    return (
        <>
            <div className='w-full h-fit fixed top-0 z-100 backdrop-blur-xs border-b-[0.5px] border-white/70 px-7 flex justify-between items-center pb-3.5 pt-8'>
                <Image src={'/logomark.svg'} className='w-35 h-auto' width={1920} height={1080} alt='logomarca ativa gráfica' priority />
                <LuMenu onClick={() => setExpandMenu(true)} className='text-white size-8' />
            </div>

            {expandMenu && (
                <div className='w-full h-fit flex flex-col fixed top-0 shadow-[0_0_10px] shadow-black border-b-[0.5px] border-white/70 bg-darkgray/70 backdrop-blur-3xl z-200'>
                    <header className='flex w-full h-fit items-center px-7 pb-3.5 pt-8 justify-between border-b border-white/70'>
                        <h1 className='text-base font-medium text-white font-montserrat'>Navegação</h1>
                        <LuX onClick={() => setExpandMenu(false)} className='size-8 bg-gray-600 p-1 rounded-full text-white' />
                    </header>
                    <article className='px-7 w-full h-fit py-2.5 '>
                        <nav className='w-full h-fit'>
                            <ul className='w-full h-fit flex flex-col gap-1.5'>
                                {navigationOptions.map((n) => (
                                    <li key={n.label} className='text-base text-white font-montserrat border-b border-white/10 py-2.5'>{n.label}</li>
                                ))}
                            </ul>
                        </nav>
                    </article>
                </div>
            )}
        </>
    )
}
