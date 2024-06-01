import { useParams } from "react-router-dom";

// Pages
import ContainerSpecifications from "./ContainerSpecifications";
import Converters from "./Converters";
import Incoterms from "./Incoterms";

const UsefulTools = () => {
  const { id } = useParams();

  switch (id) {
    case "incoterms":
      return <Incoterms />;
    case "converters":
      return <Converters />;

    case "containerspecifications":
      return <ContainerSpecifications />;
  }
};

export default UsefulTools;
