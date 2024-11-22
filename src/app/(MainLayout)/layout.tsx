import { NavigationDock } from "@/shared/navigation-dock";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <main className="dark:bg-[url('/noise.webp')] bg-repeat bg-contain">
      <NavigationDock />
      {children}
    </main>
  );
};

export default MainLayout;
