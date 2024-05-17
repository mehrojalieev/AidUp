import React, { useEffect, useState } from 'react'
import './Appointment.scss'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaPlus, FaQuoteRight } from "react-icons/fa";
import { Carousel } from 'antd';


const Appointment = () => {
  const [numOfShots, setNumOfShots] = useState(2);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 800) {
        setNumOfShots(1);
      } else {
        setNumOfShots(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [1, 2, 3, 4]

  return (
    <div className='appointment-wrapper'>
      <div className='appointent-hero'>
        <div className='container'>
          <h2>Make Appointments</h2>
          <div className='appointment-page'>
            <Link to={'/'} className='page-link'>
              <AiFillHome className='home-icon' />
              HOME
            </Link>
            <IoIosArrowForward />
            <Link to={'/appointment'} className='page-link this-page-link'>MAKE APPOINTMENTS</Link>
          </div>
        </div>
      </div>
      <div className='appoint-form-wrapper container'>
        <div className='app-form-wrap'>
          <form className='appoint-form'>
            <p>Select Department</p>
            <select>
              <option value="cardiolog">cardiolog</option>
              <option value="cardiolog">cardiolog</option>
              <option value="cardiolog">cardiolog</option>
              <option value="cardiolog">cardiolog</option>
            </select>
            <p>Choose Doctor by Name</p>
            <select>
              <option value="cardiolog">John doe</option>
              <option value="cardiolog">John doe</option>
              <option value="cardiolog">John doe</option>
              <option value="cardiolog">John doe</option>
            </select>
            <input type="text" placeholder='Patient Name' />
            <div className='input-wrapper'>
              <input type="text" placeholder='Phone' />
              <input type="text" placeholder='Your email' />
            </div>
            <div className='input-wrapper'>
              <input type="date" />
              <input type="text" placeholder='Time' />
            </div>
            <textarea cols="10" rows="4" placeholder='Type Appoint Note'></textarea>
            <button className='form-btn'>SUBMIT</button>
          </form>
        </div>
        <div className='doctor-imgg'>
        <img src="https://medicate.peacefulqode.co.in/wp-content/uploads/2022/04/doctor-.png" alt="" />
        </div>
      </div>
      <div className='cotact-us-wrapper'>
        <div className='cotact-us container'>
          <h2>A Great Place Of Medical Hospital Center & Health Care</h2>
          <button>CONTACT US <span className='plus-icon'><FaPlus /></span></button>
        </div>
      </div>
      <div className="appoint-caruosel-wrapper">
        <strong>OUR CLIENTS</strong>
        <h3 className='container'>Our Client Happy Say About Us</h3>
        <p className='appoint-desc container'>It is a long established fact that a reader will be distracted by at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='appoint-carousel container' >
          <Carousel className='carousel-wrapperr' dots={true} slidesToShow={numOfShots} afterChange={onChange}>
            {data.map(item => (
              <div className='carusosel-itemm'>
                <p className='caruosel-text'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even believable.There are many variations of passages of Lorem Ipsum available</p>
                <div className='appoint-user-wrapper'>
                  <img src='https://medicate.peacefulqode.com/wp-content/uploads/2022/02/3-3.png' alt="" />
                  <div>
                    <h3>Dr. john Martin</h3>
                    <p>Cancer Research </p>
                  </div>
                  <div className='quotee'>
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Appointment
