import styles from './header.module.css';
import Image from 'next/image';
import HeaderActions from './HeaderActions';



export default function Header({ translations, locale }: { translations: Record<string, string>, locale: string }) {
  
  return (
    <header className='Header'>
      <HeaderActions translations={translations} locale={locale} />
      <div className={styles.namePhoto}>
        <Image className={styles.photo} src='/images/foto.jpg' alt='Headshot of Joás' width='200' height='200'/>

        <div className={styles.nameDiv}>
          <h1 className={styles.name}>Joás Silva</h1>
          <h2 className='jobTitle'>{translations['jobTitle']}</h2>
          <h2 className='description'>{translations['description']}</h2>
        </div>
      </div>
    </header>
  );
}