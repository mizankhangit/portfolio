import "./../scss/main.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mizan Portfolio",
  description: "This is mizan portfolio app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
