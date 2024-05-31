import PagePlaceholder from "./sections/Pages/PagePlaceholder";
import Footer from "./sections/footer/Footer";
import Navbar from "./sections/navbar/Navbar";
import Wallpaper from "./util/Wallpaper";
// import { Route, Routes } from "react-router-dom";
import { useMobileMenuContext } from "./hooks/useMobileMenuContext";

function App() {
  const { state } = useMobileMenuContext();

  return (
    <div className="">
      {/* <div className="min-h-full"> */}
      <Navbar />
      <div className={`min-h-container-desktop ${state && "hidden"}`}>
        {/* <Routes> */}
        <PagePlaceholder />
        {/* </Routes> */}
      </div>
      <Footer />
      <Wallpaper />
    </div>
  );
}

export default App;
