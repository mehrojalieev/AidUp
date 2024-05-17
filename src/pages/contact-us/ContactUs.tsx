import React, { useEffect } from 'react'
import './ContactUs.scss'
import Container from '../../utils/Utils'
import { BiLocationPlus } from 'react-icons/bi'

import Iframe from 'react-iframe'
import { useLocation } from 'react-router-dom'


const ContactUs = () => {

    const {pathname} = useLocation()


    useEffect(() => {
        if(pathname.includes('contact-us')){
            window.scrollTo(0,0)
        }
    }, [pathname])

    return (
        <div className='contact-us'>
            <div className="contact-banner">
                <img src="https://emiratesexhibits.com/wp-content/uploads/2020/04/contact-us-banner.png" alt="" />
                <div className="contact__banner-content">
                    <h3>
                        CONTACT
                        <br />
                        AZHAR COMPANY
                    </h3>
                </div>
                <div className="contact__banner-overlay"></div>
            </div>
            <Container>


                <div className="contact__card-wrapper">
                    <a href='#location' className="contact-card">
                        <span className='material-symbols-outlined'>location_on </span>
                        <h4>Our Location</h4>
                        <p>
                            Uzbekistan, Tashkent, Chilonzor 1-mavze
                        </p>
                    </a>
                    <a href='tel:+998-78-777-77-77' className="contact-card">
                        <span className='material-symbols-outlined'>call </span>
                        <h4>Our Contact</h4>
                        <p>+998-78-777-77-77</p>
                    </a>
                    <a href='mailto:medicine@gmail.com' className="contact-card">
                        <span className='material-symbols-outlined'>mark_email_unread </span>
                        <h4>Mail Us</h4>
                        <p> medicine@gmail.com</p>
                    </a>
                </div>


                <div className="getintouch-wrapper">
                    <p className='contact-subtitle'>CONTACT US</p>
                    <h3 className='contact-title'>Get In Touch With Us</h3>
                    <form className='contact-form'>
                        <div className="input-item">
                            <input type="text" placeholder='Enter Your Name' />
                            <input type="email" placeholder='Enter Your Email' />
                        </div>
                        <div className="input-item">
                            <input type="text" placeholder='Enter Your Phone Number' />
                            <input type="text" placeholder='Subject' />
                        </div>
                        <textarea placeholder='Write Your Message' className='form-description'></textarea>
                        <button className='send__message-btn'>SEND MESSAGE</button>
                    </form>
                </div>

            </Container>
            <Iframe
                url="https://maps.google.com/maps?q=Tashkent%20Dates%10Products&amp;t=&amp;z=12&amp;output=embed"
                allowFullScreen
                frameBorder="0"
                id='location'
                className='iframe-map'
            />
        </div>
    )
}

export default ContactUs
