import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Project";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      {/* 
      <section id="about">
        <About />
      </section>
      */}
      <section id="contact">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}