import { useRef } from "react";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      
    <Navbar />
    <Content />
    <Education/>
    <Projects/>
    <Footer />
    </>
  )
};
export default App;
