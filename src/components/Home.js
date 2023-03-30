import Intro from "./intro/Intro";
import About from "./about/About";
import { Navigater } from "./navigation/Navigater";
import { useState } from "react";

const menuNames = {
  home: 'home',
  about: 'about',
  skill: 'skill',
  contact: 'contact'
}

const Home = () => {

  const [active, setActive] = useState({ name: "home" });

  const handleMenu = (menu) => {
    setActive(menu)
  }

  const renderScreen = () => {
    switch(active.name) {

      case menuNames.home:
        return <Intro />
      case menuNames.about:
        return <About />
      default: 
        return <Intro />
    }
  }
  
  return (
    <div>
      {renderScreen()}
      <Navigater handleMenu={handleMenu} />
    </div>
  );
};

export default Home;
