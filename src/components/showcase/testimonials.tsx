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
        <section className='relative w-full flex flex-col py-16 md:py-20 px-7 gap-8 items-center justify-center min-h-fit overflow-hidden bg-black/85'>
            <Image
                src={'/Bannerdepoiments.jpg'}
                alt='Banner Depoimentos'
                fill
                className='object-cover absolute -z-2 inset-0 opacity-30'
            />

            <header className='w-full max-w-4xl flex flex-col gap-3 relative z-10'>
                <h1 className='font-bold text-white font-montserrat text-lg md:text-3xl text-center uppercase tracking-tighter'>
                    Empresas que confiaram. <br className='md:hidden' /> Resultados que confirmam.
                </h1>
                <h2 className='font-medium text-whitegray font-montserrat text-[10px] md:text-sm text-center max-w-xl mx-auto'>
                    A confiança não se constrói com promessas. Se constrói com entrega consistente e qualidade comprovada.
                </h2>
            </header>

            <article className='w-full max-w-6xl relative z-10'>
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    touchRatio={1.5}
                    navigation={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: 2.2,
                            spaceBetween: 40,
                            coverflowEffect: {
                                depth: 100,
                                modifier: 1,
                            }
                        }
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    className="w-full pb-14! pt-5! testimonial-swiper"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i} className='flex justify-center items-center h-auto! max-w-[320px] md:max-w-125'>
                            <div className='w-full h-full pointer-events-auto'>
                                <TestimonialCard name={t.name} testimonial={t.testimonial} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
            <div className='flex flex-col w-full gap-4 h-fit items-center'>
                <p className='text-center text-whitegray font-montserrat text-base'>Se essas empresas confiaram, sua marca também pode evoluir com a Ativa.</p>
                <Link href="" className='text-white text-center shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-greenaccent p-4 border-l-2 w-full md:w-auto md:px-12 border-t-2 font-bold text-xs border-white rounded-full transition-transform hover:scale-105'>
                Começar meu projeto
                </Link>
            </div>

        </section>
    )
}