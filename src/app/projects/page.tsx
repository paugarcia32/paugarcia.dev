"use client";

import Layout from "@/components/Layout";
import { Divider } from "@/components/Divider";
import { ProjectCard } from "@/components/cards";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    name: "IT Odyssey",
    description:
      "Personal Blog where I used to share my experience on the IT sector",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    image: "https://www.itodyssey.dev/images/embeddedLogo.jpg",
    url: "https://github.com/paugarcia32/IT-Odyssey",
  },
  {
    name: "TrafficFlow AI",
    description:
      "Developed during HackBCN hackathon, is a vehicle radar that detects traffic jams and analyzes real-time data using YOLOv10 model.",
    technologies: ["Python", "NextJS", "YOLOv10", "TeamWork"],
    image:
      "https://user-images.githubusercontent.com/70912643/206473946-974a60ab-f116-48b2-9cf0-f631fe7842eb.png",
    url: "https://github.com/TrafficFlow-AI",
  },
  {
    name: "IoT real-time sensoring",
    description:
      "Developed during HackUPC hackathon, is a real-time sensorization application",
    technologies: ["Python", "Flutter", "ESP32", "TeamWork"],
    image: "https://emariete.com/wp-content/uploads/2021/09/TTGO-Gadget.png",
    url: "https://github.com/CisHighLevel",
  },
  {
    name: "EETAC GO",
    description: "Movile app made in a team of 5 members, is a univesity work",
    technologies: ["Expressjs", "Flutter", "MongoDB", "TeamWork"],
    image: "eetacgo_image.png",
    url: "https://github.com/mariaubiergo2/EA-FRONTEND/",
  },
  {
    name: "Planet Survivor",
    description: "Movile game made in a team of 3 members, is a univesity work",
    technologies: ["Java", "Unity", "MariaDB", "TeamWork"],
    image:
      "https://user-images.githubusercontent.com/101259091/215481940-060871fa-15c2-44e5-9011-1f6471609ad9.png",
    url: "https://github.com/MikelArinaMarcos/dsaProjectG6",
  },
  {
    name: "CLI Password Cracker",
    description:
      "CLI based application that crack passwords based on a dictionary",
    technologies: ["Rust", "CLI"],
    image:
      "https://www.infosecinstitute.com/contentassets/056e05c7d3d9480cac5185cd56c75045/password-cracking-02222013.jpg",
    url: "https://github.com/paugarcia32/CLI-Password-Cracker",
  },
  {
    name: "CLI Password Generator",
    description: "CLI based application that generates secure passwords",
    technologies: ["Rust", "CLI"],
    image:
      "https://images.prismic.io/proton-me/f945b2b2-3bb4-44be-98e0-73af6ca82963_Image+1+-+mobile.png?auto=compress%2Cformat&fit=max",
    url: "https://github.com/paugarcia32/CLI-Password-Generator",
  },
  {
    name: "BME280 Sensor with 0.96 OLED Display and ESP32",
    description: "Self made temperature indicator",
    technologies: ["Arduino", "Cpp", "ESP32"],
    image:
      "https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/05/ESP32_OLED.png?w=873&quality=100&strip=all&ssl=1",
    url: "https://github.com/paugarcia32/ESP-32-with-BME280-and-0.96OLED",
  },
  {
    name: "MQTT pub/sub server with ESP32 and Raspberry Pi",
    description:
      "Home made pub/sub mechanism using MQTT protocol between ESP32 and Raspberry Pi",
    technologies: ["Raspberry Pi", "MQTT", "ESP32"],
    image:
      "https://i0.wp.com/borrowbits.com/wp-content/uploads/2020/04/broker-MQTT.png?fit=1488%2C794&ssl=1",
    url: "https://github.com/paugarcia32/ESP32-MQTT-pub-sub",
  },
];

export default function Projects() {
  return (
    <main className="container mx-auto p-4">
      <Layout title="Projects">
        {" "}
        <h1 className="font-bold text-xl mb-4">Projects</h1>
        <Divider />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-4">
          {" "}
          {/* Usar grid en lugar de flex */}
          {projects.map((project, index) => (
            <div key={index} className="mb-4 w-full">
              <ProjectCard
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                url={project.url}
              />
            </div>
          ))}
        </div>
      </Layout>
    </main>
  );
}
