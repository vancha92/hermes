import hermesLogo from "../../assets/logoWhite.jpg";
import { menuCategories } from "../../util/menuCategories";

const About = () => {
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
                  {subCategory}
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
        <div className="rounded-full">
          <img alt="Tailwind CSS Navbar component" src={hermesLogo} />
        </div>
      </div>
    </div>
  );
};

export default About;
