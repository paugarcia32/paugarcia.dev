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

export const InfoCard: React.FC = () => {
  return (
    <Card className="w-full mx-auto my-4 border-none shadow-none">
      <CardContent className="bg-secondary flex justify-center items-center p-4">
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
        <CardTitle className="text-4xl font-bold">Pau Garcia</CardTitle>
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
    <Card className="flex items-center justify-center p-4 border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Pau Garcia</CardTitle>
        <CardDescription className="text-md">
          Developer, Cybersecurity & IoT enthusiast
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <Avatar className="w-48 h-48">
          <AvatarImage src="https://avatars.githubusercontent.com/u/37461446?v=4" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
};

export const LinkedInCard: React.FC = () => {
  return (
    <a
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
    </a>
  );
};

export const GithubCard: React.FC = () => {
  return (
    <Card className="border-none rounded-lg p-4 hover:bg-secondary">
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
        <a
          href="https://github.com/paugarcia32"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          paugarcia32
        </a>
      </CardFooter>
    </Card>
  );
};

export const InfoList: React.FC = () => {
  return (
    <ul className="list-none">
      <li className="">
        <a
          href="https://www.linkedin.com/in/paugarcia32"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-secondary hover:text-secondary"
        >
          <Button className="bg-background text-current">
            <Linkedin className="mr-2 h-4 w-4" /> @paugarcia32
          </Button>
        </a>
      </li>
      <li className="">
        <a
          href="https://github.com/paugarcia32"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-secondary hover:text-secondary"
        >
          <Button className="bg-background text-current">
            <Github className="mr-2 h-4 w-4" /> @paugarcia32
          </Button>
        </a>
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
  url,
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="rounded-lg hover:bg-secondary  max-h-[120]">
        <img
          src={image}
          alt={name}
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
    </a>
  );
};

export const PostCard = (props: PostMetadata) => {
  return (
    <Card className="bg-secondary-50 dark:bg-secondary mx-10 md:mx-0 border-none shadow-none">
      <CardHeader>
        <img
          src={`/${props.banner}`}
          alt={props.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-0">
            <div className="flex justify-start items-center gap-2 flex-wrap">
              {props.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-accent-50 border border-accent-400 dark:bg-accent-950 dark:border-accent-600"
                >
                  <p className="font-semibold">{tag}</p>
                </Badge>
              ))}
            </div>
            <Link href={`/posts/${props.slug}`}>
              <h1 className="text-accent hover:underline font-title mb-2">
                {props.title}
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-1">
          <p className="text-slate-400">{props.subtitle}</p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-default-500">{props.date}</p>
      </CardFooter>
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
    <Card className="border-none bg-background/60 dark:bg-default-100/50 mx-20 md:mx-5">
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="text-primary mx-2">{icon}</div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-0 ml-1">
              <h1 className="text-large font-medium mt-1">{site}</h1>
              <p className="text-small text-foreground/80 mb-1">{username}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {CardContentElement}
    </a>
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
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
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
    </a>
  );
};
