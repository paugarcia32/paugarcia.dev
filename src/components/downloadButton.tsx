"use client";

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "./icons";

interface DownloadButtonProps {
  slug: string;
}

const DownloadButton = (props: DownloadButtonProps) => {
  const PDFFile = `/docs/${props.slug}.pdf`;

  const downloadPDF = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${props.slug}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = () => {
    downloadPDF(PDFFile);
  };

  return (
    <Button
      className=" text-background  font-body"
      onClick={handleDownloadClick}
    >
      <DownloadIcon />
      Download PDF
    </Button>
  );
};

export default DownloadButton;

