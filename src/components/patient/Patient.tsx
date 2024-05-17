import React from 'react'
import './Patient.scss'
import Container from '../../utils/Utils'
import patient from '../../assets/photos/doctor-patient.jpg'
import user from '../../assets/photos/user.png'
import { FaStar, FaQuoteRight } from "react-icons/fa";


const Patient = () => {
    return (
        <div className='patinet'>
            <Container>
                <div className='patient-wrapper'>
                    <img className='patient-img' src={patient} alt="patient" />
                    <div className='patient-text_wrapper'>
                        <h3 className='our-testimonial'>OUR TESTIMONIALS</h3>
                        <h2 className='patient-title'>Our Patients Saying</h2>
                        <p className='patient-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ab necessitatibus itaque impedit assumenda, dolor in quo numquam optio ad blanditiis id nobis porro deleniti.</p>
                        <div className='patient-stars'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className='patient-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptas, omnis quos voluptatem aut excepturi beatae iusto itaque?</p>
                        <div className='patinet-profile-wrapper'>
                            <img src={user} alt="" />
                            <div>
                                <h3>Alexa Jhon</h3>
                                <p>patient</p>
                            </div>
                            <div className='quote'>
                                <FaQuoteRight />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Patient