import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const [loginPage, setLoginPage] = useState(false);

  const handleOpenLogin = () => {
    setLoginPage(!loginPage);
  };

  return (
    <div>
      <Navbar handleOpenLogin={handleOpenLogin} />

      <main>
        <div id="home">
          <Home handleOpenLogin={handleOpenLogin} loginPage={loginPage} />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="about">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;