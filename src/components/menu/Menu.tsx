import { useToggle, useOnClickOutside } from "usehooks-ts";
import { menuCategories } from "../../util/menuCategories";
import Category from "./Category";
import { useRef } from "react";

const Menu = () => {
  const [menu1, menu2, menu3] = menuCategories;
  const toggle1 = useToggle();
  const toggle2 = useToggle();
  const toggle3 = useToggle();
  const ref = useRef(null);

  const handleClick = () => {
    toggle1[2](false);
    toggle2[2](false);
    toggle3[2](false);
  };

  useOnClickOutside(ref, handleClick);

  return (
    <div className="flex gap-4 h-navbar-top" ref={ref}>
      <Category
        menuNo={1}
        category={menu1.category}
        subCategory={menu1.subCategory}
        stateMenu1={toggle1[0]}
        stateMenu2={toggle2[0]}
        stateMenu3={toggle3[0]}
        setMenu1={toggle1[2]}
        setMenu2={toggle2[2]}
        setMenu3={toggle3[2]}
      />
      <Category
        menuNo={2}
        category={menu2.category}
        subCategory={menu2.subCategory}
        stateMenu1={toggle1[0]}
        stateMenu2={toggle2[0]}
        stateMenu3={toggle3[0]}
        setMenu1={toggle1[2]}
        setMenu2={toggle2[2]}
        setMenu3={toggle3[2]}
      />
      <Category
        menuNo={3}
        category={menu3.category}
        subCategory={menu3.subCategory}
        stateMenu1={toggle1[0]}
        stateMenu2={toggle2[0]}
        stateMenu3={toggle3[0]}
        setMenu1={toggle1[2]}
        setMenu2={toggle2[2]}
        setMenu3={toggle3[2]}
      />
    </div>

    // <div className="flex gap-4 h-navbar-top">
    //   {menuCategories.map((cat, index) => {
    //     return (
    //       <div key={index} className="flex dropdown">
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="hover:opacity-60 focus:after:absolute focus:after:left-0 focus:after:right-0 focus:after:bottom-0 focus:after:h-0.5 focus:after:bg-accent flex items-center px-[0.25rem]"
    //         >
    //           {cat.category}
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="bottom-0 translate-y-full z-[1] p-2 shadow-md shadow-gray-500 flex flex-col dropdown-content rounded-b-xl bg-base-200"
    //         >
    //           {cat.subCategory.map((subCat, index) => {
    //             return (
    //               <li
    //                 key={index}
    //                 className="hover:opacity-60 btn btn-ghost h-auto min-h-0 p-0 justify-start"
    //               >
    //                 <NavLink
    //                   onClick={() => handleClick()}
    //                   to={subCat.link}
    //                   className="justify-between text-nowrap py-1 px-3 text-sm font-normal"
    //                 >
    //                   {subCat.title}
    //                 </NavLink>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Menu;
