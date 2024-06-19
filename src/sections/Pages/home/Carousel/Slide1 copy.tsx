import { Dispatch, SetStateAction } from "react";
import leftArrow from "../../../../assets/leftArrow.png";
import rightArrow from "../../../../assets/rightArrow.png";

type params = {
  setNumber: Dispatch<SetStateAction<number>>;
};

const Slide1 = ({ setNumber }: params) => {
  return (
    <div className="flex justify-between bg-[url('./assets/caroussel//image1.jpg')] w-full h-full bg-center bg-cover bg-no-repeat 2xl:rounded-lg">
      <div
        className="w-[10%] h-full cursor-pointer"
        onClick={() => setNumber(3)}
      >
        <div className="h-full flex justify-start align-middle items-center">
          <img src={leftArrow} alt="arrow" className="w-10 h-10 invert" />
        </div>
      </div>
      <div className="w-[80%] relative">
        <div className="absolute top-5 left-5 bg-base-100 bg-opacity-75 rounded-lg shadow-md shadow-black w-1/2 p-4">
          <div>
            <div className="text-accent font-extrabold text-lg lg:text-2xl">
              Random Title
            </div>
            <div className="border-b-2 border-accent rounded-full lg:w-60 mt-1 mb-4"></div>
            <div className="text-accent lg:pb-10 text-sm lg:text-base">
              Some random text to display here.
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="px-4 py-3 rounded-lg cursor-pointer bg-accent text-base-100 hover:bg-slate-500">
                Click
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[10%] h-full cursor-pointer"
        onClick={() => setNumber(2)}
      >
        <div className="h-full flex justify-end align-middle items-center">
          <img src={rightArrow} alt="arrow" className="w-10 h-10 invert" />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
