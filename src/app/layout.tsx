import { ThemeProvider } from "@/providers/theme-provider";
import { khula, michroma, poppins } from "@/utils/fonts";
import { ReactLenis } from "@/utils/lenis";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noyon Rahman | Portfolio",
  description: "Noyon Rahman - Portfolio Website for showcase works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${michroma.variable} ${poppins.variable} ${khula.variable}`}
    >
      <body>
        <ReactLenis
          options={{
            duration: 1.5,
          }}
          root
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
