'use client'
import styles from './header.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function HeaderActions({ translations, locale }: { translations: Record<string, string>, locale: string }) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const handleLanguageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(event.target.value)
  };

  function toggleDarkMode(){
    if (typeof window !== "undefined") {
      setDarkMode((prev) => {
        const newValue = !prev;
        localStorage.setItem("dark_mode", newValue.toString());
        if (newValue) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
        return newValue;
      });
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeStorage = localStorage.getItem("dark_mode");
      if (darkModeStorage) {
        setDarkMode(darkModeStorage === 'true');
        if (darkModeStorage === 'true'){
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }
    }
  }, [darkMode])

  return (
    <div className={styles.buttons}>
      <button className={styles.print} onClick={() => window.print()}>
        {translations['print']}
        <Image src='./icons/printer.svg' width={30} height={30} alt='Printer Icon' />
      </button>
      <select className={styles.langSelect} name='language' value={locale} onChange={handleLanguageChange}>
        <option value='en'>English</option>
        <option value='pt'>Português</option>
      </select>
      <button className={styles.dmButton} onClick={toggleDarkMode}>
        <Image src={darkMode ? '/icons/moon-stars-fill.svg' : './icons/brightness-high-fill.svg'} width={16} height={16} alt='Dark Mode Button' />
      </button>
    </div>
  );
}
