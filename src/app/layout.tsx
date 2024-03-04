import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import logo from "../app/favicon.ico";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estudio Salvadori",
  description: "Estudio de abogados",
  icons: "../app/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="custom-scroll">
        <div className={oswald.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
