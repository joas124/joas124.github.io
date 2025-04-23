import { Rubik_Mono_One, Red_Hat_Text } from "next/font/google";
import { redirect } from 'next/navigation'
import { Metadata } from 'next';
import "../globals.css";

const rubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik-mono",
});

const redHatText = Red_Hat_Text({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-text",
});

const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Joás Silva's Curriculum Vitae",
};

const SUPPORTED_LOCALES = ['en', 'pt'];
const DEFAULT_LOCALE = 'en';

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = await params;

   if (!SUPPORTED_LOCALES.includes(locale)) {
    redirect(`/${DEFAULT_LOCALE}`);
  }

  return (
    <html lang={locale} className={`${rubikMonoOne.variable} ${redHatText.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preload" as="image" href="/images/enei.webp" />
        <link rel="preload" as="image" href="/images/ebec.webp" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}