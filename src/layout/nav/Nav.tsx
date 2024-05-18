import "./Nav.scss"
import Container from '../../utils/Utils'
import { Link, NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
// import { UserOutlined } from "@ant-design/icons"
import { useTranslation } from "react-i18next"

const MenuData = [
  {
    title: "Home",
    route_link: "/"
  },
  {
    title: "Services",
    icon: "keyboard_arrow_down",
    route_link: 'services',
    menu_items: [
      { item_name: "Angioplasty Services", link: "service/angioplasty" },
      { item_name: "Cardiology Services", link: "service/cardiology" },
      { item_name: "Dental Services", link: "service/dental" },
      { item_name: "Endocrinology Services", link: "service/endocrinology" },
      { item_name: "Eye Care Services", link: "service/eye" },
      { item_name: "Neurology Services", link: "service/neurology" },
      { item_name: "Physical therapy", link: "service/physical" },
      { item_name: "RMI Services", link: "service/rmi" },
    ]
  },

  {
    title: "Contact Us",
    route_link: 'contact-us'
  },
  {
    title: "About Us",
    route_link: 'about-us'
  },
  {
    title: "FAQ",
    route_link: 'faq'
  },
]


const Nav = () => {

  const {t} = useTranslation()

  const { pathname } = useLocation()



  // State Hooks
  const [openResponsiveMenu, setOpenResponsiveSubMenu] = useState(false)
  const [openSubitems, setOpenSubitems] = useState(false)
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
                  <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"}  to='services'> {t("nav.service")}</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"}  to='contact-us'> {t("nav.contact")}</NavLink>
                  <NavLink className={({ isActive }) => isActive ? "item-link item-link--active" : "item-link"} to='about-us'> {t("nav.about")}</NavLink>
          </ul>






          <div className="authorization-action">
            <Link to={'/appointment'} className="appointment-link">{t("nav.appointment")} + </Link>
          </div>

          <Link to={'/auth/login'} className="responsive-auth">
            <span className="material-symbols-outlined">person</span>
            <strong>Sign in</strong>
          </Link>
          <span onClick={() => setOpenResponsiveSubMenu(!openResponsiveMenu)} className="material-symbols-outlined hamburger-btn">{openResponsiveMenu ? 'close' : 'menu'}</span>
        </div>
      </Container>

      {/* Responsive menu */}
      <ul style={openResponsiveMenu ? { display: 'flex' } : { display: 'none' }} className="responsive__menu-wrapper">
        {
          MenuData.map((item, index) =>
            <li key={index} className="menu-item">
              <Link to={'/'} onClick={() => setOpenSubitems(!openSubitems)} className="item-link">
                {item.title}
                <span className="material-symbols-outlined"> {item.icon}</span>
              </Link>
              <div className="item-subitem">
                {
                  item?.menu_items?.map((subitem, index) =>
                    <Link to={'/'} key={index} className="subitem-link">{subitem.item_name}</Link>
                  )
                }
              </div>
            </li>
          )
        }

      </ul>
    </nav>
  )
}

export default Nav
