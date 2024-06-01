import { useParams } from "react-router-dom";

// Pages
import RoadTransports from "./RoadTransports";
import SeaTransports from "./SeaTransports";
import AirTransports from "./AirTransports";
import OtherTransports from "./OtherTransports";
import CustomFormalitiesServices from "./CustomFormalitiesServices";
import InlandTransportDistribution from "./InlandTransportDistribution";
import Insurance from "./Insurance";
import Home from "../home/Home";

const Services = () => {
  const { id } = useParams();

  switch (id) {
    case "roadtransports":
      return <RoadTransports />;
    case "seatransports":
      return <SeaTransports />;

    case "airtransports":
      return <AirTransports />;

    case "othertransports":
      return <OtherTransports />;

    case "customformalitiesservices":
      return <CustomFormalitiesServices />;

    case "inlandtransportdistribution":
      return <InlandTransportDistribution />;
    case "insurance":
      return <Insurance />;
    default:
      return <Home />;
  }
};

export default Services;
