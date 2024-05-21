import Container from '../../utils/Utils'
import './ServiceCards.scss'


const AllServices = [
  {
    title: 'Internal Medicine',
    doctors: 30,
    img: 'https://tarjomac.ir/blog/wp-content/uploads/2020/08/26-Drug-Advertisement-06-300x300.jpg'
  },
  {
    title: 'Dental Care',
    doctors: 20,
    img: 'https://cdn0.iconfinder.com/data/icons/dentist-element-1/64/Clear-tooth-teeth-dentist-dental-tool-1024.png'
  },
  {
    title: 'Urology Care',
    doctors: 20,
    img: 'https://demed-clinic.ru/wp-content/uploads/2021/01/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8-%D0%B4%D0%B5%D0%BC%D0%B5%D0%B41-01.png'
  },
  {
    title: 'Neurology Care',
    doctors: 10,
    img: 'https://magentajaya.com/wp-content/uploads/2023/02/MGT-04.png'
  },
  {
    title: 'Gynecologists',
    doctors: 30,
    img: 'https://www.clipartmax.com/png/full/298-2989665_pregnancy-breastfeeding-infant-alcohol-pregnancy.png'
  },
  {
    title: 'Ophthalmology',
    doctors: 24,
    img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BE%D1%84%D1%82%D0%B0%D0%BB%D1%8C%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%83%D1%80-238706025.jpg'
  },
  {
    title: 'Orthopedics',
    doctors: 26,
    img: 'https://hospitalcmml.com/assets/uploads/especialidades/Ortopedia.png'
  },
  {
    title: 'Cardiology',
    doctors: 20,
    img: 'https://static.vecteezy.com/system/resources/previews/010/310/449/original/heart-human-organ-color-icon-illustration-vector.jpg'
  },
  // ----------------------------------
  {
    title: 'Surgery Center',
    doctors: 20,
    img: 'https://static.vecteezy.com/system/resources/previews/010/310/449/original/heart-human-organ-color-icon-illustration-vector.jpg'
  }, {
    title: 'Hematology',
    doctors: 24,
    img: 'https://cdn-icons-png.flaticon.com/512/8000/8000655.png'
  }, {
    title: 'Pulmonology',
    doctors: 26,
    img: 'https://eifa.ru/upload/iblock/37d/slide_1.png'
  }, {
    title: 'Audiology Care',
    doctors: 20,
    img: 'https://static-00.iconduck.com/assets.00/ear-icon-1945x2048-w8nphm9t.png'
  },
]


const ServiceCards = () => {
  return (
    <div className='service-cards'>
      <Container>
        <div className="service__cards-header">
          <h5 className='card__header-subtitle'>OUR SERVICES</h5>
          <h3 className='card__header-title'>Our Mediax Specialties Technical Service</h3>
        </div>
        <div className="card__items-wrapper">
          {
            AllServices.map((service, index) =>
              <div className="card-item" key={index}>
                <img src={service.img} />
                <h4 className='item-title'>{service.title}</h4>
                <p className='item-doctor'>{service.doctors}+ Doctors</p>
                <button className='item-btn'>READ MORE</button>
              </div>
            )
          }
        </div>
      </Container>
    </div>
  )
}

export default ServiceCards
