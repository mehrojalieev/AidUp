import "./Nav.scss"
import Container from '../../utils/Utils'
import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
// import { UserOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"

const AllServices = [

  {
    title: 'Dental Care',
    doctors: 20,
    img: 'https://cdn0.iconfinder.com/data/icons/dentist-element-1/64/Clear-tooth-teeth-dentist-dental-tool-1024.png',
    link: 'dental'
  },

  {
    title: 'Neurology Care',
    doctors: 10,
    img: 'https://magentajaya.com/wp-content/uploads/2023/02/MGT-04.png',
    link: 'neurology'

  },
  {
    title: 'Gynecologists',
    doctors: 30,
    img: 'https://www.clipartmax.com/png/full/298-2989665_pregnancy-breastfeeding-infant-alcohol-pregnancy.png',
    link: 'gynecologist'
  },
  {
    title: 'Ophthalmology',
    doctors: 24,
    img: 'https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%BE%D1%84%D1%82%D0%B0%D0%BB%D1%8C%D0%BC%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BD%D1%82%D1%83%D1%80-238706025.jpg',
    link: 'ophthalmology'

  },
  {
    title: 'Orthopedics',
    doctors: 26,
    img: 'https://hospitalcmml.com/assets/uploads/especialidades/Ortopedia.png',
    link: 'orthopedics'

  },
  {
    title: 'Cardiology',
    doctors: 20,
    img: 'https://static.vecteezy.com/system/resources/previews/010/310/449/original/heart-human-organ-color-icon-illustration-vector.jpg',
    link: 'cardiology',

  },
  // ----------------------------------

  {
    title: 'Pulmonology',
    doctors: 26,
    img: 'https://eifa.ru/upload/iblock/37d/slide_1.png',
    link: 'pulmonology',
  }, {
    title: 'Audiology Care',
    doctors: 20,
    img: 'https://static-00.iconduck.com/assets.00/ear-icon-1945x2048-w8nphm9t.png',
    link: 'audiology',
  },
]




const Nav = () => {

  const { t } = useTranslation()

  const { pathname } = useLocation()



  // State Hooks
  const [openMenuSidebar, setOpenMenuSidebar] = useState<Boolean>(false)
  const [menuOptions, setMenuOptions] = useState<boolean>(false)
  console.log(menuOptions);
  
  const [scrollY, setScrollY] = useState(0)

  const UpdateScrollPosition = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', UpdateScrollPosition)
    return () => {
      window.removeEventListener('scroll', UpdateScrollPosition)
    }
  }, [])

  if (pathname.includes("patient")) return null
  if (pathname.includes("doctor")) return null

  return pathname.includes("/auth") ? null : (
    <nav className={scrollY > 40 ? 'nav-fixed' : ''} >
      <Container>
        <div className="nav-wrapper">
          <Link to={'/'} className="nav-logo">
            <h1>AzharInc</h1>
          </Link>
          <ul className="nav-menu">
            <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to={'/'} > {t("nav.home")}</NavLink>
            <NavLink onMouseLeave={() => setMenuOptions(false)} onMouseEnter={() => setMenuOptions(true)}  className={({ isActive }) => isActive ? "item-link service-link item-link--active" : "item-link service-link"} to='services'>
               {t("nav.service")}
               <div style={menuOptions ? {display: 'flex'} : {display: 'none'}}  className="link-options">
            {
              AllServices.map((service, index) => 
              <Link onClick={() => setMenuOptions(false)} className="option-link" to={`/service/${service.link}`} key={index}><span className="material-symbols-outlined">medical_services</span>{service.title}</Link>
              )
            }
               </div>
               </NavLink>
            <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to='contact-us'> {t("nav.contact")}</NavLink>
            <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to='about-us'> {t("nav.about")}</NavLink>
          </ul>
          <div className="authorization-action">
            <Link to={'/appointment'} className="appointment-link">{t("nav.appointment")} + </Link>
          </div>

          <span onClick={() => setOpenMenuSidebar(!openMenuSidebar)} className="material-symbols-outlined hamburger-btn">menu</span>
        </div>
      </Container>

      <div style={openMenuSidebar ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }} className="nav__responsive-sidebar__overlay">
        <aside className="nav__responsive-sidebar">
          <div className="responsvie__sidebar-header">
            <i onClick={() => setOpenMenuSidebar(false)} className="close-icon">
              {/* <span className="material-symbols-outlined ">close</span> */}
            </i>
          </div>
        </aside>
      </div>
    </nav>
  )
}

export default Nav
