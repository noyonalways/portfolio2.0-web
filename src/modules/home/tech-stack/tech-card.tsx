import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ISkill } from ".";

interface IProps extends ISkill {}

const TechCard = ({ name, icon }: IProps) => {
  return (
    <Card className="bg-transparent backdrop-blur">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="w-64">
        <Image
          width={300}
          height={300}
          className="mx-auto max-w-20"
          src={icon}
          alt={"skill-icon"}
        />
        {/* <p className="max-w-56">{description}</p> */}
      </CardContent>
    </Card>
  );
};

export default TechCard;
