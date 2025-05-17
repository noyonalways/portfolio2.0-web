"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ShinyButton from "@/components/ui/shiny-button";
import { about } from "@/constants/about";
import { Eye, FileDown, FileUser } from "lucide-react";

interface IProps {}

const ResumeDropdown = ({}: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShinyButton className="pl-4 pr-12">
          <div className="flex items-center space-x-2">
            <FileUser className="size-5" />
            <span>Resume</span>
          </div>
        </ShinyButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-36">
        <DropdownMenuItem>
          <a
            className="w-full flex items-center space-x-2"
            href={about.resume.view}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="w-4 h-4" />
            <span>View</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            className="w-full flex items-center space-x-2"
            href={about.resume.download}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileDown className="w-4 h-4" />
            <span>Download</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResumeDropdown;
