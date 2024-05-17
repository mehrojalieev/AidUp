import './WhyChoose.scss'
import Container from '../../utils/Utils'
import { useEffect } from 'react'
import Aos from 'aos'


const WhyChoose = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='why-choose'>
      <Container>
        <div className="why__choose-header">

        <h5 className="why__choose-subtitle">WHY CHOOSE US</h5>
        <h2 className='why__choose-title'>We Have 25 Years Experience In Medical Health Services</h2>
        </div>
        <div data-aos='fade-up' data-aos-duration='700' data-delay='100'  className="choose__card-wrapper">
            <div className="choose-card">
              <div className="card-image">
                <img src="https://yt3.ggpht.com/ytc/AKedOLSTWPbtfH0A4givzpOOth6QV53fmYxu5xamRBgh=s900-c-k-c0x00ffffff-no-rj" alt="" />
              </div>
                <h3>Experience Doctor</h3>
                <p>Our products are certified by reputable organic</p>
            </div>
            <div className="choose-card">
              <div className="card-image">
                <img src="https://cdn3.iconfinder.com/data/icons/pharmacy-elements/64/Vaccine-syringe-health-care-medicine-pharmacy-hospital-512.png" alt="" />
              </div>
                <h3>Painless Treatment</h3>
                <p>Our products are certified by reputable organic</p>
            </div>
            <div className="choose-card">
              <div className="card-image">
                <img src="https://img2.freepng.ru/20180626/spx/kisspng-spoon-computer-icons-fork-clip-art-cutleries-5b326f633128c3.0700903315300319712014.jpg" alt="" />
              </div>
                <h3>Top equipment</h3>
                <p>Our products are certified by reputable organic</p>
            </div>
            <div className="choose-card">
              <div className="card-image">
                <img src="https://static.tildacdn.com/tild6462-6137-4632-b935-623230323130/247.svg" alt="" />
              </div>
                <h3>24/7 Advanced Care</h3>
                <p>Our products are certified by reputable organic</p>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default WhyChoose
