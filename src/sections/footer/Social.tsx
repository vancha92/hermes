import facebookIcon from "../../assets/facebookIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import mailIcon from "../../assets/mailIcon.png";

const Social = () => {
  return (
    <div className="flex gap-4 py-4 lg:w-[992px]">
      <div>
        <button className="btn btn-ghost p-0">
          <img
            src={mailIcon}
            alt="discord"
            className="aspect-square w-8"
            loading="lazy"
          />
        </button>
      </div>

      <div>
        <button className="btn btn-ghost p-0">
          <img
            src={linkedinIcon}
            alt="discord"
            className="aspect-square w-8"
            loading="lazy"
          />
        </button>
      </div>

      <div>
        <button className="btn btn-ghost p-0">
          <img
            src={facebookIcon}
            alt="discord"
            className="aspect-square w-8"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
};

export default Social;
