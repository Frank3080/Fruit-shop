import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { transpilePackages } from "@/next.config";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fruit Shop",
  description: "HyperInflated fruit store - best prices ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-3 md:p-5">
          <Link href={"https://www.instagram.com/dlazepam/"} target="_blank">
            <i className="fa-brands fa-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-2xl sm:text-3xl md:text-4xl" />
          </Link>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
