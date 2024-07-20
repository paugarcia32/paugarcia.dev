"use client";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { SendIcon } from "./icons";
import { useToast } from "@/components/ui/use-toast"; // Asegúrate de que la ruta de importación sea correcta

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { toast } = useToast();

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
      toast({
        description: "Please enter a valid email address.",
      });
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
        toast({
          description: "Your message has been sent.",
        });
        // reset the form
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.subject.value = "";
        event.target.message.value = "";
      } else {
        console.log("Error sending message");
        setLoading(false);
        toast({
          description: "Error sending message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      toast({
        description: "Error sending message. Please try again.",
      });
    }
  }

  return (
    <div className="dark:bg-zinc-900 bg-zinc-300 py-5 px-10 mx-auto rounded-xl shadow-lg font-body max-w-lg w-full">
      <h2 className="font-bold text-lg py-4 font-title mx-auto">Contact Me!</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="py-2 w-full">
          <Input
            type="text"
            placeholder="Enter your name"
            id="name"
            className="w-full"
            required
          />
        </div>
        <div className="py-2 w-full">
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            className="w-full"
            required
          />
        </div>
        <div className="py-2 w-full">
          <Input
            type="text"
            placeholder="Enter an email title"
            id="subject"
            className="w-full"
            required
          />
        </div>
        <div className="py-2 w-full">
          <Textarea
            placeholder="Enter your message"
            className="w-full"
            name="message"
            required
          />
        </div>
        <Button
          variant="outline"
          type="submit"
          className="bg-accent hover:bg-primary text-background px-5 py-2 my-2 rounded font-body flex items-center"
          disabled={loading}
        >
          <SendIcon className="mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
