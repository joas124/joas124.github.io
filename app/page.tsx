import Header from '@/components/Header'
import Qualifications from '@/components/Qualifications';
import Accomplishments from '@/components/Accomplishments';
import './globals.css';
import { getTranslation } from '@/lib/translations';

export default async function Cv(){
  const locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en'; // Fallback to English if default locale not found on .env
  const translations = getTranslation(locale);
  return (
    <div className='Cv'>
      <Header translations={translations} locale={locale}/>
      <main className='Main'>
        <Qualifications translations={translations} />
        <Accomplishments translations={translations} />
      </main>
    </div> 
  );
}
