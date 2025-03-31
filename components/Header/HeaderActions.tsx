'use client'

import { useDarkMode } from '@/app/context/DarkModeContext';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { setCookie, getCookie } from 'cookies-next';
import styles from './header.module.css';
import Image from 'next/image';
import React from 'react';

export default function HeaderActions() {
  const t = useTranslations();
  const router = useRouter();
  const [locale, setLocale] = React.useState(() => {
    const lang = getCookie("LANGUAGE");
    return typeof lang === "string" ? lang : "en";
  });
  
  const {darkMode, toggleDarkMode} = useDarkMode();


  const handleLanguageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCookie("LANGUAGE", event.target.value);
    setLocale(event.target.value);
    router.refresh();
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.print} onClick={() => window.print()}>
        {t('print')}
        <Image src='./icons/printer.svg' alt='Printer Icon' />
      </button>
      <select className={styles.langSelect} name='language' value={locale} onChange={handleLanguageChange}>
        <option value='en'>English</option>
        <option value='pt'>Português</option>
      </select>
      <button className={styles.dmButton} onClick={toggleDarkMode}>
        <Image src={darkMode ? './icons/moon-stars-fill.svg' : './icons/brightness-high-fill.svg'} alt='Dark Mode Button' />
      </button>
    </div>
  );
}
