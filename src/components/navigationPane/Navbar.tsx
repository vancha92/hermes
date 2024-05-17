import accountIcon from "../../assets/accountIcon.png";
import Wallet from "../wallet/Wallet";

const Navbar = () => {
  return (
    <div className="navbar glass bg-base-200">
      {/* logo */}
      <div className="w-full">
        <a className="btn btn-ghost text-xl">Market</a>
      </div>

      {/* searchbar */}
      <div className="form-control w-full">
        <input type="text" placeholder="Search" className="input w-full" />
      </div>

      {/* profile section */}
      <div className="w-full flex justify-end gap-2">
        <Wallet />

        {/* Account */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={accountIcon} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 glass shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
