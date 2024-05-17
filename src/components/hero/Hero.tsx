import React, { useEffect, useState } from 'react'
import "./Hero.scss"
import BannerVideo from "../../assets/videos/BannerVideo2.mp4"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import HeroFeature from '../hero-feature/HeroFeature';


const Hero = () => {


  const [BannerImages, setBannerImages] = useState([
    {
      banner_img: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612791020_160-p-goluboi-meditsinskii-fon-234.jpg',
      main_title: 'Get a Special Consultation Today',
      subtitle: 'WELCOME TO THE AZHAR INC HOSPITAL',
      aos_style: 'fade-up'
    }
  ])

  const InitAos = () => {
    Aos.init()
    Aos.refresh()
  }

  return (
    <div className="hero">

      <div className="banner-video">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 3800,
          //   disableOnInteraction: false,
          // }}
          speed={1700}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          onAfterInit={InitAos}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {
            BannerImages.map((image, index) =>
              <SwiperSlide key={index} className='banner-slide' >
                <img className='banner-image' key={index} src={image.banner_img} />
                <div className="banner-overlay"></div>
                <div className="hero-content">
                  <h2 data-aos={image.aos_style} data-aos-delay="500" data-aos-duration='1000' className='content-title'>
                    Get a Special <span className='second-line'>Consultation Today</span>
                    </h2>
                    <p data-aos={image.aos_style}  data-aos-delay="700" data-aos-duration='1000' className='content-text'> Whether you're seeking expert medical advice, looking for the latest advancements in treatments, you've come to the right place. Our team of experienced professionals is committed to guiding you on your journey to optimal health and well-being.</p>
                  <div data-aos={image.aos_style} data-aos-delay="1000" data-aos-duration='1000' className="content-links">
                    <Link to={'contact-us'} className='content-link' >CONTACT US &nbsp; + </Link>
                    <Link className='content-link' >READ MORE &nbsp; +</Link>
                  </div>
                </div>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      {/* <HeroFeature/> */}
    </div>
  )
}

export default Hero

