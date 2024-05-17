import WhyChoose from '../../components/why-choose/WhyChoose'
import './AboutUs.scss'
import Statistics from '../../components/statistics/Statistics'
import { useEffect } from 'react'
import Aos from 'aos'
import { Link, useLocation } from 'react-router-dom'
import CustomersOpinion from '../../components/customers-opinion/CustomersOpinion'
import MeetTeam from '../../components/meet-team/MeetTeam'



const AboutUs = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    pathname.includes('about-us') && window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])
  return (
    <div>
      <div className="about__us-banner">
        <img className='banner-image' src="https://gorod-ust-labinsk.ru/upload/iblock/759/9kqzkwcf2fy2ilwdqlcblcnmrutf9xak.jpg" alt="About-Us Banner" />
        <div className="banner-content">
          <h3>ABOUT US</h3>
        </div>
      </div>
      <Statistics />
      <WhyChoose />
      <div className="hospital__banner-wrapper">
        <img className='hospital-image' src="http://konstruktive.pro/upload/iblock/3a9/3a921e48c1866a24e9ace33a3235cd2c.jpg" alt="" />
        <div className="banner-content">
          <h4 data-aos-delay="250" data-aos-duration='800' data-aos='fade-up'><span>AidUp</span> Is Leading & Modern Technologies Hospital</h4>
          <div className="content-action">
            <Link to={'/appointment'} data-aos-duration='800' data-aos-delay="350" data-aos='fade-up' className='appointment-btn'>MAKE AN APPOINTMENT</Link>
            <Link to={'/contact-us'} data-aos-duration='800' data-aos-delay="350" data-aos='fade-up' className='contact-btn'>CONTACT US NOW</Link>
          </div>
        </div>
      </div>
      <MeetTeam />
      <CustomersOpinion />
    </div>
  )
}

export default AboutUs
