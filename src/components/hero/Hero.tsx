import "./Hero.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Aos from 'aos'
import { useTranslation } from "react-i18next";


const Hero = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  const {t} = useTranslation()

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
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
              <SwiperSlide  className='banner-slide' >
                <img className='banner-image' src={'https://catherineasquithgallery.com/uploads/posts/2021-02/1612791020_160-p-goluboi-meditsinskii-fon-234.jpg'} />
                <div className="banner-overlay"></div>
                <div className="hero-content">
                  <h2 data-aos='fade-up' data-aos-delay="500" data-aos-duration='1000' className='content-title'>
                    {t('hero.hero_top_title')} <br /> <span className='second-line'>{t('hero.hero_bottom_title')}</span>
                    </h2>
                    <p data-aos='fade-up'  data-aos-delay="700" data-aos-duration='1000' className='content-text'> {t("hero.hero_text")}</p>
                  <div data-aos='fade-up' data-aos-delay="1000" data-aos-duration='1000' className="content-links">
                    <Link to={'contact-us'} className='content-link' >{t('hero.hero_contact')} &nbsp; + </Link>
                    <Link to={'about-us'} className='content-link' >{t('hero.hero_more')} &nbsp; +</Link>
                  </div>
                </div>
              </SwiperSlide>
        </Swiper>
      </div>
      {/* <HeroFeature/> */}
    </div>
  )
}

export default Hero

