/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import ContactForm from '@/components/contact-form'
import { LinkedInIcon, GithubIcon, MailIcon } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Contact() {

  const contactInfo = [
    {
      icon: <FiMail />,
      site: "Email",
      username: "paugarcia32@gmail.com",
    },
    {
      icon: <FiGithub />,
      site: "GitHub",
      username: "paugarcia32",
    },
    {
      icon: <FiLinkedin />,
      site: "LinkedIn",
      username: "Pau Garcia",
    },
  ];

  return (
    <div className="w-screen max-w-4xl m-0 mx-auto leading-relaxed p-2.5 md:p-10 lg:p-20">
      <h1 className="text-4xl font-bold mb-5 font-title">Get In Touch</h1>
      <div className="w-20 text-left h-0.5 bg-accent mb-5"></div>
      <div className="flex flex-col md:flex-row gap-5 mb-5 w-full">
        <div className="md:mt-4 mx-4">
          <p className="font-body text-base mb-2">
            Welcome to my Contact Me page!
          </p>
          <p className="font-body text-base mb-2">
            Whether you have an exciting project in mind, are interested in collaboration, or simply want to connect, I'm here to listen and help.
          </p>
          <p className="font-body text-base mb-2">
            Feel free to drop me a message and let's start a conversation. Your ideas, questions, and thoughts are valuable to me, and I'm eager to hear from you.
          </p>
          <p className="font-body text-base mb-2">
            Together, we can create something amazing. Looking forward to the opportunity to work with you and explore new possibilities.
          </p>
          <p className="font-body text-base mb-2"></p>
          <p className="font-body text-base mb-2"></p>
        </div>
        <ContactForm/>
      </div>

      <div className="flex flex-col md:flex-row gap-5 my-20 ">
        <Card
          className="border-none bg-background/60 dark:bg-default-100/50 mx-20 md:mx-5"

        >
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="text-primary mx-2">
                <MailIcon/>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-0 ml-1">
                  <h1 className="text-large font-medium mt-1">Email</h1>
                  <p className="text-small text-foreground/80 mb-1">paugarcia32@gmail.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <a href="https://www.linkedin.com/in/pau-garcia-513817287/">
          <Card

          className="border-none bg-background/60 dark:bg-default-100/50 mx-20 md:mx-1"

        >
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="text-primary mx-2">
                <LinkedInIcon/>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-0 ml-1">
                  <h1 className="text-large font-medium mt-1">LinkedIn</h1>
                  <p className="text-small text-foreground/80 mb-1">Pau Garcia</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </a>

        <a href="https://github.com/paugarcia32">
          <Card

          className="border-none bg-background/60 dark:bg-default-100/50 mx-20 md:mx-5"

        >
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="text-primary mx-2">
                <GithubIcon/>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-0 ml-1">
                  <h1 className="text-large font-medium mt-1">Github</h1>
                  <p className="text-small text-foreground/80 mb-1">paugarcia32</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </a>
      </div>
    </div>
  );
}


