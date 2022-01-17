import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Banner from "../components/Banner";
import Events from "../components/Events";
import Mission from "../components/Mission";
import Blog from "../components/Blog";
import Featured from "../components/Featured";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Banner />
        <Events />
        <About />
        <Mission />
        <Blog />
        <Featured />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
