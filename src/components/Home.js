import { useState } from "react";
import { Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import About from "./about/About";
import Intro from "./intro/Intro";

const Home = () => {
  const [page, setPage] = useState("INTRO");

  const changePage = (selectedPage) => {
    if (page !== selectedPage) {
      setPage(selectedPage);
    }
  };

  const renderPage = () => {
    switch (page) {
      case "INTRO":
        return <Intro />;
      case "ABOUT":
        return <About />;
      case "SKILLS":
        return <div>hello</div>;
      case "CONTACT":
        return <div>name</div>;
      default:
        return <Intro />;
    }
  };
  return (
    <Container>
      <Header changePage={changePage} />
      {renderPage()}
      <Footer />
    </Container>
  );
};

export default Home;
