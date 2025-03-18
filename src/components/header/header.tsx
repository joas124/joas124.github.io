import './header.css';
import Photo from '../photo/photo';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from "react-i18next";



function Header({darkMode, setDarkMode}: {darkMode: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>}){
  const {t, i18n} = useTranslation();

  const handleDarkMode = () => {
    const element = document.body;
    element.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  }

  return (
    <header className='Header'>
      <div className='buttons'>
        <button className='print' onClick={() => window.print()}>
          {t('print')}
          <img src='./icons/printer.svg' alt='Printer Icon'/>
        </button>
        <select className='langSelect' name='language' value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          <option value='en'>English</option>
          <option value='pt'>Português</option>
        </select>
        <button className='dmButton' onClick={handleDarkMode}><img alt='Dark Mode Button' src={darkMode ? './icons/moon-stars-fill.svg' : './icons/brightness-high-fill.svg'}/></button>
      </div>
      <div className='namePhoto'>
        <Photo />
        <div className='nameDiv'>
          <h1 className='name'>Joás Silva</h1>
          <h2 className='job-title'>{t('jobTitle')}</h2>
          <h2 className='description'>{t('description')}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;