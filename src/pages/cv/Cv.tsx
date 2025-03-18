import { useState } from 'react'
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import '../../i18n';
import './Cv.css'

function Cv (){
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='Cv'>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main darkMode={darkMode} />
    </div> 
  );
}

export default Cv
