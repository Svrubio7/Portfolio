import type { Metadata } from "next";
import {
  Playfair_Display,
  Old_Standard_TT,
  Crimson_Pro,
  JetBrains_Mono,
  UnifrakturMaguntia,
  Inter,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const oldStandard = Old_Standard_TT({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const crimson = Crimson_Pro({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const blackletter = UnifrakturMaguntia({
  variable: "--font-blackletter",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sergio Verdugo Portfolio",
  description: "Sergio Verdugo Portfolio Site",
  openGraph: {
    title: "Sergio Verdugo Portfolio",
    description: "Sergio Verdugo Portfolio Site",
    type: "website",
    siteName: "Sergio Verdugo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Verdugo Portfolio",
    description: "Sergio Verdugo Portfolio Site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${oldStandard.variable} ${crimson.variable} ${jetbrains.variable} ${blackletter.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink font-body">{children}</body>
    </html>
  );
}
