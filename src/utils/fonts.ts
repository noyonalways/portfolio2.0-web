import { Inter, Khula, Michroma, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const michroma = Michroma({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const khula = Khula({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});
