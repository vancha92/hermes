import Menu from "../../components/menu/Menu";
import hermesLogo from "../../assets/logoWhite.jpg";
import Searchbar from "../../components/searchbar/Searchbar";
import { useWindowSize } from "usehooks-ts";
import MobileMenu from "../../components/mobileMenu/MobileMenu";

const Navbar = () => {
  const windowWidth = useWindowSize().width;

  return (
    <div className="h-navbar-top max-w-100vw">
      <div className="z-30 fixed h-navbar-top navbar bg-base-100 justify-between p-0 border-b-2 border-b-base-300 shadow-lg">
        {/* Logo */}
        {/* Logo */}
        <div className="flex gap-2 h-full">
          <div className="flex items-center cursor-pointer">
            <img
              src={hermesLogo}
              alt="mainLogo"
              className="rounded-full w-10"
            />
            <div className="text-xl font-bold pl-2 text-accent">
              HERMES LINES <span className="text-xs text-accent">S.A.</span>
            </div>
          </div>

          {/* Menu and Divider for Desktop*/}
          {/* Menu and Divider for Desktop*/}
          {windowWidth > 1023 && (
            <>
              <div className="hidden lg:flex">
                <div className="h-8"></div>
                <div className="divider divider-horizontal m-0 before:w-[1px] before:bg-[#eceaea] after:w-[1px] after:bg-[#eceaea]"></div>
                <div className="h-8"></div>
              </div>
              <div className="flex justify-start gap-2">
                <Menu />
              </div>
            </>
          )}
        </div>

        {/* Connect and account */}
        {/* Connect and account */}
        <div className="flex justify-end gap-2">
          <Searchbar />

          {windowWidth < 1024 && <MobileMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
