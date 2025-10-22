import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Services /> 
      <About />
      <ContactMe />
      <Footer />
    </div>
  );
}
