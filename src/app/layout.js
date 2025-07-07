import "./globals.css";
import { Roboto, Roboto_Slab } from "next/font/google";

// Roboto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

// Roboto Slab
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Be-Bold",
  description: "Be-Bold Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={` ${robotoSlab.className} ${roboto.className} font-light text-sm`}
      >
        {children}
      </body>
    </html>
  );
}
