import Header from "./ui/header/Header.jsx";
import About from "./ui/about/About.jsx";
import Project from "./ui/projects/Project.jsx";
import Contact from "./ui/contact/Contact.jsx";
import Navbar from "./ui/navbar/Navbar.jsx";
import Footer from "./ui/footer/Footer.jsx";
 
const page = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
