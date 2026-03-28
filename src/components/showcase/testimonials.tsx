'use client'

import Image from 'next/image'
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialCard from '../UIKIT/testimonials-card'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

const testimonials = [
    {
        testimonial: 'Serviço gráfico de excelência em Camaçari e região. Indico sempre a Gráfica Ativa.',
        name: 'Fernando Muniz'
    },
    {
        testimonial: 'Passando para agradecer a vocês pelo serviço de excelência e todo o cuidado em cada detalhe!',
        name: 'Stefanie Borges'
    },
    {
        testimonial: 'A melhor gráfica da cidade , o melhor preço com a melhor qualidade!!!!',
        name: 'Emerson Andrade'
    },

]

export default function Testimonials() {
    return (
        <section className='w-full relative flex py-4 px-7 flex-col gap-4 items-center justify-center h-fit'>
            <div className='w-full h-full absolute bg-black/80 -z-1 top-0' />
            <Image src={'/Bannerdepoiments.jpg'} alt='Banner Depoimentos' fill className='object-cover absolute -z-2 inset-0 h-full w-full' />
            <header className='w-full flex flex-col gap-4 relative z-10'>
                <h1 className='font-semibold text-white font-montserrat text-lg text-center'>Empresas que confiaram. Resultados que confirmam.</h1>
                <h2 className='font-semibold text-whitegray font-montserrat text-xs text-center'>A confiança não se constrói com promessas. Se constrói com entrega consistente, qualidade comprovada e parceiros satisfeitos.</h2>
            </header>
            <article className='flex items-center justify-center w-full h-fit'>
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    navigation={true}

                    className="w-full h-fit"

                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i}>
                            <TestimonialCard name={t.name} testimonial={t.testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
            <div className='flex flex-col w-full gap-4 h-fit '>
                <p className='text-center text-whitegray font-montserrat text-base'>Se essas empresas confiaram, sua marca também pode evoluir com a Ativa.</p>
                <Link href="" className='text-white text-center shadow-[0_0_5px] shadow-green-500 bg-greenaccent p-4 border-l-2 w-full border-t-2 font-bold text-xs border-white rounded-full'>Começar meu projeto</Link>
            </div>
        </section>
    )
}
