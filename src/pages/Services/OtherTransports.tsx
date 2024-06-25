import InquiryButton from "../../util/InquiryButton";

const OtherTransports = () => {
  return (
    <div className="page">
      <div className="relative bg-[url('./assets/services/otherTransport.jpg')] w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-bottom bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500">
        <div className="absolute right-10 bottom-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Other Transports
        </div>
      </div>

      <div className="narrowPage">
        <div className="contentContainer lg:w-1/2">
          Managing to comply with the total needs of its customers, our company
          has reached top quality service and for many years undertakes and can
          serve the following transports:
          <br />
          <br />
          <ul>
            <li className="pl-4">- Special transports</li>
            <li className="pl-4">- Rail transports</li>
            <li className="pl-4">- Combined transports</li>
            <li className="pl-4">- Triangle transports</li>
            <li className="pl-4">- Marine transports</li>
          </ul>
        </div>
        <div className="w-fit">
          <InquiryButton />
        </div>
      </div>
    </div>
  );
};

export default OtherTransports;
