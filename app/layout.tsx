import "./../scss/main.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mizanur Rahman | Frontend-Focused Fullstack Developer",
  description:
    "Portfolio of Mizanur Rahman — Frontend-focused Fullstack Developer with 6+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, GraphQL, Node.js, and Express.js.",
  keywords: [
    "Mizanur Rahman",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Fullstack Developer",
    "Portfolio",
    "Bangladesh",
  ],
  openGraph: {
    title: "Mizanur Rahman | Frontend Developer Portfolio",
    description:
      "6+ years building scalable web applications with React.js, Next.js, TypeScript & Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
