import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Destiny Nsitem',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero dicta consequatur, autem ex eaque. Voluptate doloremque sunt nulla at voluptatibus perspiciatis fugit voluptates debitis. Earum, libero ducimus. Ad, temporibus."


  },

  {
    avatar: AVTR2,
    name: 'Miracle Joshua',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero dicta consequatur, autem ex eaque. Voluptate doloremque sunt nulla at voluptatibus perspiciatis fugit voluptates debitis. Earum, libero ducimus. Ad, temporibus."


  },

  {
    avatar: AVTR3,
    name: 'Datiem Lawson',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero dicta consequatur, autem ex eaque. Voluptate doloremque sunt nulla at voluptatibus perspiciatis fugit voluptates debitis. Earum, libero ducimus. Ad, temporibus."


  },

  {
    avatar: AVTR4,
    name: 'Blessing Stanley',
    Review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero dicta consequatur, autem ex eaque. Voluptate doloremque sunt nulla at voluptatibus perspiciatis fugit voluptates debitis. Earum, libero ducimus. Ad, temporibus."


  }
]

const testimonials = () => {
  return (
    <section className='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='favour' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default testimonials