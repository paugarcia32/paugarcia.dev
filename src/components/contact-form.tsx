"use client";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { SendIcon } from "./icons";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      setLoading(false);
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setLoading(false);
        // reset the form
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.subject.value = "";
        event.target.message.value = "";
      } else {
        console.log("Error sending message");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  }

  return (
    <div className="dark:bg-zinc-900 bg-zinc-300 py-5 px-10 mx-10 rounded-xl shadow-lg font-body w-lg">
      <h2 className="font-bold text-lg py-4 font-title">Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <div className="py-2 w-full">
          <Input
            type="text"
            placeholder="Enter your name"
            id="name"
            className="min-w-max"
          />
        </div>
        <div className="py-2">
          <Input
            type="enail"
            placeholder="Enter your email"
            id="email"
            className="min-w-max"
          />
        </div>
        <div className="py-2">
          <Input
            type="text"
            placeholder="Enter a email title"
            id="subject"
            className="min-w-max"
          />
        </div>
        <div className="py-2 max-h-full">
          <Textarea
            placeholder="Enter your message"
            className="min-w-max"
            name="message"
          />
        </div>
        <Button
          type="submit"
          className="bg-accent hover:bg-primary text-background px-5 py-2 my-2 rounded font-body min-w-max"
        >
          <SendIcon />
          Send Message
        </Button>
      </form>
    </div>
  );
}

