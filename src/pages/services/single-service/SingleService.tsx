import Container from "../../../utils/Utils";
import "./SingleService.scss"
import { NavLink, useParams } from 'react-router-dom'
import { CollapseProps, Collapse } from 'antd';


const AllServices = [

  {
    title: 'Dental Care',
    doctors: 20,
    img: 'https://cdn0.iconfinder.com/data/icons/dentist-element-1/64/Clear-tooth-teeth-dentist-dental-tool-1024.png',
    link: 'dental'
  },

  {
    title: 'Neurology Care',
    doctors: 10,
    img: 'https://magentajaya.com/wp-content/uploads/2023/02/MGT-04.png',
    link: 'neurology'

  },
  {
    title: 'Gynecologists',
    doctors: 30,
    img: 'https://www.clipartmax.com/png/full/298-2989665_pregnancy-breastfeeding-infant-alcohol-pregnancy.png',
    link: 'gynecologist'
  },
  {
    title: 'Ophthalmology',
    doctors: 24,
    img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BE%D1%84%D1%82%D0%B0%D0%BB%D1%8C%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%83%D1%80-238706025.jpg',
    link: 'ophthalmology'

  },
  {
    title: 'Orthopedics',
    doctors: 26,
    img: 'https://hospitalcmml.com/assets/uploads/especialidades/Ortopedia.png',
    link: 'orthopedics'

  },
  {
    title: 'Cardiology',
    doctors: 20,
    img: 'https://static.vecteezy.com/system/resources/previews/010/310/449/original/heart-human-organ-color-icon-illustration-vector.jpg',
    link: 'cardiology',

  },
  // ----------------------------------

  {
    title: 'Pulmonology',
    doctors: 26,
    img: 'https://eifa.ru/upload/iblock/37d/slide_1.png',
    link: 'pulmonology',
  }, {
    title: 'Audiology Care',
    doctors: 20,
    img: 'https://static-00.iconduck.com/assets.00/ear-icon-1945x2048-w8nphm9t.png',
    link: 'audiology',
  },
]

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'What  is nobel coronavirus ?',
    children: <p>Either waxed or unwaxed floss will do the job. Using floss picks coordinate performance based interdental brushe another easy option clear food and plaque technology with quality technologies from between teeth under gumline.</p>,
  },
  {
    key: '2',
    label: 'Why should I  go to the dentist regularly ?',
    children: <p>Either waxed or unwaxed floss will do the job. Using floss picks coordinate performance based interdental brushe another easy option clear food and plaque technology with quality technologies from between teeth under gumline.</p>,
  },
  {
    key: '3',
    label: 'How can I prevent cavities ?',
    children: <p>Either waxed or unwaxed floss will do the job. Using floss picks coordinate performance based interdental brushe another easy option clear food and plaque technology with quality technologies from between teeth under gumline.</p>,
  },
];

const SingleService = () => {
  const { service_name } = useParams()
  console.log(service_name);

  return (
    <div className="single-service">
      <Container>
        <div className="service__content-main__wrapper">
          <div className="categories__content-wrapper">
            <div className="service-items">
              {
                AllServices.map(service =>
                  <NavLink className={({ isActive }) => isActive ? "service-item service-item--active" : "service-item"} to={`/service/${service.link}`}>
                    <p>{service.title}</p>
                    <span className="material-symbols-outlined arrow-icon">arrow_right_alt</span>
                  </NavLink>
                )
              }
            </div>


            <div className="work__time-card">
              <h3 className="time__card-title">Opening Hours</h3>
              <div className="time-item">
                <p>Monday - Tuesday:</p>
                <p>9am - 6pm</p>
              </div>
              <div className="time-item">
                <p>Friday - Sutarday:</p>
                <p>8am - 5pm</p>
              </div>
              <div className="time-item">
                <p>Sunday:</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
          <div className="information__content-wrapper">
            <img src="https://aisdent.com/wp-content/uploads/2023/08/young-patient-black-goggles-getting-her-teeth-treated-by-female-hygienist-using-dental-curing-light-2048x1365.jpg" className="content-banner" />
            <div className="content-info">
              <h2 className="info-title">What is Dental Care ?</h2>
              <p className="info-description">From primary care and pediatrics to specialized services like dermatology, orthopedics, and women's health, we offer a wide spectrum of medical services under one roof. This means you can receive all the care you need conveniently in one location.</p>
              <p className="info-description">Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions, and involve you in the decision-making process for your healthcare. We believe in empowering our patients to make informed choices about their health.</p>
            </div>
            <div className="treatment__content-wrapper">
              <h2 className="content-title">Treatments</h2>
              <p className="content-description">
                Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive the highest quality of care. We are dedicated to treating each patient with compassion.
                Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive the highest quality of care. We are dedicated to treating each patient.
              </p>
            </div>
            <div className="information__service-wrapper">
              <div className="service-content">
                <h3 className="content-subtitle">Why Choose Us?</h3>
                <p className="content-description">Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive the highest quality of care.</p>
                <div className="service__item-content">
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>General Consulting</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Construction Management</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Modeling & Algorithm</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Better Decision Making</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Professional Consulting Services</p>
                  </div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="content-subtitle">Dental Family Plan</h3>
                <p className="content-description">Our team of skilled doctors, nurses, and specialists bring years of experience and expertise to ensure you receive the highest quality of care.</p>
                <div className="service__item-content">
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>General Consulting</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Construction Management</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Modeling & Algorithm</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Better Decision Making</p>
                  </div>
                  <div className="service-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <p>Professional Consulting Services</p>
                  </div>
                </div>
              </div>
            
            </div>

            <div className="offers__content-wrapper">
              <h3 className="content-subtitle">We are pleased to offer you the healthy.</h3>
              <p className="content-description">There are many variations of passages of lorem Pilum but the majority. Monotonically seize vertical niche markets with global schemas. Completely streamline premier information through best-of-breed potentialities. Synergistically incubate team building synergy with B2C methods of empowerment. Uniquely matrix an proactively through web-enabled outsourcing.</p>
              <Collapse className="offer-collapse" defaultActiveKey={['1']} ghost  items={items} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingleService
