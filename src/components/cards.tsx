/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LinkedInIcon, GithubIcon } from "./icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Heading3, Heading4 } from "./Headings";
import Image from "next/image";

export const InfoCard: React.FC = () => {
  return (
    <Card className="w-full mx-auto my-4 border-none shadow-none bg-accent">
      <CardContent className="flex justify-center items-center p-4">
        <p className="text-center">
          Hi! I'm a network engineer graduate from Barcelona!
        </p>
      </CardContent>
    </Card>
  );
};

export const MeCard: React.FC = () => {
  return (
    <Card className="flex items-center justify-center p-4 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl font-bold  ">Pau Garcia</CardTitle>
        <CardDescription className="text-sm">
          Developer, Cybersecurity & IoT enthusiast
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://avatars.githubusercontent.com/u/37461446?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
};

export const PersonalCard: React.FC = () => {
  return (
    <Card className="flex items-center justify-center p-4 border-none shadow-none bg-background">
      <CardHeader>
        <CardTitle className="text-4xl font-bold bg-gradient-to-r linearPrimaryAccent">
          Pau Garcia
        </CardTitle>
        <CardDescription className="text-md">
          Developer, Cybersecurity & IoT enthusiast
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <Avatar className="w-48 h-48">
          <AvatarImage src="profile.jpeg" />
        </Avatar>
      </CardContent>
    </Card>
  );
};

export const LinkedInCard: React.FC = () => {
  return (
    <Link
      href="https://www.linkedin.com/in/paugarcia32"
      target="_blank"
      rel="noopener noreferrer"
      className=""
    >
      <Card className="flex items-center justify-between p-4 border-none max-w-sm hover:bg-secondary">
        <CardHeader className="flex items-center space-x-2">
          <LinkedInIcon />
        </CardHeader>
        <CardContent className="py-4">
          <CardDescription className="text-gray-600">
            paugarcia32
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export const GithubCard: React.FC = () => {
  return (
    <Card className=" p-4 border-none rounded-lg">
      <CardHeader className="flex items-center space-x-2">
        <GithubIcon />
        <CardTitle className="text-lg font-semibold">GitHub</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">
          Explora mis proyectos en GitHub
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href="https://github.com/paugarcia32"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          paugarcia32
        </Link>
      </CardFooter>
    </Card>
  );
};

export const InfoList: React.FC = () => {
  return (
    <ul className="list-none">
      <li className="">
        <Link
          href="https://www.linkedin.com/in/paugarcia32"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-secondary hover:text-secondary"
        >
          <Button className="bg-background text-current">
            <Linkedin className="mr-2 h-4 w-4" /> @paugarcia32
          </Button>
        </Link>
      </li>
      <li className="">
        <Link
          href="https://github.com/paugarcia32"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-secondary hover:text-secondary"
        >
          <Button className="bg-background text-current">
            <Github className="mr-2 h-4 w-4" /> @paugarcia32
          </Button>
        </Link>
      </li>
    </ul>
  );
};

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  url: string; // Asegúrate de que url esté aquí
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  technologies,
  image,
}) => {
  return (
    <Link href={`/projects/${encodeURIComponent(name)}`} passHref>
      <div className="block">
        <Card className="dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-zinc-800 max-h-[120]">
          <Image
            src={image}
            alt={name}
            width={500}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <CardHeader className="flex flex-col items-start space-y-1 mt-2">
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <CardDescription className="text-gray-600">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-2">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index}>{tech}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export const PostCard = (props: PostMetadata) => {
  return (
    <Card className="dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-zinc-800 max-h-[120] border-none shadow-none mx-1">
      <Image
        src={`/${props.banner}`}
        alt={props.title}
        width={500}
        height={200}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex justify-start items-center gap-2 flex-wrap mb-2">
          {props.tags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-accent border border-accent-400 dark:bg-accent-950 dark:border-accent-600"
            >
              <p className="font-semibold">{tag}</p>
            </Badge>
          ))}
        </div>
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-accent hover:underline font-title text-lg mb-2">
            {props.title}
          </h2>
        </Link>

        <p className="text-slate-500 dark:text-slate-400 mb-2">
          {props.subtitle}
        </p>
        <p className="text-default-500">{props.date}</p>
      </div>
    </Card>
  );
};
interface ContactCardProps {
  icon: React.ReactNode;
  site: string;
  username: string;
  link?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  site,
  username,
  link,
}) => {
  const CardContentElement = (
    <Card className="dark:bg-zinc-900 bg-zinc-300 hover:bg-zinc-400 dark:hover:bg-accent mx-8  md:mx-2 mb-4 hover:bg-accent">
      <div className="flex items-center my-4">
        <div className="flex items-center  w-full">
          <div className="text-primary ml-8 mr-4 flex-shrink-0">{icon}</div>
          <div className="flex flex-col ml-2">
            <h1 className="text-large font-medium">{site}</h1>
            <p className="text-small text-foreground/80">{username}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return link ? (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      {CardContentElement}
    </Link>
  ) : (
    CardContentElement
  );
};

interface DotfileCardProps {
  name: string;
  lightImage: string;
  darkImage: string;
  url: string;
}

export const DotfileCard: React.FC<DotfileCardProps> = ({
  name,
  lightImage,
  darkImage,
  url,
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex flex-col items-center p-4">
        <Card className="rounded-lg hover:bg-secondary mb-2">
          <ResponsiveImage
            lightSrc={lightImage}
            darkSrc={darkImage}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </Card>
        <Heading4>{name}</Heading4>
      </div>
    </Link>
  );
};
