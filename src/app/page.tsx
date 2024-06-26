import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Divider } from "@/components/Divider";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Card className="mx-auto w-full items-center my-4">
        <CardContent className="bg-secondary flex justify-center items-center p-4">
          <p className="text-center">
            Hi! I'm a network engineer graduate from Barcelona!
          </p>
        </CardContent>
      </Card>

      <Card className="flex items-center justify-center p-4 border-none">
        <CardHeader>
          <CardTitle>Pau Garcia</CardTitle>
          <CardDescription>
            Cybersecurity, IoT and Developer enthusiast
          </CardDescription>
        </CardHeader>
        <CardContent className="py-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://avatars.githubusercontent.com/u/37461446?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      <div className="p-4 ">
        <h2 className="text-2xl font-bold mt-7.5 mb-2.5 font-title">Work</h2>
        <Divider />
        <p className="text-justify indent-4 hyphens-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          ligula tincidunt, sollicitudin lacus quis, fermentum ex. Praesent
          faucibus imperdiet magna. Duis a mi sed nibh cursus pulvinar nec sit
          amet risus. Nam magna nisl, euismod eu pretium vel, mattis vel massa.
          Donec non risus euismod, pretium massa eu, tempus tortor. Vestibulum
          finibus nulla non lectus euismod ullamcorper. Donec ipsum diam,
          accumsan vel arcu ut, auctor volutpat mauris. Morbi eu diam velit.
          Morbi condimentum at ligula quis posuere. Proin faucibus pretium
          turpis eget condimentum. Pellentesque elit ante, dictum vitae
          hendrerit sed, ornare ac tortor. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Maecenas sed
          imperdiet arcu. Cras rutrum nisi arcu, tempor imperdiet leo bibendum
          rhoncus. Cras vestibulum vestibulum nisi, nec egestas justo molestie
          id. Praesent et commodo nunc.
        </p>
        <div className="flex flex-col items-center">
          <Button className="flex items-center">
            My portfolio
            <ChevronRight className="m-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mt-7.5 mb-2.5 font-title">Bio</h2>
        <Divider />
      </div>
    </main>
  );
}
