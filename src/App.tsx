import AboutUs from "./components/aboutUs";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import ContactUs from "./contactUs";
function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutUs />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
