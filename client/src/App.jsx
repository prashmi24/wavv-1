import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Popular from "./components/Popular";
import Discover from "./components/Discover";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import FloatingCta from "./components/FloatingCta";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="py-12">
        <div className="container mx-auto">
          <Featured />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Popular />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Discover />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Blog />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Gallery />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Testimonials />
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <Newsletter />
        </div>
      </section>
      <FloatingCta />
      <Footer />
    </div>
  );
}

export default App;
