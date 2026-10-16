import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Devaj Group | One group , Two creative Houses",
  description: "Devaj Group — From the first frame of an idea to the final cut. Premier creative media & production powerhouse uniting two creative houses.",
  keywords: ["Devaj Group", "creative production", "media group", "film production", "creative house"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
