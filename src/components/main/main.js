import './main.css';
import React from 'react';
import Experience from '../experience/experience';
import Qualifications from '../qualifications_skills/qualifications';

function Main({language}){
  return (
    <main className='Cv-main'>
      <Qualifications language={language} />
      <Experience language={language} />
    </main>
  );
}

export default Main;