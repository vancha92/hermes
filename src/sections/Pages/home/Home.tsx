import Carousel from "./Carousel/Carousel";
import { menuCategories } from "../../../data/categoryData";
import Card from "./Card";

const Home = () => {
  const services = menuCategories[1];

  return (
    <div className="relative h-full max-w-[1365px] min-w-[320px] mx-auto mt-0 pb-8 flex flex-col justify-center gap-4">
      <Carousel />
      <div className="flex flex-col w-full lg:flex-row lg:flex-wrap lg:justify-center gap-6 px-[21px] lg:px-[42px]">
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
