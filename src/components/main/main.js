import './main.css';
import React from 'react';
import Experience from '../experience/experience';
import Qualifications from '../qualifications_skills/qualifications';

function Main({language, darkMode}){
  return (
    <main className='Main'>
      <Qualifications language={language} darkMode={darkMode} />
      <Experience language={language} />
    </main>
  );
}

export default Main;