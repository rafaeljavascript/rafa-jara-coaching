import { Nav } from "@/components/nav";
import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Rafa Jara Coaching",
  description:
    "Executive, career, and psychedelic integration coaching for startup leaders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="mytheme">
      <body>
        <main
          id="HomeRoot"
          className="overflow-auto bg-base-100 flex flex-col justify-between w-full items-end mb-40"
        >
          <Nav />
          <div className="w-full h-full sm:px-20 pt-4 sm:pt-24">{children}</div>
        </main>
      </body>
    </html>
  );
}
