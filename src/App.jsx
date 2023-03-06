import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MainList from "./components/MainList";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <>
      <header className="header d-flex maxw-1160 m-auto">
        <Header />
      </header>
      <main className="main">
        <section className="hero m-auto">
          <Hero />
        </section>
        <section>
          <div className="container">
            <MainList />
          </div>
        </section>
        <section className="maxw-1160 m-auto">
          <div className="container m-top-120">
            <About />
          </div>
        </section>
        <section className="maxw-1160 m-auto">
          <div className="container m-top-240">
            <Team />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
