import facebookIcon from "../../assets/facebookIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import mailIcon from "../../assets/mailIcon.png";
import { Link } from "react-router-dom";

const Social = () => {
  const handleOpenEmailClient = () => {
    const emailAddress = "hermes_lines@hermes-lines.gr";
    const subject = "Request for contact";
    const body = "";

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="flex gap-4 py-4 lg:w-[992px]">
      <div>
        <button
          className="btn btn-ghost btn-circle p-0"
          onClick={handleOpenEmailClient}
        >
          <img
            src={mailIcon}
            alt="discord"
            className="aspect-square w-8"
            loading="lazy"
          />
        </button>
      </div>

      <div>
        <Link
          to={"https://www.linkedin.com/company/hermes-lines-s.a/"}
          target="_blank"
          className="btn btn-ghost btn-circle p-0"
        >
          <img
            src={linkedinIcon}
            alt="discord"
            className="aspect-square w-8"
            loading="lazy"
          />
        </Link>
      </div>

      <div>
        <Link
          to={"https://www.facebook.com/HermesLinesSA"}
          target="_blank"
          className="btn btn-ghost btn-circle p-0 "
        >
          <img
            src={facebookIcon}
            alt="discord"
            className="aspect-square w-8"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
