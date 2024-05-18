import './AnnouncementBar.scss'
import Container from '../../utils/Utils'
import { FaPhone } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

const AnonouncementBar = () => {

  const {i18n, t} = useTranslation()


  const storedUser = localStorage.getItem('user');
  const userAuth: any = storedUser ? JSON.parse(storedUser) : null;



  const { pathname } = useLocation()
  if (pathname.includes("patient")) return null
  if (pathname.includes("doctor")) return null


  return pathname.includes('auth') ? null : (
    <div className='announcement'>
      <Container>
        <div className="announcement-wrapper">
          <div className="phone-item">
            <i><FaPhone /></i>
            <p>{t("announcement.phone")}:</p>
            <a className='number-text' href='tel:+998335003117'>+998975152424</a>
          </div>
          <div className="top-actions">
            <div className="work-time">
              <span className='material-symbols-outlined'>schedule</span>
              <p>{t("announcement.working_hour")}: 08:00 - 19:00</p>
            </div>
            <Select  onChange={(value) => i18n.changeLanguage(value)} className='select-language' defaultValue={localStorage.getItem('i18nextLng')}
              options={[
                {
                  value: 'en',
                  label: 'ENGLISH',
                },
                {
                  value: 'ru',
                  label: 'РУССКИЙ',
                },
                {
                  value: 'uz',
                  label: "O'ZBEK",
                },
              ]}
            />
            {
              userAuth?.Role === 'User' ? <Link className='auth-link' to={'/patient'}> <span className='material-symbols-outlined'>account_circle</span> {t("announcement.account")}</Link>
                : userAuth?.Role === 'Admin' ? <Link className='auth-link' to={'/doctor'}> <span className='material-symbols-outlined'>account_circle</span> {t("announcement.account")}</Link>
                  : <Link className='auth-link' to={'/auth/register'}> <span className='material-symbols-outlined'>person</span> {t("announcement.register")}</Link>
            }
          </div>

        </div>
      </Container>
    </div>
  )
}

export default AnonouncementBar
