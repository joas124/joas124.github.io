import Header from '@/components/Header';
import Qualifications from '@/components/Qualifications';
import Accomplishments from '@/components/Accomplishments';
import '../globals.css';
import { getTranslation, getLanguages } from '@/lib/translations';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return getLanguages().map(locale => ({ locale }));
}

export default async function Cv({ params }: { params: Promise<{ locale: string }> }){
  const { locale } = await params;

  if (locale == process.env.NEXT_PUBLIC_DEFAULT_LOCALE){
    redirect('/');
  }

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
