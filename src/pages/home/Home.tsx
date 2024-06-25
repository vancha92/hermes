import Carousel from "./Carousel/Carousel";
import Card from "./Card";
import { menuCategories } from "../../data/categoryData";

const Home = () => {
  const services = menuCategories[1];

  return (
    <div className="page">
      <Carousel />
      <div className="narrowPage">
        <Card subCat={services.subCategory[0]} />
        <Card subCat={services.subCategory[1]} />
        <Card subCat={services.subCategory[2]} />
        <Card subCat={services.subCategory[3]} />
        <Card subCat={services.subCategory[4]} />
        <Card subCat={services.subCategory[5]} />
        <Card subCat={services.subCategory[6]} />
      </div>
    </div>
  );
};

export default Home;
