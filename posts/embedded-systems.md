---
title: "Introduction to Embedded Systems"
subtitle: "Small Introduction to Embedded Systems: Getting Started and First Steps"
date: "2024-4-28"
banner: "./images/embeddedLogo.jpg"
tags:
  - "embedded"
  - "software"
  - "hardware"
---

## Introduction

Nowadays, Embedded Systems are everywhere. This is why I've decided to start learning how they work, how are designed, and how to set up some projects. All this article explains my experience on homemade projects, and nothing professional.

## Setting up the enviroment

Setting up an enviroment capable to work with on Embedded Systems, require Hardware and Software, so we will see how to use usefull enviroment.

### Software

In terms of Software, there are quite a lot of different options. Some of the ones I like most, are the following:

#### Arduino IDE

The most simple and effective one is to use the [Arduino IDE](https://www.arduino.cc/en/software). This IDE provides us with all the features we need.

The Arduino IDE has built-in access to the [Arduino Library Repository](https://www.arduinolibraries.info/), which makes it easy to install whatever library we need for our projects.

Also, bring a Serial Monitor, which will allow us to see whatever output our board has, or even write some inputs we want to pass to the board. In terms to reading the correct output, is necessary to set up correctly the serial speed the Serial Monitor will use.

#### CLI configuration

For those users who like to use the terminal, Arduino has developed the [Arduino CLI](https://github.com/arduino/arduino-cli), which allows us to do most of the things the Arduino IDE does.

The Arduino team also has created the [Arduino Language Server](https://github.com/arduino/arduino-language-server) for NeoVim. This one can be downloaded using the [Mason](https://github.com/williamboman/mason.nvim) plugin, which will allow us to download a lot of other language servers and formatters.

Finally, we need some Serial Monitor, and probably the best option is to use [PuTTY](https://www.putty.org/). PuTTY, has a GUI interface, but we also can use the CLI, on this [link](https://the.earth.li/~sgtatham/putty/0.62/htmldoc/Chapter3.html) we can find some useful documentation.

### Hardware

If on the Software Envoroment there are lots of options, on Hardware there are a lot more.

#### Common material

On probably all the projects, you will need to use some of the following material:

- Cables
- Protoboards
- Sensors
- Microcontrollers

##### Microcontrollers

Out there, some interesting microcontrollers bring us lots of features at a really low price. Some of them are:

- ESP32
- Arduino
- STM32
- Raspberry Pi Zero

All of them will let us play and leard a lot thanks to all the capabilities they have. Depending on the type of project you will do, you would like to use one or another.

## Learning by projects

As any other code related area, be best way to learn is by coding and making your own projects. They are lots of projects related with IOT that you could use to leard Embedded Systems, using, for example LoRa modules, or some implementations of MQTT of CoAP.

There is also the option of making projects that do not require to buy any type of sensor. Learning how RTOS work would probably be really useful for future projects.

## Useful resources

Finally, there are some resources I think could be useful for someone that is starting:

- [r/Embedded](https://www.reddit.com/r/embedded/)
- [Random Nerd Tutorials](https://randomnerdtutorials.com/)
- [Embedded Systems Engineering Roadmap](https://github.com/m3y54m/Embedded-Engineering-Roadmap)
