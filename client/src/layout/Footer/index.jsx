import React from "react";
import {Col, Container, Row} from "reactstrap";
// import {AiTwotoneHeart} from "react-icons/ai";
import logo from "../../assets/imgs/dark-logo.png";
//import paymentLogo from "../../assets/imgs/payment-method.png";
import {NavLink} from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {MdKeyboardArrowRight} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";
import SocialIcon from "../../common/components/Icons/SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-light pt-4">
      {/* FooterInfo */}
      <Container>
        <Row>
          <Col lg={6}>
            <img src={logo} alt="logo" />
            <p className="my-3">
            Our mission is to give every customer much more than what he/she asks for in terms of quality, 
            selection, value for money and customer service, by understanding local tastes and preferences 
            and innovating constantly to eventually provide an unmatched experience in fine jewellery shopping.
            </p>
            <div className="d-flex align-items-center">
              {[
                {Icon: FaFacebookF, bgColor: "#3b5998"},
                {Icon: FaInstagram, bgColor: "#ac2bac"},
                {Icon: FaTiktok, bgColor: "#000"},
                {Icon: FaTwitter, bgColor: "#55acee"},
              ].map((item, idx) => (
                <SocialIcon key={idx} {...item} />
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col md={6}>
                <h5 className="mt-3">Information</h5>
                <ul>
                  {[
                    "About us",
                    "FAQ",
                    "Terms & Conditions",
                    "Contact Us",
                    "Help",
                  ].map((item) => (
                    <li key={item} className="mb-2 d-flex align-items-center">
                      <MdKeyboardArrowRight />
                      <NavLink to="/" className={"nav-link"}>
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <h5 className="mt-3">Contact</h5>
                <ul>
                  {[
                    {Icon: AiFillHome, text: "6, Appar Street, Tirunelveli Town - 627006"},
                    {Icon: FaEnvelope, text: "pmjewelers@gmail.com"},
                    {Icon: FaPhoneAlt, text: "+91 94875-05710"},
                  ].map(({Icon, text}) => (
                    <li className="mb-3" key={text}>
                      <Icon size={20} className="me-2" /> {text}
                    </li>
                  ))}
                </ul>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* MadeText */}
      {<div className="text-center p-3 bg-light mt-3">
        {" "}
        <a
          className="text-decoration-none fw-bolder"
          href="https:github.com/omar1Mayallo"
          target={"_blank"}
          rel="noreferrer"
        >
          
        </a>
      </div> }
    </footer>
  );
};

export default Footer;
