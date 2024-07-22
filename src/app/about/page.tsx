"use client";

import React from "react";
import { Divider } from "@/components/Divider";
import { Heading1, Heading2 } from "@/components/Headings";
import { DotfileCard } from "@/components/cards";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import DownloadCVButton from "@/components/DownloadCVButton";
import Layout from "@/components/Layout";

const dotfiles = [
  {
    name: "WezTerm Config",
    lightImage: "/images/wezlight.png",
    darkImage: "/images/wezdark.png",
    url: "https://github.com/paugarcia32/dotfiles/wezterm",
  },
  {
    name: "Neovim Config",
    lightImage: "/images/introNvimlight.png",
    darkImage: "/images/introNvimdark.png",
    url: "https://github.com/paugarcia32/dotfiles/neovim",
  },
  {
    name: "VSCode Config",
    lightImage: "/images/vslight.png",
    darkImage: "/images/vsdark.png",
    url: "https://github.com/paugarcia32/.dotfiles/blob/master/settings.json",
  },
  {
    name: "Firefox Config",
    lightImage: "/images/firefoxlight.png",
    darkImage: "/images/firefoxdark.png",
    url: "https://github.com/paugarcia32/dotfiles/firefox",
  },
];

const AboutPage: React.FC = () => {
  return (
    <main className="max-w-lg sm:max-w-xl mx-auto p-4">
      <Layout title="About">
        <div className="mb-8">
          <Heading2>Dotfiles</Heading2>
          <Divider />
          <p className="indent-4 text-justify mb-4">
            As a tech enthusiast, I spend hours and hours at my computer every
            day. That&#39;s why I&#39;m continuously improving my workspace in
            order to boost my productivity and feel comfortable on it. Feel free
            to pick and adapt whatever you think it would be useful for your
            environments!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dotfiles.map((dotfile, index) => (
              <DotfileCard
                key={index}
                name={dotfile.name}
                lightImage={dotfile.lightImage}
                darkImage={dotfile.darkImage}
                url={dotfile.url}
              />
            ))}
          </div>
          {/* Contenedor del botón */}
          <div className="flex justify-center mt-8">
            {" "}
            {/* Agregamos margen top (mt-8) para separar del contenido anterior */}
            <Button className="flex items-center">
              ~/dotlifes
              <ChevronRight className="ml-2 h-4 w-4" />{" "}
              {/* Ajustamos el margen a la izquierda (ml-2) del icono */}
            </Button>
          </div>
        </div>

        <div className=" mb-12 w-full ">
          <Heading2>Events</Heading2>
          <Divider />
          <div className="">
            <div className="">
              <span className="mr-4 font-bold">May, 2024</span>
              HackUPC
            </div>
            <div className="">
              <span className="mr-4 font-bold">Jun, 2024 </span>
              HackBCN
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Heading2>CV</Heading2>
          <Divider />
          <div className="flex justify-center">
            <DownloadCVButton />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default AboutPage;
