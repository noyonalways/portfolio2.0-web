import { ThemeProvider } from "@/providers/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
