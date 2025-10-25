
import Home from "@/components/home";
import ContactMe from "@/components/contact-me";
import Layout from "@/components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
