import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
// import ScrollToTop from "react-scroll-to-top";

function Main() {
  return (
    <>
      <GoToTop />
      {/* <ScrollToTop smooth /> */}
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
