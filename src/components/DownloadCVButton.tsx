import React from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";

const DownloadCVButton = () => {
  const CVFile = "/cv.pdf"; // Ruta del archivo PDF en la carpeta `public`

  const downloadCV = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "cv.pdf"); // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = () => {
    downloadCV(CVFile);
  };

  return (
    <Button className="flex items-center" onClick={handleDownloadClick}>
      <DownloadIcon />
      Download CV
    </Button>
  );
};

export default DownloadCVButton;
