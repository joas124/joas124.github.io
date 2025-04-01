import Header from '@/components/Header'
import Qualifications from '@/components/Qualifications';
import Accomplishments from '@/components/Accomplishments';
import styles from './page.module.css';

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

function Cv (){
  return (
    <div className='Cv'>
      <Header/>
      <main className={styles.Main}>
        <Qualifications />
        <Accomplishments />
      </main>
    </div> 
  );
}
export default Cv
