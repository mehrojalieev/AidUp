import Container from '../../utils/Utils'
import './CustomersOpinion.scss'
import { Carousel } from 'antd';
import { FaStar } from "react-icons/fa";



const CommentsAll = []

for (let index = 1; index < 4; index++) {
  CommentsAll.push({
    id: index,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eos officiis aliquid assumenda a sapiente Lorem ipsum dolor sit amet consectetur, adipisicing elit. ',
    doctor_name: `John Doe ${index}`,
    specialization: 'Dentist',
    commas_icon: 'https://static.vecteezy.com/system/resources/previews/009/970/455/original/eps10-green-quotation-mark-icon-isolated-on-white-background-double-quotes-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-ui-pictogram-and-mobile-application-vector.jpg'

  })

}
const CustomersOpinion = () => {

  return (
    <div className='customers-opinion'>
      <Container>
        <div className="customers__opinion-wrapper">
          <h2 className="opinion-subtitle">What Our Customers Says?</h2>
          <Carousel speed={1300} className='opinion__card-carousel' autoplay>
            {
              CommentsAll.map(comment =>
                <div key={comment.id} className="card-wrapper">
                  <div className="card">
                    <div className="card-icons">
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                    </div>
                    <p>{comment.description}</p>
                    <div className="card__author-content">
                      <div className="doctor-info">
                        <img src="https://licsp.ru/wp-content/uploads/2020/12/konsultaciya-androloga.jpg" />
                        <div className="info-name">
                          <p>{comment.doctor_name}</p>
                          <strong>{comment.specialization}</strong>
                        </div>
                      </div>
                      <img src={comment.commas_icon} className='commas-icon' />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-icons">
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                      <i><FaStar /></i>
                    </div>
                    <p>{comment.description}</p>
                    <div className="card__author-content">
                      <div className="doctor-info">
                        <img src="https://licsp.ru/wp-content/uploads/2020/12/konsultaciya-androloga.jpg" />
                        <div className="info-name">
                          <p>John Doe</p>
                          <strong>Neurologist</strong>
                        </div>
                      </div>
                      <img src={comment.commas_icon} className='commas-icon' />
                    </div>
                  </div>
                </div>
              )
            }

          </Carousel>
        </div>
      </Container>
    </div>
  )
}

export default CustomersOpinion
