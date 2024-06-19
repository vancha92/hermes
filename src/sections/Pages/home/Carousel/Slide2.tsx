import { Dispatch, SetStateAction } from "react";
import leftArrow from "../../../../assets/leftArrow.png";
import rightArrow from "../../../../assets/rightArrow.png";
import ContentContainer from "./ContentContainer";
import { useWindowSize } from "usehooks-ts";

type params = {
  setNumber: Dispatch<SetStateAction<number>>;
};

const Slide2 = ({ setNumber }: params) => {
  const windowWidth = useWindowSize().width;

  return (
    <div className="flex justify-between bg-[url('./assets/caroussel//image2.jpg')] w-full h-full bg-center bg-cover bg-no-repeat 2xl:rounded-lg">
      <div
        className="w-[10%] h-full cursor-pointer"
        onClick={() => setNumber(1)}
      >
        <div className="h-full flex justify-start align-middle items-center">
          <img src={leftArrow} alt="arrow" className="w-10 h-10 invert" />
        </div>
      </div>
      {windowWidth > 1023 && (
        <div className="absolute top-5 left-1/4 min-w-96 max-w-[30rem]">
          <ContentContainer number={2} />
        </div>
      )}
      <div
        className="w-[10%] h-full cursor-pointer"
        onClick={() => setNumber(3)}
      >
        <div className="h-full flex justify-end align-middle items-center">
          <img src={rightArrow} alt="arrow" className="w-10 h-10 invert" />
        </div>
      </div>
    </div>
  );
};

export default Slide2;
