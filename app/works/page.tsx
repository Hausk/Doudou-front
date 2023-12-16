'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";
import { motion } from 'framer-motion'

const elements = Array.from({length: 10}, (_, index) => {
    <Image key={index} src={'https://picsum.photos/200/300?random=' + index} width={100} height={100} alt='random'/>
})
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

import 'swiper/css';
import { useState } from "react"
export default function Page() {
    const imgUrls = numbers.map((_, index) => `https://picsum.photos/200/300?random=${index}`);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideVariants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
    };
    const img1 = 'https://picsum.photos/200/300?random=1'
    const img2 = 'https://picsum.photos/200/300?random=2'
    const img3 = 'https://picsum.photos/200/300?random=3'
    const img4 = 'https://picsum.photos/200/300?random=4'
    const img5 = 'https://picsum.photos/200/300?random=5'

    const [lists, setLists] = useState([
        { title: "Flex", name: "Ama Jackson", img: img1 },
        { title: "Gas", name: "Mister V", img: img2 },
        { title: "Feel Good", name: "Julien Granel", img: img3 },
        { title: "All allong", name: "KO KO MO", img: img4 },
        { title: "Jessica", name: "Jhonson", img: img5 },
    ]);

    const handleSlideChange = (swiper: any) => {
        setCurrentSlide(swiper.activeIndex);
    };
    return (
        <>
            <div className="h-screen overflow-hidden">
            <h1>Page Works</h1>
            <Swiper
            onSlideChange={handleSlideChange}
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            centeredSlides={false}
            slidesPerView={1}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 25
                }
            }}
            loop={true}
            className="h-screen"
          >
            {lists.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="w-screen h-screen" style={{background: "url('" + item.img + "') no-repeat", backgroundSize: 'cover'}}></div>
                <div className="w-full h-full backdrop-blur absolute top-0">
                        <Image
                        className="w-[80%] md:w-[40%] m-auto pt-5 rounded-[10px]"
                        src={item.img}
                        alt="slide"
                        width={200}
                        height={300}
                        />
                        <p className="text-sm text-center font-medium text-black">
                            {item.title}
                        </p>
                        <p className="text-xs text-center font-medium text-[#7E7E7E] mb-8">
                            {item.name}
                        </p>
                    </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </>
    )
}