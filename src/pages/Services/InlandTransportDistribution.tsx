import InquiryButton from "../../util/InquiryButton";

const InlandTransportDistribution = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/inlandTransport.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute left-10 top-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Inland Transport - Distribution
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          For internal transport across Greece, having at our disposal
          cooperating trucks of various types on a daily base, we are able to
          undertake receipts and deliveries at the point where the client
          provides us.
          <br />
          <br />
          Thus, the customer can directly accept the cargo once it has arrived
          in Greece.
        </div>
        <div className="w-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default InlandTransportDistribution;
