import { NavigationDock } from "@/shared/navigation-dock";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className="dark:bg-[url('/noise.webp')] bg-repeat bg-contain">
      <NavigationDock />
      {children}
    </div>
  );
};

export default MainLayout;
