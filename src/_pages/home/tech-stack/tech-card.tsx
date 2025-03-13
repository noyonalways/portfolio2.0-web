import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import { ISkill } from ".";

interface IProps extends ISkill {}

const TechCard = ({ name, icon, description }: IProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-transparent backdrop-blur p-2 rounded-md text-center w-40 border-zinc-100 border dark:border-inherit">
            <div className="w-16 h-16 mx-auto">
              <Image
                width={64}
                height={64}
                className="mx-auto"
                src={icon}
                alt="skill-icon"
              />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className={`${poppins.className} max-w-xs space-y-2`}>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-base">{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechCard;
