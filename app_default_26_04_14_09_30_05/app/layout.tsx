import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator Engine | AI-Powered Growth for Creators",
  description: "The all-in-one platform for elite creators to repurpose, organize, and monetize their content automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "mesh-gradient antialiased")}>
        {children}
      </body>
    </html>
  );
}
