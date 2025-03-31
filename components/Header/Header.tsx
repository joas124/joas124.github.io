import styles from './header.module.css';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import HeaderActions from './HeaderActions';



export default async function Header() {
  const t = await getTranslations();

  return (
    <header className='Header'>
      <HeaderActions />
      <div className={styles.namePhoto}>
        <Image className={styles.photo} src='/images/foto.jpg' alt='Headshot of Joás' width='200' height='200'/>

        <div className={styles.nameDiv}>
          <h1 className={styles.name}>Joás Silva</h1>
          <h2 className='jobTitle'>{t('jobTitle')}</h2>
          <h2 className='description'>{t('description')}</h2>
        </div>
      </div>
    </header>
  );
}