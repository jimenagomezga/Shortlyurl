import React from "react";
import BodyPage from "./components/BodyPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyPage />
      <Footer />
    </div>
  );
}

export default App;
