import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/_index";
import ClientSideProviderTest from "@/components/ClientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 HomePage",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSideProviderTest>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientSideProviderTest>
      </body>
    </html>
  );
}
