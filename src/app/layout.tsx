import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wx@localhost ~ $",
  description: "Welcome to my website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background antialiased dark", font.className)}>{children}</body>
    </html>
  );
}
