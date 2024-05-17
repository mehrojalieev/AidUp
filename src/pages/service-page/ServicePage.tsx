import "./ServicePage.scss";
import React from "react";
import Link from "@mui/material/Link";
import { FaCheck } from "react-icons/fa";
import Container from "../../utils/Utils";
import { SiLinkerd } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink, useParams } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const SercicePage = () => {
  let { id } = useParams();

  const menu_items = [
    { item_name: "Angioplasty Services", link: "/service/angioplasty" },
    { item_name: "Cardiology Services", link: "/service/cardiology" },
    { item_name: "Dental Services", link: "/service/dental" },
    { item_name: "Endocrinology Services", link: "/service/endocrinology" },
    { item_name: "Eye Care Services", link: "/service/eye" },
    { item_name: "Neurology Services", link: "/service/neurology" },
    { item_name: "Physical therapy", link: "/service/physical" },
    { item_name: "RMI Services", link: "/service/rmi" },
  ];

  const heroTitle = {
    angioplasty: {
      title: "Anti Skin Care Services",
    },

    cardiology: {
      title: "Breast Plants Services ",
    },

    dental: {
      title: "Body Scumer Services",
    },

    endocrinology: {
      title: "Liposaction Services",
    },
  };
  console.log(heroTitle);
  console.log(id);
  return (
    <div className="service-wrapper">
      <div className="service-home__img">
        <Container>
          {/* <h2>{heroTitle.id.title}</h2> */}
          <h2>Breast Plants Services </h2>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" className="service-bg">
              <Link
                underline="hover"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "20px",
                }}
                color="inherit"
                href="/"
              >
                <AiFillHome />
                Home
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
            </Breadcrumbs>
          </div>
        </Container>
      </div>

      <div className="service-table__wrapper">
        <div className="service-table">
          {menu_items.map((k) => (
            <NavLink
              to={k.link}
              className={({ isActive }) =>
                isActive ? "service-item service-item__active" : "service-item"
              }
            >
              {k.item_name} {<SiLinkerd />}
            </NavLink>
          ))}
        </div>
        <div className="service-table-content">
          <img
            className="service-img"
            // width={836}
            src="https://medicate.peacefulqode.co.in/surgery/wp-content/uploads/sites/14/2021/12/3.jpg"
            alt="Img"
          />

          <h3 className="service-title">
            Professional medical service of Anti Skin Care
          </h3>
          <p className="service-text">
            Medicate is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since.
          </p>

          <div className="service-checkouts">
            {/* shu yerda map qilish kerak */}
            <ul>
              <li>
                <FaCheck /> Aliquam tincidunt nisi vitae nulla molestie 
              </li>
              <li>
                <FaCheck /> Praesent convallis odio elementum tortor 
              </li>
              <li>
                <FaCheck /> Nunc molestie ex at nisi vehicula pellentesque.
              </li>
              <li>
                <FaCheck /> Cras id purus faucibus, euismod metus.
              </li>
              <li>
                <FaCheck /> Aenean et libero tincidunt, auctor urna.
              </li>
            </ul>

            <ul>
              <li>
                <FaCheck /> There are many variations of passages of Lorem.
              </li>
              <li>
                <FaCheck /> Ipsum available, but the majority have suffered.
              </li>
              <li>
                <FaCheck /> alteration in some form, by injected humour.
              </li>
              <li>
                <FaCheck /> randomised words which don't look.
              </li>
              <li>
                <FaCheck /> slightly believable. If you are going.
              </li>
            </ul>
          </div>

          <h2 className="service-title">Breast Plants </h2>
          <p className="service-extra__text">
            Medicate is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard dummy text ever since.
          </p>

          <div className="service-extra-imgs">
            <img src="https://medicate.peacefulqode.co.in/surgery/wp-content/uploads/sites/14/2022/02/1.jpg" alt="Img" />
            <img src="https://medicate.peacefulqode.co.in/surgery/wp-content/uploads/sites/14/2022/02/2.jpg" alt="Img" />
          </div>

          <h2 className="service-title">Health Tips & Info </h2>
          <p className="service-extra__text">
          Medicate is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SercicePage;
