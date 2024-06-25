import InquiryButton from "../../util/InquiryButton";

const AirTransports = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/airTransport.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute right-10 bottom-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Air Transports
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          Our experienced staff undertakes to handle loads, incoming or
          outgoing, of any kind, weight and volume.
          <br />
          <br />
          We provide accurate information to importers and exporters in terms of
          transportation, customs formalities and insure their cargoes. Finally,
          we inform promptly and regularly the progress of the transport of
          their cargo.
        </div>
        <div className="w-fit h-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default AirTransports;
