import "./globals.css";
import { Roboto, Roboto_Slab } from "next/font/google";

// Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

// Roboto Slab
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Be-Bold",
  description: "Be-Bold Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
