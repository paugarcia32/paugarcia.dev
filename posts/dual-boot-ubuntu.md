---
title: "How to dual-boot Ubuntu and Windows 11"
subtitle: "Achieving Dual-Boot Harmony: Windows 11 and Ubuntu Installation Guide"
date: "2020-12-27"
banner: "./images/dual-boot-ubuntu.jpg"
tags:
  - "Linux"
  - "Windows"
---

Nowadays, is common to see people who need a dual-boot system with Windows and some other Linux distribution, because of all the good things both operating systems offer to the customer. So for this reason, here I post all the steps I've used to set up a dual-boot system on any PC that already uses a Windows OS.

## Prerequisites

Before starting this tutorial, there are some prerequisites we should have into an account:

- A preinstalled Windows 11 operating system on our PC
- A BIOS in UEFI mode
- An empty 8Gb USB drive
- Internet connection

### Check the UEFI mode

To check if our PC has the correct UEFi mode, we can search for "system information" on our Windows machine. Once there we can see what kind of BIOS Mode we have.

![](/images/uefi-mode.png)

## Environment Set-Up

The first thing we should do is to reserve the necessary space we want on our disk. So for this, we need to go to the disk management and create a new partition with the space we want for our new Linux distribution.

![](/images/dual_boot_disk_layout.gif)

Once we have set up the space we want on the new partition, we need to:

- Instal the .iso from the [Ubuntu website](https://ubuntu.com/download/desktop)
- Install [Rufus](https://rufus.ie/es/)

Then, using the Rufus software, we need to set up the pen drive we are going to use (at least 8 GB of memory) and install the .iso file of our Linux distribution.

## Installing the OS

Now that we have the USB drive set up with the OS, we have to restart the PC and open the BIOS (press F12, F10, Delete, and Supr keys for opening). Once there, we have to set up the USB drive as the first boot option on the next boot.

### Ubuntu Installer

When we boot on the USB drive, we will be on the Ubuntu Installer, From now on, it is very fast forward, so every user can choose the configuration that he wants until the "Installation Type" menu, where we should check the "Something else" option.

There select the free space, create a new partition in the "+" button, assign 2048 MB of space as a primary type partition, and use it as a swap partition.

The rest of the space creates a partition as a primary partition with the format "_EXT4_" and mount point in "/"

Once all this is done, we can continue with the installation.

## Shared folder between systems

As we have created a dual-boot system on our PC, it's probably that someone could want to have a shared folder between both operating systems. Creating this shared folder is quite easy to set up.

To achieve this, follow these steps:

- Create a new NTFS partition (in Ubuntu you can install GParted)
- Mount the new partition
- Create a folder in the root where you want to share files

To mount the new partition, you could do this command:

```bash
sudo mount -t ntfs o rw /dev/*partition* /forder/
```

Also, if you find some permission problems, you can execute this command on the partition folder:

```bash
sudo chmod -R 777 .
```

## Conclusions

In this tutorial, we have seen how to set up a dual-boot system with Windows and Ubuntu. Also, it has been explained how to set up a shared folder between both operating systems.

I hope this tutorial has been useful!
