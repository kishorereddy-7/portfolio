import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import About from "./about/About";
import Intro from "./intro/Intro";

const Home = () => {
  const [page, setPage] = useState("INTRO");
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  const [detailsError, setDetailsError] = useState(false);

  useEffect(() => {
    fetch("https://gvkishorereddy.herokuapp.com")
      .then((res) => res.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setDetailsError(true);
      });
  }, []);

  const changePage = (selectedPage) => {
    if (page !== selectedPage) {
      setPage(selectedPage);
    }
  };

  const renderPage = () => {
    switch (page) {
      case "INTRO":
        return <Intro loading={loading} person={person} error={detailsError} />;
      case "ABOUT":
        return <About />;
      case "SKILLS":
        return <div>hello</div>;
      case "CONTACTS":
        return <div>name</div>;
      default:
        return <Intro />;
    }
  };
  return (
    <Container>
      <Header
        changePage={changePage}
        loading={loading}
        person={person}
        error={detailsError}
      />
      {renderPage()}
      <Footer loading={loading} person={person} error={detailsError} />
    </Container>
  );
};

export default Home;
