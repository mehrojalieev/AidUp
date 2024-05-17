import "./Footer.scss";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineDateRange } from "react-icons/md";
import Container from "../../utils/Utils";
import { FaGooglePlusG, FaInstagram, FaPinterest, FaLocationPin } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

  const { pathname } = useLocation()
  if (pathname.includes("patient")) return null
  if (pathname.includes("doctor")) return null
  return pathname.includes("auth") ? null : (
    <div className="extra-footer__wrapper">
      <Container>
        {/* Footer Top Contact */}
        <div className="extra-footer__contact">
          <div className="footer-email__contact">
            <span className="material-symbols-outlined footer-email__icon" >mail</span>
            <p className="footer-email__text">  Latest Updates Subscribe To Our Newslette</p>
          </div>
          <form className="footer-email__form">
            <input type="email" placeholder="Enter Your Email" />
            <button>SUBMIT</button>
          </form>
        </div>

        <div className="extra-footer__rows">
          <div className="extra-footer__row">
            <h3 className="extra-footer__title">Medicate</h3>
            <p className="extra-footer__row-text">
              It helps desigenrs plan out where the content will set, the
              content to be written and approved
            </p>
            <div className="extra-footer__row-icons">
              <div className="extra-footer__row-icon">
                <FaFacebookF />
              </div>
              <div className="extra-footer__row-icon">
                <FaGooglePlusG />
              </div>
              <div className="extra-footer__row-icon">
                <FaInstagram />
              </div>
              <div className="extra-footer__row-icon">
                <FaPinterest />
              </div>
            </div>
          </div>
          <div className="extra-footer__row">
            <h3 className="extra-footer__title">Our Courses</h3>
            <div className="extra-footer__menu-row">
              <ul className="extra-footer__menu">
                <li>
                  <Link className="extra-footer__link" to="/">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Our Services
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Doctores1
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Doctores2
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Events
                  </Link>
                </li>
              </ul>
              <ul className="extra-footer__menu">
                <li>
                  <Link className="extra-footer__link" to="/">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Our Procts
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    FAQ
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Departemts
                  </Link>
                </li>

                <li>
                  <Link className="extra-footer__link" to="/">
                    Member
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="extra-footer__row">
            <h3 className="extra-footer__title">Racet Posts</h3>
            <div className="extra-footer__card">
              <div className="extra-footer__img"></div>
              <div className="extra-footer__about">
                <p className="extra-footer__date"><MdOutlineDateRange /> Decamber 12, 2021</p>
                <h4>Get The Exercie</h4>
                <h4>Limed Mobility</h4>
              </div>
            </div>
            <div className="extra-footer__line"></div>
            <div className="extra-footer__card">
              <div className="extra-footer__img"></div>
              <div className="extra-footer__about">
                <p className="extra-footer__date"><MdOutlineDateRange /> Decamber 12, 2021</p>
                <h4>Get The Exercie</h4>
                <h4>Limed Mobility</h4>
              </div>
            </div>
          </div>
          <div className="extra-footer__row">
            <h3 className="extra-footer__title">Contact Us</h3>
            <div className="extra-footer__concate">
              <FaPhoneAlt />
              <p>+1800-001-658</p>
            </div>
            <div className="extra-footer__concate">
              <MdEmail />
              <p>Info@Pesfulea.com</p>
            </div>
            <div className="extra-footer__concate">
              <FaLocationPin />
              <p>Toshken city</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;