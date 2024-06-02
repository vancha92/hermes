import { useNavigate } from "react-router-dom";
import { useMobileMenuContext } from "../hooks/useMobileMenuContext";

const ContactButton = () => {
  const navigate = useNavigate();
  const { changeModalState } = useMobileMenuContext();

  const handleClick = () => {
    navigate("/contact");
    changeModalState!(false);
  };

  return (
    <div
      className="btn btn-accent h-10 min-h-10 invert lg:invert-0"
      onClick={() => handleClick()}
    >
      Contact Us
    </div>
  );
};

export default ContactButton;
