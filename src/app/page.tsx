"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/Divider";
import { InfoCard, InfoList, PersonalCard } from "@/components/cards";
import { Heading2 } from "@/components/Headings";
import Section from "@/components/Section";
import Layout from "@/components/Layout";
import Link from "next/link";
import { bioEvents } from "@/data/bioData";

export default function Home() {
  return (
    <main className="flex flex-col max-w-lg sm:max-w-xl p-4">
      <Layout title="Home">
        <PersonalCard />
        <InfoCard />

        <Section delay={0.1}>
          <div className="p-4 mb-12 w-full">
            <Heading2>Work</Heading2>
            <Divider />
            <p className="text-justify indent-4 hyphens-auto">
              I&#39;m a Network Engineering graduate currently working as a
              cybersecurity intern. I&#39;m always eager to learn new things and
              work on side projects. You can find all my projects on the{" "}
              <Link
                href="/projects"
                className="text-accent hover:text-primary hover:underline"
              >
                projects page{" "}
              </Link>
              or on my{" "}
              <Link
                href="https://github.com/paugarcia32"
                className="text-accent hover:text-primary hover:underline"
              >
                GitHub
              </Link>
              . I feel comfortable building full-stack applications and also
              creating low-level programs using Arduinos and ESP32
              microcontrollers. My passion for technology drives me to
              continually explore and innovate.
            </p>
            <div className="flex flex-col items-center mt-8">
              <Link href="/projects">
                <Button className="flex items-center">
                  My portfolio
                  <ChevronRight className="m-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Section>

        <Section delay={0.2}>
          <div className="p-4 mb-12 w-full ">
            <Heading2>Bio</Heading2>
            <Divider />
            <div className="">
              {bioEvents.map((event, index) => (
                <div key={index} className="">
                  <span className="mr-4 font-bold">{event.year}</span>
                  {event.description}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section delay={0.3}>
          <div className="p-4 mb-12 w-full ">
            <Heading2>On the web</Heading2>
            <Divider />
            <div className="">
              <InfoList />
            </div>
          </div>
        </Section>
      </Layout>
    </main>
  );
}
