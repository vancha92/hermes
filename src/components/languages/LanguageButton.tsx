import { useState, useRef } from "react";
import languageIcon from "../../assets/languageIcon.png";
import { useWindowSize, useOnClickOutside } from "usehooks-ts";

const LanguageButton = () => {
  const windowWidth = useWindowSize().width;

  const [stateToggle, setToggle] = useState(false);

  const ref = useRef(null);
  const handleClick = () => {
    setToggle(false);
  };
  useOnClickOutside(ref, handleClick);

  const mobile =
    "w-40 absolute py-3 px-4 top-0 right-0 -translate-y-full invert bg-base-300 rounded-l-xl rounded-t-xl shadow-gray-500 shadow-md flex flex-col gap-2";

  const desktop =
    "absolute bottom-0 right-0 translate-y-full z-[1] p-2 pb-3 shadow-md shadow-gray-500 flex flex-col rounded-b-xl bg-base-200";

  return (
    <>
      <div className="relative" ref={ref}>
        <div
          tabIndex={0}
          role="button"
          className={`btn btn-ghost btn-circle p-0 lg:h-[64px] ${
            stateToggle &&
            "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-accent"
          }`}
          onClick={() => setToggle((cur) => !cur)}
        >
          <div className="lg:btn lg:btn-circle lg:btn-ghost lg:hover:bg-base-300">
            <img
              alt="languageIcon"
              className="aspect-square w-8 lg:invert"
              src={languageIcon}
            />
          </div>
        </div>
        {stateToggle && (
          <div className={windowWidth > 1023 ? desktop : mobile}>
            <div className="cursor-pointer flex justify-between items-center content-center gap-4 my-0.5 lg:py-1 px-3">
              <span className="lg:text-sm">English</span>
              <input
                type="radio"
                name="radio-10"
                className="radio border border-accent bg-base-100 checked:bg-accent"
              />
            </div>
            <div className="cursor-pointer flex justify-between items-center content-center gap-4 my-0.5 lg:py-1 px-3">
              <span className="lg:text-sm">Greek</span>
              <input
                type="radio"
                name="radio-10"
                className="radio border border-accent bg-base-100 checked:bg-accent"
              />
            </div>
            <div className="cursor-pointer flex justify-between items-center content-center gap-4 my-0.5 lg:py-1 px-3">
              <span className="lg:text-sm">Italian</span>
              <input
                type="radio"
                name="radio-10"
                className="radio border border-accent bg-base-100 checked:bg-accent"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageButton;
