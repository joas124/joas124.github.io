import './main.css';
import Accomplishments from '../accomplishments/accomplishments';
import Qualifications from '../qualifications_skills/qualifications';

function Main({darkMode}: {darkMode: boolean}){
  return (
    <main className='Main'>
      <Qualifications darkMode={darkMode} />
      <Accomplishments />
    </main>
  );
}

export default Main;