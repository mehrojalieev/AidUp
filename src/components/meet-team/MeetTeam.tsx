import './MeetTeam.scss'
import Container from '../../utils/Utils'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


const doctorsList =[]

for (let index = 1; index < 20; index++) {
    doctorsList.push({
        name: `Dr. Esbel Macran ${index}`,
        specialization: 'Dentist',
        image: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695968145_gas-kvas-com-p-kartinki-vracha-16.png'
    })
    
}

// import required modules
const MeetTeam = () => {
    return (
        <div className='meet-team'>
            <Container>
                <div className="meet__team-header">
                    <h5 className='header-subtitle'>EXPERT DOCTORS</h5>
                    <h2 className='header-title'>Meet Our Professional Doctors</h2>
                </div>

                <div className="team__carousel-wrapper">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        
                        // navigation={true}
                        loop={true}
                        modules={[Autoplay,  Navigation]}
                        className="mySwiper team-swiper"
                    >
                        {
                            doctorsList.map((doctor, index) =>
                            <SwiperSlide className='team__swiper-slide' key={index}>
                                <div className="slide-image">
                                <img src={doctor.image} alt={doctor.name} />
                                <div className="doctor__contact-action">
                                    <i className='social-icon'><FaFacebook/></i>
                                    <i className='social-icon'><FaLinkedin/></i>
                                    <i className='social-icon'><FaTwitter/></i>
                                </div>
                                </div>
                                <div className="doctor-info">
                                    <h3>{doctor.name}</h3>
                                    <p>{doctor.specialization}</p>
                                </div>
                            </SwiperSlide>
                            )
                        }
                      
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default MeetTeam
