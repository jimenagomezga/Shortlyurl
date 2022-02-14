import React from "react";
import "../styles/Header.css";
import bgshorter from "../images/bg-shorten-desktop.svg";
import ilustracion from "../images/illustration-working.svg";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Header() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [showresult, setShowResult] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setUrl(e.target.value);
  };

  function isValidUrl(url) {
    try {
      url = new URL(url);
    } catch (_) {
      return false;
    }

    return true;
  }

  const handleSubmit = async () => {
    if (isValidUrl(url)) {
      const urlApi = `https://api.shrtco.de/v2/shorten?url=${url}`;
      try {
        const resp = await fetch(urlApi);
        const data = await resp.json();
        console.log(data.result.full_short_link2);
        setResult(data.result.full_short_link2);
        setShowResult(true);
      } catch (err) {
        console.log("error");
      }
    }
  };

  return (
    <div className="contenedorHeader">
      <nav>
        <h1>Shortly</h1>
        <h2>Features</h2>
        <h2>Pricing</h2>
        <h2>Resources</h2>
        <h2>Login</h2>
        <button>Sign Up</button>
      </nav>
      <div className="contenedorTitleIlustracion">
        <div className="contenedorTitle">
          <title>More than just shorter links</title>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>

        <img src={ilustracion} alt="Ilustracion" />
      </div>

      <div className="contenedorBusqueda">
        <img src={bgshorter} alt="fondo1"></img>
      </div>
      <div className="contenedorInputSearch">
        <input
          type="text"
          placeholder="Shorten a link here"
          value={input}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleSubmit}> Shorte it!</button>
      </div>
      {result ? (
        <div className="contentResult">
          {showresult} {result}
          <CopyToClipboard onCopy={() => setCopied(true)} text={result}>
            <button onClick={() => setCopied(true)}>Copy</button>
          </CopyToClipboard>
          {copied ? <h1>¡copied url!</h1> : null}
        </div>
      ) : null}
    </div>
  );
}

Header.propTypes = {};

export default Header;
