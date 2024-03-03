import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Cards } from "../components/Cards";
import { Carousel } from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div className="shadow-sm">
        <Navbar />
      </div>
      <div className="shadow-sm">
        <Carousel/>
      </div>
      <div className="shadow p-3">
        <Cards/>
      </div>
      <div className="shadow p-3">
        <Footer />
      </div>
    </>
  );
};

export default Home;
