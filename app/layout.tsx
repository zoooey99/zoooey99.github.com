import type { Metadata } from "next";
import { Inter, Lato, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ['latin'] });
const sourceSans = Source_Sans_3({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Zoey Lee",
  description: "just a girl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
