import Footer from "./sections/footer/Footer";
import Navbar from "./sections/navbar/Navbar";
import Wallpaper from "./util/Wallpaper";
import { Route, Routes } from "react-router-dom";
import { useMobileMenuContext } from "./hooks/useMobileMenuContext";
import ScrollTopButton from "./util/ScrollTopButton";

// Routes
import Home from "./sections/Pages/home/Home";
import TheCompany from "./sections/Pages/TheCompany/TheCompany";
import Services from "./sections/Pages/Services/Services";
import UsefulTools from "./sections/Pages/UsefulTools/UsefulTools";
import Contact from "./sections/Pages/Contact/Contact";

function App() {
  const { state } = useMobileMenuContext();

  return (
    <div className="">
      <Navbar />
      <div className={`min-h-container-desktop ${state && "hidden"}`}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thecompany/:id" element={<TheCompany />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/usefultools/:id" element={<UsefulTools />} />
        </Routes>
      </div>
      <Footer />
      <ScrollTopButton />
      <Wallpaper />
    </div>
  );
}

export default App;
