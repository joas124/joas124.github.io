import type { Metadata } from "next";
import { Rubik_Mono_One, Red_Hat_Text } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { redirect } from "next/navigation";

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

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Joás Silva's Curriculum Vitae",
};

const defaultLocale = "en";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  let messages;
  try {
    messages = await import(`../../messages/${locale}.json`).then((mod) => mod.default);
  } catch (error) {
    redirect(`/${defaultLocale}`);
  }

  return (
    <html lang={locale} className={`${rubikMonoOne.variable} ${redHatText.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="preload" as="image" href="/images/enei.webp" />
        <link rel="preload" as="image" href="/images/ebec.webp" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
