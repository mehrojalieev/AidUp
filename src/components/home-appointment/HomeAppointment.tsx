import  {  useState } from 'react'
import Container from '../../utils/Utils'
import './HomeAppointment.scss'
import { useGetDoctors } from '../../service/query/useGetDoctors'
import { useBookAppointment } from '../../service/mutation/useBookApppointment'
import { Button } from 'antd'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'


const HomeAppointment = () => {

  const {t} = useTranslation()

  const storeUser = localStorage.getItem('user')
  const userData = storeUser ? JSON.parse(storeUser) : undefined

  const { data } = useGetDoctors()
  const { mutate: BookApi } = useBookAppointment()

  // HOOKS
  const [patientName, setPatientName] = useState<any>('')
  const [patientEmail, setPatientEmail] = useState<any>('')
  const [patientNumber, setPatientNumber] = useState<string>()
  const [doctorId, setDoctorId] = useState()
  const [FromDate, setFromDate] = useState('')
  const [ToDate, setToDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  const handleBooking = (e: Event) => {
    e.preventDefault()
    setIsLoading(true)
    const BookingData: any = {
      userId: userData ? Number(userData.Id) : undefined,
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
            <h4 className="card-title">{t("appointment.work-card.title")}</h4>
            <p className='card-text'>{t("appointment.work-card.info")}</p>
            <div className="time-item">
              <p>{t("appointment.work-card.monday")} - {t("appointment.work-card.tuesday")}:</p>
              <p>9{t("appointment.work-card.am")} - 6{t("appointment.work-card.pm")}</p>
            </div>
            <div className="time-item">
              <p>{t("appointment.work-card.wednesday")} - {t("appointment.work-card.thursday")}:</p>
              <p>8{t("appointment.work-card.am")} - 5{t("appointment.work-card.pm")}</p>
            </div>
            <div className="time-item">
              <p>{t("appointment.work-card.friday")}:</p>
              <p>7{t("appointment.work-card.am")} - 10{t("appointment.work-card.pm")}</p>
            </div>
            <div className="time-item">
              <p>{t("appointment.work-card.saturday")}:</p>
              <p>10{t("appointment.work-card.am")} - 7{t("appointment.work-card.pm")}</p>
            </div>
            <div className="time-item">
              <p>{t("appointment.work-card.sunday")}</p>
              <p>{t("appointment.work-card.close")}:</p>
            </div>
          </div>
          <div className="appointment__form-wrapper">
            <div className="appointment__form-image">
              <img src="https://avatars.dzeninfra.ru/get-zen_doc/9828307/pub_64deb5b0aa5bde3ae56a6712_64deb5baaa5bde3ae56a72f6/scale_1200" />
              <img src="https://sun9-55.userapi.com/impg/KWHTIsJgBxfM8kwNlFsSOBleEcCZ6zt6m1zGCg/oSxWAZToTwc.jpg?size=1000x675&quality=96&sign=a3b0e2a73d3cf52bdadb777e3442ff53&c_uniq_tag=WcVdgf-fBxO0MgEKqh6eChJ2xtfI-fIgRQC3EJ3gRK8&type=album" />
            </div>
            <form onSubmit={handleBooking as any} className="appointment-form">
              <h3 className='appointment__form-title'>Make An Appointment</h3>
              <input value={patientName} onChange={(e) => setPatientName(e.target.value)} type="text" placeholder={t("appointment.form.title")} />
              <input value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} type="text" placeholder={t("appointment.form.address")} />
              <input value={patientNumber} onChange={(e: any) => setPatientNumber(e.target.value)} type="number" placeholder={t("appointment.form.number")} />
              <select value={doctorId} onChange={(e: any) => setDoctorId(e.target.value)}>
                <option value="">{t("appointment.form.select")}</option>
                {
                  data?.data.map((doctor: any) =>
                    <option key={doctor?.id} value={doctor.id}>{doctor?.firstName}</option>

                  )
                }
              </select>
              <div className="form-date">

                <label className='form__date-label' htmlFor="from">{t("appointment.form.from")}
                  <input value={FromDate} type="date" onChange={(e) => setFromDate(e.target.value)} />
                </label>
                <label className='form__date-label' htmlFor="to">{t("appointment.form.to")}
                  <input value={ToDate} type="date" onChange={(e) => setToDate(e.target.value)} />
                </label>
              </div>
              <Button onClick={handleBooking as any} type={'submit' as any} className='form__book-btn' loading={isLoading}>{t("appointment.form.button")}</Button>
              {/* <button type='submit' className='form__book-btn'>BOOK AN APPOINTMENT</button> */}
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeAppointment