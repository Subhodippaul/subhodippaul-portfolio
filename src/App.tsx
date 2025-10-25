
import Home from "@/components/home";
import ContactMe from "@/components/contact-me";
import Layout from "@/components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
