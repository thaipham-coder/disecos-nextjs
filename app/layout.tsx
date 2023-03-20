import './globals.css';
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import { Poppins } from "next/font/google";
import SiteHeader from "./SiteHeader";
import Footer from "@/shared/Footer/Footer";
import CommonClient from './CommonClient';

export const metadata = {
  title: 'Disecos Next App',
  description: 'Shop & eCommerce NextJs Template',
}

const poppins = Poppins({
  subsets: ["latin"],
  display: "optional",
  weight: ["100", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        {children}
        <CommonClient />
        <Footer />
      </body>
    </html>
  )
}
