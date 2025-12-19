/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 05/12/2025 - 15:58:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import Navbar from "./components/Navbar";
import PageSparkles from "./components/PageSparkles";
import BackgroundOrbs from "./components/BackgroundOrbs";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <BackgroundOrbs />
      <PageSparkles />
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
