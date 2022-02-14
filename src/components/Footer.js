import React from "react";
import PropTypes from "prop-types";
import "../styles/Footer.css";
import iconFacebook from "../images/icon-facebook.svg";
import iconTweeter from "../images/icon-twitter.svg";
import iconPinteres from "../images/icon-pinterest.svg";
import iconInsta from "../images/icon-instagram.svg";

function Footer(props) {
  return (
    <div className="contenedorFooter">
      <div>
        <h1>Shortly</h1>
      </div>

      <div className="blocks">
        <h2>Features</h2>
        <li>
          <ol>Link Shortening</ol>
          <ol>Branded Links</ol>
          <ol>Analytics</ol>
        </li>
      </div>

      <div className="blocks">
        <h2>Resources</h2>
        <li>
          <ol>Blog</ol>
          <ol>Developers</ol>
          <ol>Support</ol>
        </li>
      </div>

      <div className="blocks">
        <h2>Company</h2>
        <li>
          <ol>About</ol>
          <ol>Our team</ol>
          <ol>Careers</ol>
          <ol>Contact</ol>
        </li>
      </div>

      <div className="blockIcons">
        <img src={iconFacebook} alt="iconfacebook" className="icon"/>
        <img src={iconTweeter} alt="icontweeter" className="icon"/>
        <img src={iconPinteres} alt="iconpinteres" className="icon"/>
        <img src={iconInsta} alt="iconinstagram" className="icon"/>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
