import "./globals.css";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "Errand Service",
  description: "Fast, reliable and transparent local errand and delivery service",
  icons: {
    icon: "/errand/favicon.gif",
    shortcut: "/errand/favicon.gif",
    apple: "/errand/favicon.gif"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/gif" href="/errand/favicon.gif" />
        <link rel="shortcut icon" type="image/gif" href="/errand/favicon.gif" />
      </head>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
