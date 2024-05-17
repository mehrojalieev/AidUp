import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import Patient from '../../components/patient/Patient'
import Statistics from '../../components/statistics/Statistics'
import MeetTeam from '../../components/meet-team/MeetTeam'
import HomeAppointment from '../../components/home-appointment/HomeAppointment'

const Home = () => {

  const [backTopScroll, setBackTopScroll] = useState(0)

  const handleScrollUpdate = () => {
    setBackTopScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollUpdate)
    return () => {
      window.removeEventListener('scroll', handleScrollUpdate)
    }
  }, [])

  const handeScrollTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div>
      <Hero/>
      <Statistics/>
      <MeetTeam/>
      <HomeAppointment/>
      <Patient/>
      <span onClick={handeScrollTop} style={backTopScroll > 470 ? {transform: 'translateY(0)'} : {}}  className="material-symbols-outlined back__top">arrow_upward</span>
    </div>
  )
}

export default Home