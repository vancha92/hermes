import hermesLogo from "../../assets/logoWhite.jpg";
import { menuCategories } from "../../data/categoryData";
import { NavLink, useNavigate } from "react-router-dom";
import { scrollUp } from "../../util/scrollUp";

const About = () => {
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/");
    scrollUp();
  };

  const handleLink = (target: string) => {
    navigate(target);
    scrollUp();
  };

  return (
    <div className="lg:flex lg:justify-between lg:w-[992px] pb-4">
      {menuCategories.map((content, index) => {
        return (
          <div className="" key={index}>
            <div className="font-bold pt-4 text-base-100">
              {content.category}
            </div>
            {content.subCategory.map((subCategory, index) => {
              return (
                <NavLink
                  to={subCategory.link}
                  key={index}
                  onClick={() => handleLink(subCategory.link)}
                  className="cursor-pointer opacity-75 text-sm hover:underline text-base-100 flex"
                >
                  {subCategory.title}
                </NavLink>
              );
            })}
          </div>
        );
      })}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar absolute top-8 right-4 lg:static lg:pr-[3px]"
      >
        <div className="rounded-full" onClick={handleLogo}>
          <img alt="Tailwind CSS Navbar component" src={hermesLogo} />
        </div>
      </div>
    </div>
  );
};

export default About;
