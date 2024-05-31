import { useMobileMenuContext } from "../../hooks/useMobileMenuContext";
import About from "./About";
import Impressum from "./Impressum";
import Social from "./Social";

const Footer = () => {
  const { state } = useMobileMenuContext();

  return (
    <div
      className={`-z-10 absolute w-full lg:flex lg:flex-col lg:items-center bg-accent p-4 ${
        state && "hidden"
      }`}
    >
      <About />
      <div className="flex justify-center">
        <div className="divider divider-vertical my-4 w-3/4 lg:w-[20rem] before:bg-base-100 after:bg-base-100"></div>
      </div>
      <Social />
      <Impressum />
    </div>
  );
};

export default Footer;
