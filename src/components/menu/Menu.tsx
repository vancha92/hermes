import { menuCategories } from "../../util/menuCategories";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex gap-4 h-navbar-top">
      {menuCategories.map((cat, index) => {
        return (
          <div key={index} className="flex dropdown">
            <div
              tabIndex={0}
              role="button"
              className="hover:opacity-60 focus:after:absolute focus:after:left-0 focus:after:right-0 focus:after:bottom-0 focus:after:h-0.5 focus:after:bg-accent flex items-center px-[0.25rem]"
            >
              {cat.category}
            </div>
            <ul
              tabIndex={0}
              className="bottom-0 translate-y-full z-[1] p-2 shadow-md shadow-gray-500 flex flex-col dropdown-content rounded-b-xl bg-base-200"
            >
              {cat.subCategory.map((subCat, index) => {
                return (
                  <li
                    key={index}
                    className="hover:opacity-60 btn btn-ghost h-auto min-h-0 p-0 justify-start"
                  >
                    <NavLink
                      to={subCat.link}
                      className="justify-between text-nowrap py-1 px-3 text-sm font-normal"
                    >
                      {subCat.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
