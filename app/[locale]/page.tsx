import Header from '@/components/Header'
import Qualifications from '@/components/Qualifications';
import Accomplishments from '@/components/Accomplishments';
import styles from './page.module.css';
import { getTranslation } from '@/lib/translations';

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function Cv({ params }: { params: { locale: string } }){
  const { locale } = await params;
  const translations = getTranslation(locale);
  return (
    <div className='Cv'>
      <Header translations={translations} locale={locale}/>
      <main className={styles.Main}>
        <Qualifications translations={translations} />
        <Accomplishments translations={translations} />
      </main>
    </div> 
  );
}
