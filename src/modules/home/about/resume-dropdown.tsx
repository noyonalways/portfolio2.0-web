"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ShinyButton from "@/components/ui/shiny-button";

interface IProps {}

const ResumeDropdown = ({}: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ShinyButton className="px-8 py-3">Resume</ShinyButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem>Download</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ResumeDropdown;
