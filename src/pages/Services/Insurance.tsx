import InquiryButton from "../../util/InquiryButton";

const Insurance = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/insurance.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute left-10 top-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Insurance
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          We are able to provide competitive prices for insurance coverage "all
          risks" (clause A and clause C), for the goods we transfer. So, we help
          the customer with the insurance of goods and examine on behalf of our
          client the “small print” of contracts.
        </div>
        <div className="w-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default Insurance;
