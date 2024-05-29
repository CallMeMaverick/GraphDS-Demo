import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "GraphDS-Demo",
  description: "GraphDS-Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
