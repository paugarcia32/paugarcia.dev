export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  scenario: string;
  problem: string;
  goals: string[];
  role: string;
}

export const projects: Project[] = [
  {
    name: "IT Odyssey",
    description:
      "Personal blog where I shared my experiences in the IT sector.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    image: "https://www.itodyssey.dev/images/embeddedLogo.jpg",
    url: "https://github.com/paugarcia32/IT-Odyssey",
    scenario:
      "This project was my first experience creating a web app. At that time, I thought it would be a good idea to showcase how I was improving and learning in the IT world.",
    problem:
      "The main challenge was handling Markdown files using the fs library and the server-side rendering (SSR) in NextJS. As it was my first time working with a NextJS app, using SSR felt unfamiliar.",
    goals: [
      "Learn how to use SSR in NextJS",
      "Deploy my first website on the web",
    ],
    role: "Since this was a personal project, my role was to design, code, and deploy the entire web app.",
  },

  {
    name: "TrafficFlow AI",
    description:
      "Developed during the HackBCN hackathon, this project is a vehicle radar that detects traffic jams and analyzes real-time data using the YOLOv10 model.",
    technologies: ["Python", "NextJS", "YOLOv10", "TeamWork"],
    image:
      "https://user-images.githubusercontent.com/70912643/206473946-974a60ab-f116-48b2-9cf0-f631fe7842eb.png",
    url: "https://www.hackbarna.com/en/projects/TrafficFlow_AI",
    scenario:
      "This project was developed during the HackBCN event, where we had only 30 hours to create an AI-based solution with a team of 3 members.",
    problem:
      "The main challenge was the limited time available. Since I had not worked on any AI projects before this hackathon, it was quite challenging to learn how to develop this type of project.",
    goals: [
      "Learn to handle the pressure of tight deadlines",
      "Learn how to integrate AI into a project",
    ],
    role: "My main role was to implement the YOLOv10 model to detect the number of cars in a predefined area. I was also responsible for creating the frontend client to showcase our work.",
  },

  {
    name: "IoT Real-Time Sensoring",
    description:
      "Developed during the HackUPC hackathon, this project is a real-time sensorization application.",
    technologies: ["Python", "Flutter", "ESP32", "TeamWork"],
    image: "https://emariete.com/wp-content/uploads/2021/09/TTGO-Gadget.png",
    url: "https://github.com/CisHighLevel",
    scenario:
      "This project was developed during the HackUPC event, where we had only one weekend to create a tech project with a team of 4 members.",
    problem:
      "The main issue was using the WiFi Arduino library, as it required some pins that we were using for the sensors. I spent too many hours resolving this problem.",
    goals: [
      "Develop a full-stack application",
      "Handle real-time data using Grafana dashboards",
    ],
    role: "My main role was to develop all the sensor functionality on the ESP32 microcontroller.",
  },

  {
    name: "EETAC GO",
    description:
      "Mobile app developed by a team of 5 members as part of university coursework.",
    technologies: ["Express.js", "Flutter", "MongoDB", "Teamwork"],
    image: "eetacgo_image.png",
    url: "https://github.com/mariaubiergo2/EA-FRONTEND/",
    scenario:
      "This was a full-semester university project where we created a full-stack application as a team of 5 members.",
    problem:
      "The main problem was my lack of prior experience with Flutter applications. I spent many hours dealing with syntax errors and learning how to use different widgets.",
    goals: [
      "Learn mobile full-stack development",
      "Learn to work with Agile methodologies",
      "Learn how to work with git flows",
    ],
    role: "My main role was developing the Flutter client.",
  },

  {
    name: "Planet Survivor",
    description:
      "Mobile game developed by a team of 3 members as part of university coursework.",
    technologies: ["Java", "Unity", "MariaDB", "Teamwork"],
    image:
      "https://user-images.githubusercontent.com/101259091/215481940-060871fa-15c2-44e5-9011-1f6471609ad9.png",
    url: "https://github.com/MikelArinaMarcos/dsaProjectG6",
    scenario:
      "This project was developed over a semester as a university project with a team of 3 members.",
    problem:
      "One of the biggest challenges was that it was my first time developing a REST API, and it was also my first Java project.",
    goals: [
      "Learn how to use Unity for game development",
      "Learn how to create Android applications",
    ],
    role: "My main role was as a backend developer.",
  },

  {
    name: "CLI Password Cracker",
    description:
      "A CLI-based application designed to crack passwords using a dictionary attack.",
    technologies: ["Rust", "CLI"],
    image:
      "https://www.infosecinstitute.com/contentassets/056e05c7d3d9480cac5185cd56c75045/password-cracking-02222013.jpg",
    url: "https://github.com/paugarcia32/CLI-Password-Cracker",
    scenario:
      "This project was my first foray into Rust programming. I aimed to create a command-line tool to understand dictionary-based password attacks.",
    problem:
      "As it was my initial experience with Rust, I faced challenges with syntax and performance optimization. Implementing efficient handling of large wordlists was a key hurdle.",
    goals: [
      "Learn Rust programming fundamentals",
      "Understand dictionary-based password attacks and their implementation",
    ],
    role: "I was responsible for developing the core password-cracking functionality and optimizing performance in Rust.",
  },

  {
    name: "CLI Password Generator",
    description:
      "A CLI-based application that generates secure, random passwords.",
    technologies: ["Rust", "CLI"],
    image:
      "https://images.prismic.io/proton-me/f945b2b2-3bb4-44be-98e0-73af6ca82963_Image+1+-+mobile.png?auto=compress%2Cformat&fit=max",
    url: "https://github.com/paugarcia32/CLI-Password-Generator",
    scenario:
      "This project was another early Rust project where I aimed to build a CLI tool for generating strong, random passwords to enhance user security.",
    problem:
      "The main challenge was ensuring the randomness and security of the generated passwords while learning to handle Rust's syntax and libraries.",
    goals: [
      "Develop a secure password generator using Rust",
      "Understand the implementation of randomness in programming",
    ],
    role: "I developed the password generation algorithm and designed the CLI interface to ensure usability and security.",
  },

  {
    name: "BME280 Sensor with 0.96 OLED Display and ESP32",
    description:
      "A custom temperature and humidity indicator using the BME280 sensor, displayed on a 0.96-inch OLED screen with an ESP32 microcontroller.",
    technologies: ["Arduino", "C++", "ESP32"],
    image:
      "https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2019/05/ESP32_OLED.png?w=873&quality=100&strip=all&ssl=1",
    url: "https://github.com/paugarcia32/ESP-32-with-BME280-and-0.96OLED",
    scenario:
      "This was my first project involving ESP32 microcontrollers. I aimed to create a real-time environmental monitoring system using a BME280 sensor and an OLED display.",
    problem:
      "The main challenge was integrating the BME280 sensor with the ESP32, especially since it was my first time working with these microcontrollers. Ensuring accurate readings and handling calibration were key difficulties.",
    goals: [
      "Learn to work with ESP32 microcontrollers",
      "Develop skills in integrating sensors with displays",
    ],
    role: "I handled the sensor integration with the ESP32, implemented data processing, and managed the display output for real-time monitoring.",
  },

  {
    name: "MQTT Pub/Sub Server with ESP32 and Raspberry Pi",
    description:
      "A custom MQTT-based publish/subscribe mechanism for communication between an ESP32 microcontroller and a Raspberry Pi.",
    technologies: ["Raspberry Pi", "MQTT", "ESP32"],
    image:
      "https://i0.wp.com/borrowbits.com/wp-content/uploads/2020/04/broker-MQTT.png?fit=1488%2C794&ssl=1",
    url: "https://github.com/paugarcia32/ESP32-MQTT-pub-sub",
    scenario:
      "This was my first experience with MQTT and IoT communication using ESP32 and Raspberry Pi. The project involved setting up an MQTT broker for reliable communication between devices.",
    problem:
      "The primary challenge was configuring the MQTT broker and ensuring reliable communication between the ESP32 and Raspberry Pi, especially as this was my first IoT project with these components.",
    goals: [
      "Understand MQTT protocol and its application in IoT",
      "Develop skills in setting up and managing IoT communication between devices",
    ],
    role: "I was responsible for configuring the MQTT broker, implementing the publish/subscribe logic, and ensuring smooth communication between the ESP32 and Raspberry Pi.",
  },
];
