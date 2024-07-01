import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/Divider";
import { InfoCard, InfoList, MeCard, PersonalCard } from "@/components/cards";
import { Heading2 } from "@/components/Headings";

export default function Home() {
  return (
    <main className="flex flex-col max-w-lg sm:max-w-xl p-4">
      <PersonalCard />
      <InfoCard />
      <div className="p-4 mb-12 w-full">
        <Heading2>Work</Heading2>
        <Divider />

        <p className="text-justify indent-4 hyphens-auto">
          I'm a Network Engineering graduate currently working as a
          cybersecurity intern. I'm always eager to learn new things and work on
          side projects. You can find all my projects on the&nbsp;
          <a href="/projects" className="text-secondary hover:underline">
            projects page&nbsp;
          </a>
          or on my&nbsp;
          <a
            href="https://github.com/paugarcia32"
            className="text-secondary hover:underline"
          >
            GitHub
          </a>
          . I feel comfortable building full-stack applications and also
          creating low-level programs using Arduinos and ESP32 microcontrollers.
          My passion for technology drives me to continually explore and
          innovate.
        </p>

        <div className="flex flex-col items-center mt-8">
          <a href="/projects">
            <Button className="flex items-center">
              My portfolio
              <ChevronRight className="m-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
      <div className="p-4 mb-12 w-full ">
        <Heading2>Bio</Heading2>
        <Divider />
        <div className="">
          <div className="">
            <span className="mr-4 font-bold">2002</span>
            Born in Barcelona, Spain
          </div>
          <div className="">
            <span className="mr-4 font-bold">2024</span>
            Complete a university degree in Network Engineering
          </div>
        </div>
      </div>
      <div className="p-4 mb-12 w-full ">
        <Heading2>On the web</Heading2>
        <Divider />
        <div className="">
          <InfoList />
        </div>
      </div>
    </main>
  );
}
