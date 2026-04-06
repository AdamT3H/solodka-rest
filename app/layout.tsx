import type { Metadata } from "next";
import { Fira_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fira.variable} ${playfair.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}