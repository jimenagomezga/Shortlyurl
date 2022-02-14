import React from "react";
//import PropTypes from "prop-types";
import "../styles/BodyPage.css";
import recognition from "../images/icon-brand-recognition.svg";
import record from "../images/icon-detailed-records.svg";
import customizable from "../images/icon-fully-customizable.svg";
import ilustracion2 from "../images/bg-boost-desktop.svg";

function bodyPage({ result }) {
  return (
    <div className="contenedorBodyPage">
      <div className="contenedorTitleIntro">
        {/* aca van los resultados de las url cortas */}
        {result}

        <h1>Advance Statistics</h1>
        <p>
          Trac how your links are perfoming acaross the web with our advance
          statics dashboard.
        </p>
      </div>
      <div className="contenedorVentajas">
        <div className="lineGreen"></div>
        <div className="ventajas">
          <div className="icon1">
            <img src={recognition} alt="icon1" />
          </div>
          <h1> Brand Recognition</h1>
          <p>
            Boost your brand recording with each click. Generic links don't mean
            a thing. branded links helps instil confidence in your content.
          </p>
        </div>
        <div className="block1">
          <div className="ventajas">
            <div className="icon1">
              <img src={record} alt="icon2" />
            </div>
            <h1> Detailed Records</h1>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        <div className="block2">
          <div className="ventajas">
            <div className="icon1">
              <img src={customizable} alt="icon3" />
            </div>
            <h1> Fully Customizable</h1>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="banner">
        <img src={ilustracion2} alt="ilustracion2" />
        <div className="contenedorBanner">
          <h1> Boost your links today</h1>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

//bodyPage.propTypes = {};

export default bodyPage;
