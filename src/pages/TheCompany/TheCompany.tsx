import { useParams } from "react-router-dom";

// Pages
import WhoWeAre from "./WhoWeAre";
import OurVision from "./OurVision";
import OrganizationChart from "./OrganizationChart";
import NewsAndUpdates from "./NewsAndUpdates";
import Gallery from "./Gallery";
import FinancialData from "./FinancialData";
import Home from "../home/Home";

const TheCompany = () => {
  const { id } = useParams();

  switch (id) {
    case "whoweare":
      return <WhoWeAre />;
    case "ourvision":
      return <OurVision />;

    case "organizationchart":
      return <OrganizationChart />;

    case "newsandupdates":
      return <NewsAndUpdates />;

    case "gallery":
      return <Gallery />;

    case "financialdata":
      return <FinancialData />;
    default:
      return <Home />;
  }
};

export default TheCompany;
