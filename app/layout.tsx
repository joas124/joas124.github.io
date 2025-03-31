import type { Metadata } from "next";
import { Rubik_Mono_One, Red_Hat_Text } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { DarkModeProvider } from "@/app/context/DarkModeContext";
import "./globals.css";
import { getLocale } from "next-intl/server";

const rubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik-mono"
});

const redHatText = Red_Hat_Text({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-text"
});

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Joás Silva's Curriculum Vitae",
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${rubikMonoOne.variable} ${redHatText.variable}`}>
      <head>
        <meta name="google-site-verification" content="1tb00A4qi_HgAfFeaxSJqPAhbebBR9G8GMyqyrN2XYA" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <NextIntlClientProvider>
          <DarkModeProvider>
            {children}
          </DarkModeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
