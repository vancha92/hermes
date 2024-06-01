import hermesLogo from "../../assets/logoWhite.jpg";
import { menuCategories } from "../../util/menuCategories";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                <div
                  key={index}
                  className="cursor-pointer opacity-75 text-sm hover:underline text-base-100"
                >
                  {subCategory.title}
                </div>
              );
            })}
          </div>
        );
      })}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar absolute top-8 right-4 lg:static"
      >
        <div className="rounded-full" onClick={handleClick}>
          <img alt="Tailwind CSS Navbar component" src={hermesLogo} />
        </div>
      </div>
    </div>
  );
};

export default About;
