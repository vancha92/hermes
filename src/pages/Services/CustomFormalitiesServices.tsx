import InquiryButton from "../../util/InquiryButton";

const CustomFormalitiesServices = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/seaTransport.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute right-10 bottom-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Custom Formalities Services
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          Our carefully selected partners, custom brokers, are daily in Customs
          of Piraeus, Athens, Thessaloniki and Athens International Airport.
          <br />
          <br />
          In constant contact with our company they ensure the timely clearance
          or the completion of customs formalities for each customers goods.
        </div>
        <div className="w-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default CustomFormalitiesServices;
