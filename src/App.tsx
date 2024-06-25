import Wallpaper from "./util/Wallpaper";
import { Route, Routes } from "react-router-dom";
import { useMobileMenuContext } from "./hooks/useMobileMenuContext";
// import ScrollTopButton from "./util/ScrollTopButton";
import GetInTouchButton from "./util/GetInTouchButton";

// Routes

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import RequestForm from "./pages/Contact/RequestForm";
import TheCompany from "./pages/TheCompany/TheCompany";
import Services from "./pages/Services/Services";
import UsefulTools from "./pages/UsefulTools/UsefulTools";

function App() {
  const { state } = useMobileMenuContext();

  return (
    <div className="">
      <Navbar />
      <div className={`min-h-container-desktop ${state && "hidden"}`}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/requestform" element={<RequestForm />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/thecompany/:id" element={<TheCompany />} />
          <Route path="/usefultools/:id" element={<UsefulTools />} />
        </Routes>
      </div>
      <Footer />
      <GetInTouchButton />
      {/* <ScrollTopButton /> */}
      <Wallpaper />
    </div>
  );
}

export default App;
