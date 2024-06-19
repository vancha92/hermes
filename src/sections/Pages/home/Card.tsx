import { useNavigate } from "react-router-dom";
import { scrollUp } from "../../../util/scrollUp";
import { I_SubCategory } from "../../../data/categoryData";

type params = {
  subCat: I_SubCategory;
};

const Card = ({ subCat }: params) => {
  const navigate = useNavigate();

  const handleLink = (target: string) => {
    navigate(target);
    scrollUp();
  };

  return (
    <div className="contentContainer lg:w-[48%]">
      <div className="flex gap-10">
        <div className="">
          <div className="flex justify-between items-center pb-4 lg:pb-0">
            <div className="font-bold text-lg">{subCat.title}</div>
            <div className="w-16 lg:hidden">
              <img src={subCat.icon} alt="icon" className="invert" />
            </div>
          </div>
          <div>{subCat.description}</div>
          <div className="flex justify-end pt-4">
            <div
              className="text-sm text-gray-500 cursor-pointer hover:underline"
              onClick={() => handleLink(subCat.link)}
            >
              Explore more...
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 lg:flex justify-center">
          <div className="">
            <img src={subCat.icon} alt="icon" className="invert w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
