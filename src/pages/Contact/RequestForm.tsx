import { useState } from "react";
import { inquiryEmail } from "../../util/inquiryEmail";
import toast from "react-hot-toast";

const style1 = "text-xs lg:text-sm py-1 px-1";
const style2 = "px-2 py-1 rounded-md text-base";

const RequestForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEMail] = useState("");
  const [date, setDate] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");

  const notify = () => toast.error("Please fill all required fields.");

  const sendRequest = () => {
    let requestInfo = {
      companyName: companyName,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      date: date,
      origin: origin,
      destination: destination,
      description: description,
      comments: comments,
    };

    // Function to check if a value is initial
    const isInitial = (value: any) => {
      return value === null || value === undefined || value === "";
    };

    // Validate each field except 'comments'
    if (
      !isInitial(requestInfo.companyName) &&
      !isInitial(requestInfo.firstName) &&
      !isInitial(requestInfo.lastName) &&
      !isInitial(requestInfo.phone) &&
      !isInitial(requestInfo.email) &&
      !isInitial(requestInfo.date) &&
      !isInitial(requestInfo.origin) &&
      !isInitial(requestInfo.destination) &&
      !isInitial(requestInfo.description)
    ) {
      // All required fields are valid
      inquiryEmail(requestInfo);
    } else {
      // Handle the case where one or more required fields are initial
      notify();
    }
  };

  return (
    <div className="page">
      <div className="narrowPage py-6">
        <div className="contentContainer flex flex-col gap-4 max-w-[600px]">
          <div className="text-center text-accent text-2xl font-extrabold">
            Request Form
          </div>

          <div className="w-full border-b-2 border-accent rounded-full mb-2" />

          <div className="flex flex-col bg-base-300 rounded-lg p-4 gap-4">
            {/*  */}

            {/*  */}
            <div className="flex flex-col w-full">
              <div className={style1}>
                Company Name<span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={style2}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-col w-full">
                <div className={style1}>
                  First Name<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className={style2}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className={style1}>
                  Last Name<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className={style2}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-col w-full">
                <div className={style1}>
                  Phone number<span className="text-red-500">*</span>
                </div>
                <input
                  type="tel"
                  className={style2}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className={style1}>
                  E-Mail<span className="text-red-500">*</span>
                </div>
                <input
                  type="email"
                  className={style2}
                  value={email}
                  onChange={(e) => setEMail(e.target.value)}
                />
              </div>
            </div>

            <div className="bg-accent rounded-full w-full h-0.5 mt-2 bg-opacity-50" />

            <div className="flex flex-col">
              <div className={style1}>
                Expected Shipping Date<span className="text-red-500">*</span>
              </div>
              <input
                type="date"
                className={style2}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-2">
              <div className="flex flex-col">
                <div className={style1}>
                  City/Port of Origin<span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className={style2}
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <div className={style1}>
                  City/Port of Destination
                  <span className="text-red-500">*</span>
                </div>
                <input
                  type="text"
                  className={style2}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <div className={style1}>
                Cargo description<span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                className={style2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="bg-accent rounded-full w-full h-0.5 mt-2 bg-opacity-50" />

            <div className="flex flex-col">
              <div className={style1}>Comments & Questions</div>
              <input
                type="text"
                className={style2}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
              />
            </div>
          </div>
          <div
            onClick={() => sendRequest()}
            className="flex justify-center bg-accent px-4 py-2 rounded-lg text-base-100 cursor-pointer hover:bg-slate-500"
          >
            Send request
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
