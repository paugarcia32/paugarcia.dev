// components/ContactCardBuilder.tsx

import React from 'react';
import { ContactCard } from './cards';
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const contactInfo = [
  {
    icon: <FiMail />,
    site: "Email",
    username: "paugarcia32@gmail.com",
    link: "mailto:paugarcia32@gmail.com"
  },
  {
    icon: <FiGithub />,
    site: "GitHub",
    username: "paugarcia32",
    link: "https://github.com/paugarcia32"
  },
  {
    icon: <FiLinkedin />,
    site: "LinkedIn",
    username: "Pau Garcia",
    link: "https://www.linkedin.com/in/pau-garcia-513817287/"
  }
];

const ContactCardBuilder: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 my-20">
      {contactInfo.map((info, index) => (
        <ContactCard key={index} icon={info.icon} site={info.site} username={info.username} link={info.link} />
      ))}
    </div>
  );
};

export default ContactCardBuilder;
