import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Components/Core/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Maker",
  description: "The Resume Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="p-2">
          {children}
        </div>
      </body>
    </html>
  );
}
