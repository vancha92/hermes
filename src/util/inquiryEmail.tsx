type params = {
  companyName: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  origin: string;
  destination: string;
  description: string;
  comments: string;
};

export const inquiryEmail = (values: params) => {
  const emailAddress = "hermes_lines@hermes-lines.gr";
  const subject = "Inquiry request";
  const body = `Company Name: ${values.companyName}
First Name: ${values.firstName}
Last Name: ${values.lastName}
Phone: ${values.phone}
Email: ${values.email}
Date: ${values.date}
Origin: ${values.origin}
Destination: ${values.destination}
Description: ${values.description}
Comments: ${values.comments}
  `;

  window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};
