import './cv.css';
import React, {useState} from 'react';
import Header from './components/header/header';
import Main from './components/main/main';

function Cv (){
  const [language, setLanguage] = useState('english');
  const [darkMode, setDarkMode] = useState('false');
  return (
    <div className='Cv'>
      <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main language={language} darkMode={darkMode} />
    </div> 
  );
}

export default Cv;
