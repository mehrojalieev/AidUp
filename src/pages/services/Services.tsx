import { Link } from 'react-router-dom'
import ServiceCards from '../../components/service-cards/ServiceCards'
import './Services.scss'

const Services = () => {
  return (
    <div className='services-page'>
      <div className="services-banner">
        <img src="https://i.pinimg.com/originals/d0/83/10/d083104dd0c567eb047ed93e92fa88bd.jpg" />
        <div className="service__banner-content">
          <h3 className='content-subtitle'>Services</h3>
          <div className="banner__link-content">
            <Link className='home-link' to='/'>Home </Link>
            <span>{'>'}</span>
            <p>Services</p>
          </div>
        </div>
      </div>
      <ServiceCards />
    </div>
  )
}

export default Services
