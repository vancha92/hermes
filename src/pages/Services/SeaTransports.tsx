import InquiryButton from "../../util/InquiryButton";

const SeaTransports = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/seaTransport2.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute left-10 top-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Sea Transports
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          With regular shipments to and from all international commercial ports,
          we offer the most economical options for partial and entire loads,
          using every type of containers.
          <br />
          <br />
          The special staffed shipping department undertakes the processing of
          the import or export. From the receipt of goods, the storage and
          customs formalities and the direct delivery to the point where the
          client indicates us.
          <br />
          <br />
          The number of correspondents we have worldwide, enables us to organize
          properly and seamlessly monitor every move of your cargo to its final
          destination. With the most modern cargo tracking systems we provide
          any information you may need.
          <br />
          <br />
          Apart from the competitive rates, we also pay special attention
          finding alternative solutions to issues regarding the departures and
          the transit time of the liner. So you will always be sure that your
          cargo will be there when you need to.
        </div>
        <div className="w-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default SeaTransports;
