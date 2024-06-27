import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { scrollUp } from "../../util/scrollUp";
import { menuCategories } from "../../data/categoryData";
import InquiryButton from "../../util/InquiryButton";

const Services = () => {
  const navigate = useNavigate();
  const subCat = menuCategories[1].subCategory;

  const handleLink = (target: string) => {
    navigate(target);
    scrollUp();
  };

  let urlCat = useLocation();

  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/seaTransport.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute left-10 bottom-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Services
        </div>
      </div>

      <div className="flex gap-4 px-[21px] relative">
        <div className="sticky top-[80px] contentContainer  min-w-[140px] h-fit flex flex-col gap-3 lg:gap-2">
          {subCat.map((cat, index) => {
            return (
              <div
                key={index}
                onClick={() => handleLink(cat.link)}
                className="relative cursor-pointer w-fit hover:opacity-60 text-pretty text-xs lg:text-base"
              >
                <div>{cat.title}</div>
                {urlCat.pathname === cat.link && (
                  <div className="absolute bottom-0 left-0 bg-accent w-full h-0.5 rounded-full" />
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="contentContainer w-full h-fit">
            {urlCat.pathname.split("/")[2] ? (
              <Outlet />
            ) : (
              <div>Select a category...</div>
            )}
          </div>

          {urlCat.pathname.split("/")[2] && (
            <div className="flex justify-end">
              <InquiryButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
