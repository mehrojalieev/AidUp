import { useState } from 'react'
import './AnnouncementBar.scss'
import Container from '../../utils/Utils'
import { FaPhone } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { Select } from 'antd';

const AnonouncementBar = () => {

  const storedUser = localStorage.getItem('user');
  const userAuth: any = storedUser ? JSON.parse(storedUser) : null;

  const [language, setLanguage] = useState('ENGLISH')

  console.log(language);

  const { pathname } = useLocation()
  if (pathname.includes("patient")) return null
  if (pathname.includes("doctor")) return null


  return pathname.includes('auth') ? null : (
    <div className='announcement'>
      <Container>
        <div className="announcement-wrapper">
          <div className="phone-item">
            <i><FaPhone /></i>
            <p>Phone:</p>
            <a className='number-text' href='tel:+998335003117'>+998975152424</a>
          </div>
          <div className="top-actions">
            <div className="work-time">
              <span className='material-symbols-outlined'>schedule</span>
              <p>Monday - Sunday 08:00 - 19:00</p>
            </div>
            <Select onChange={(value) => setLanguage(value)} className='select-language' defaultValue={language}
              options={[
                {
                  value: 'english',
                  label: 'ENGLISH',
                },
                {
                  value: 'ru',
                  label: 'РУССКИЙ',
                },
                {
                  value: 'uzbek',
                  label: "O'ZBEK",
                },
              ]}
            />
            {
              userAuth?.Role === 'User' ? <Link className='auth-link' to={'/patient'}> <span className='material-symbols-outlined'>account_circle</span> Account</Link>
                : userAuth?.Role === 'Admin' ? <Link className='auth-link' to={'/doctor'}> <span className='material-symbols-outlined'>account_circle</span> Account</Link>
                  : <Link className='auth-link' to={'/auth/register'}> <span className='material-symbols-outlined'>person</span> Register</Link>
            }
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AnonouncementBar
