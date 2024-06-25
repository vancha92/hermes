import InquiryButton from "../../util/InquiryButton";

const RoadTransports = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/roadTansport.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute right-10 bottom-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Road Transports
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          Our road services connect all major cities of Europe to every corner
          of Greece, offering immediate and responsible solutions.
          <br />
          <br />
          We transport full, and partial loads, with speed and safety.
          <br />
          <br />
          Our company with its selected network, ensures direct pick up and
          loading for immediate delivery to the customer.
          <br />
        </div>
        <div className="w-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default RoadTransports;
