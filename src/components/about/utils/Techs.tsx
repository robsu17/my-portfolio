import { techsItems } from '../data/techs'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'

export function Techs() {
  return (
    <div>
      <h1 className="font-kalam text-secondary-color text-center mb-2 text-2xl">
        Tecnologias que já trabalhei
      </h1>
      <div className="mt-8">
        <Swiper
          className="pb-12"
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {techsItems.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col justify-center items-center">
                  {item.icon}
                  <h1 className="mt-3 text-xl text-slate-300">{item.tech}</h1>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
