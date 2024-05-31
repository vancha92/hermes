import { useMobileMenuContext } from "../../hooks/useMobileMenuContext";

const PagePlaceholder = () => {
  const { state } = useMobileMenuContext();

  return (
    <div className={`min-h-container-desktop ${state && "hidden"}`}>
      {/* <div className="wallpaper"></div> */}
      <div>placeholder9</div>
    </div>
  );
};

export default PagePlaceholder;
