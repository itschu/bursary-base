import "../styles/globals.css";
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Section from "../components/Section";
import Principle from "../components/Principle";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Section />
      <Principle />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Page;
