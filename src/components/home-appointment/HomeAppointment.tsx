import React, { useState } from 'react'
import Container from '../../utils/Utils'
import './HomeAppointment.scss'
import { useGetDoctors } from '../../service/query/useGetDoctors'
import { useBookAppointment } from '../../service/mutation/useBookApppointment'
import { Button } from 'antd'
import { toast } from 'react-toastify'


const HomeAppointment = () => {
  const userData = JSON.parse(localStorage.getItem('user'))

  const { data } = useGetDoctors()
  const { mutate: BookApi } = useBookAppointment()

  // HOOKS
  const [patientName, setPatientName] = useState('')
  const [patientEmail, setPatientEmail] = useState('')
  const [patientNumber, setPatientNumber] = useState()
  const [doctorId, setDoctorId] = useState()
  const [FromDate, setFromDate] = useState('')
  const [ToDate, setToDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleBooking = (e) => {
    setIsLoading(true)
    e.preventDefault()
    const BookingData = {
      userId: userData && Number(userData.Id),
      doctorId: Number(doctorId),
      from: new Date(FromDate).toISOString(),
      to: new Date(ToDate).toISOString()
    }
    BookApi(BookingData, {
      onSuccess: (res) => {
        if (res.status === 200) {
          setTimeout(() => {
            toast.success('Your message sent successfully', {
              autoClose: 2000
            })
            setIsLoading(false)
            setPatientName('')
            setDoctorId('')
            setPatientNumber('')
            setPatientEmail('')
            setFromDate('')
            setToDate('')

          }, 2000)

        }
      },

      onError: (error) => {
        console.log(error);
      }
    })
  }



  return (
    <div className='home-appointment'>
      <Container>
        <div className="home__appointment-wrapper">
          <div className="working__time-card">
            <h4 className="card-title">Working Hours</h4>
            <p className='card-text'>Variations of passages amt available are anything embarrassing.</p>
            <div className="time-item">
              <p>Monday - Tuesday:</p>
              <p>9am - 6pm</p>
            </div>
            <div className="time-item">
              <p>Wednesday - Thursday:</p>
              <p>8am - 5pm</p>
            </div>
            <div className="time-item">
              <p>Friday:</p>
              <p>7am - 10pm</p>
            </div>
            <div className="time-item">
              <p>Saturday:</p>
              <p>10am - 7pm</p>
            </div>
            <div className="time-item">
              <p>Sunday</p>
              <p>Closed:</p>
            </div>
          </div>
          <div className="appointment__form-wrapper">
            <div className="appointment__form-image">
              <img src="https://avatars.dzeninfra.ru/get-zen_doc/9828307/pub_64deb5b0aa5bde3ae56a6712_64deb5baaa5bde3ae56a72f6/scale_1200" />
              <img src="https://sun9-55.userapi.com/impg/KWHTIsJgBxfM8kwNlFsSOBleEcCZ6zt6m1zGCg/oSxWAZToTwc.jpg?size=1000x675&quality=96&sign=a3b0e2a73d3cf52bdadb777e3442ff53&c_uniq_tag=WcVdgf-fBxO0MgEKqh6eChJ2xtfI-fIgRQC3EJ3gRK8&type=album" />
            </div>
            <form onSubmit={handleBooking} className="appointment-form">
              <h3 className='appointment__form-title'>Make An Appointment</h3>
              <input value={patientName} onChange={(e) => setPatientName(e.target.value)} type="text" placeholder='Your Name' />
              <input value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} type="text" placeholder='Email Address' />
              <input value={patientNumber} onChange={(e) => setPatientNumber(e.target.value)} type="number" placeholder='Phone Number' />
              <select value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
                <option value="">Choose Doctor</option>
                {
                  data?.data.map(doctor =>
                    <option key={doctor?.id} value={doctor.id}>{doctor?.firstName}</option>

                  )
                }
              </select>
              <div className="form-date">

                <label className='form__date-label' htmlFor="from">From
                  <input value={FromDate} type="date" onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label className='form__date-label' htmlFor="to">To
                  <input value={ToDate} type="date" onChange={(e) => setToDate(e.target.value)} />
                </label>
              </div>
              <Button onClick={handleBooking} type='submit' className='form__book-btn' loading={isLoading}>BOOK AN APPOINTMENT</Button>
              {/* <button type='submit' className='form__book-btn'>BOOK AN APPOINTMENT</button> */}
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeAppointment