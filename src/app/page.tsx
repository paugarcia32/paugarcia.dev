import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/Divider";
import { InfoCard, InfoList, MeCard, PersonalCard } from "@/components/cards";
import { Heading2 } from "@/components/Headings";

export default function Home() {
  return (
    <main className="flex flex-col max-w-lg sm:max-w-xl p-4">
      <MeCard />
      <InfoCard />
      <div className="p-4 mb-12 w-full">
        <Heading2>Work</Heading2>
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
        <div className="flex flex-col items-center mt-8">
          <Button className="flex items-center">
            My portfolio
            <ChevronRight className="m-2 h-4 w-4" />
          </Button>
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
