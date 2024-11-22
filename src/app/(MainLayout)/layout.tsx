import { NavigationDock } from "@/shared/navigation-dock";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className="relative">
      <NavigationDock />
      {children}
    </div>
  );
};

export default MainLayout;
