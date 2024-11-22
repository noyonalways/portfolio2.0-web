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
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem>Download</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResumeDropdown;
