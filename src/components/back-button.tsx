"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "./ui/button";

interface IProps extends ButtonProps {
  children: React.ReactNode;
}

const BackButton = ({ children, ...props }: IProps) => {
  const router = useRouter();
  return (
    <Button {...props} onClick={() => router.back()}>
      {children}
    </Button>
  );
};

export default BackButton;
