'use client'

import Image from 'next/image';
import styles from './qualifications.module.css';
import { useDarkMode } from '@/app/context/DarkModeContext';

export default function GithubIcon() {
  const {darkMode} = useDarkMode();

  return (
      <Image src={darkMode ? '/icons/github-mark-white.svg' : '/icons/github-mark.svg'} width="30" height="30" className={styles.icon} alt='GitHub Logo' />
  )
}