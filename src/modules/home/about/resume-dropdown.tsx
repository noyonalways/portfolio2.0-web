"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ShinyButton from "@/components/ui/shiny-button";
import { FileUser } from "lucide-react";

interface IProps {}

const ResumeDropdown = ({}: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShinyButton className="px-8 py-3">
          <div className="flex items-center space-x-2">
            <FileUser />
            <span>Resume</span>
          </div>
        </ShinyButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <a
            className="w-full block"
            href={`https://drive.google.com/file/d/1S4oDpUJGjgftaStzTedI_H85tgGEtMMp/view?usp=sharing`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            className="w-full block"
            href={`https://drive.usercontent.google.com/u/0/uc?id=1S4oDpUJGjgftaStzTedI_H85tgGEtMMp&export=download`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResumeDropdown;
