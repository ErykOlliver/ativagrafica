import Image from 'next/image'
import React from 'react'

type props = {
    id: number,
    img: string,
    title: string,
    sub_title: string,
    description: string
}

export default function ServiceCard({ title, sub_title, description, id, img }: props) {

    const ehPar = (id: number) => {
        return id % 2 === 0
    }

    return (
        <article className={`w-full bg-darkgray border-t-2  relative ${ehPar(id) ? 'border-r-2' : 'border-l-2'} border-white min-h-25 h-fit items-center flex justify-center`}>
            <div className='flex absolute z-20 bg-linear-to-r py-2.5 pl-7 from-darkgray via-zinc-700 to-transparent flex-col items-start justify-center w-full h-full'>
                <h1 className='font-montserrat font-semibold text-white text-xs'>{title}</h1>
                <h2 className='font-montserrat font-medium text-[10px] text-whitegray'>{sub_title}</h2>
                <h3 className='font-montserrat font-normal text-[10px] text-white/50 w-2/3'>{description}</h3>
            </div>
            <div className='absolute aspect-square bg-red-500 h-full z-10 w-auto right-0 top-0'>
                <Image src={img} alt={title} className='object-cover' fill priority />
            </div>
        </article>
    )
}
