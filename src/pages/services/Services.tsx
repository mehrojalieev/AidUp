import ServiceCards from '../../components/service-cards/ServiceCards'
import './Services.scss'

const Services = () => {
  return (
    <div className='services-page'>
        <div className="services-banner">
            <img  src="https://www.aksontechnologies.com/wp-content/uploads/2017/10/slide1.jpg" />
        </div>
        <ServiceCards/>
    </div>
  )
}

export default Services
