import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  message
}) => (
  <div>
    <p><b>Name:</b> <br />{name}</p>
    <p><b>subject:</b> <br />{subject}</p>
    <p><b>Email:</b> <br />{email}</p>
    <p><b>Message:</b> <br />{message}</p>
  </div>
);

export default EmailTemplate;