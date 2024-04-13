import './cv.css';
import React, {useState} from 'react';
import Header from './components/header/header';
import Main from './components/main/main';

function Cv (){
  const [language, setLanguage] = useState('english');

    return (
      <div className='Cv'>
        <Header language={language} setLanguage={setLanguage}/>
        <Main language={language} />
      </div> 
    );
}

export default Cv;
