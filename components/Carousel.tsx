import { Swiper, SwiperSlide } from 'swiper/react'

function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      loop
    >
      <SwiperSlide>
        A
      </SwiperSlide>
      <SwiperSlide>
        B
      </SwiperSlide>
      <SwiperSlide>
        C
      </SwiperSlide>
      <SwiperSlide>
        D
      </SwiperSlide>
    </Swiper>
  )
}

export default Carousel
