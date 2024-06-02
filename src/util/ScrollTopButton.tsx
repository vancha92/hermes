// packages
import { useState } from "react";

// pages and components
import upArrow from "../assets/upArrow.png";

// styles

const ScrollTopButton = () => {
  const scrollHidden = "hidden";
  const scrollVisible =
    "fixed btn bg-[#b8b8b8] border-[#a8a8a8] btn-circle bottom-[12.8%] lg:bottom-8 right-4 lg:right-4";

  const [scrollTop, setScrollTop] = useState(scrollHidden);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 64 ||
      document.documentElement.scrollTop > 64
    ) {
      setScrollTop(scrollVisible);
    } else {
      setScrollTop(scrollHidden);
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <button className={scrollTop} onClick={scrollToTop}>
      <img src={upArrow} alt="up" className="invert aspect-square w-6" />
    </button>
  );
};

export default ScrollTopButton;
