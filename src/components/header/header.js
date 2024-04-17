import './header.css';
import React from 'react';
import Photo from '../photo/photo';


function Header({language, setLanguage, darkMode, setDarkMode}){

  const handleDarkMode = () => {
    const element = document.body;
    element.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  }

  let description, print;
  if(language === 'english'){
    print = 'Print';
    description = 'Third-year Computer Science student seeking work experience in the area. Strong programming skills and eager to learn and contribute to real-world projects.'
  }else if (language === 'portuguese'){
    print = 'Imprimir';
    description = 'Estudante de 3º ano de Engenharia Informática à procura de experiência na área. Fortes habilidades de programação e entusiasmado para aprender e contribuir para projetos reais'
  }
  return (
    <header className='Header'>
      <div className='buttons'>
        <button className='print' onClick={() => window.print()}>
          {print}
          <img src='printer1.svg' alt='Printer Icon'/>
        </button>
        <select className='langSelect' name='language' value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value='english'>English</option>
          <option value='portuguese'>Português</option>
        </select>
        <button className='dmButton' onClick={handleDarkMode}><img alt='Dark Mode Button' src={darkMode ? './moon-stars-fill.svg' : './brightness-high-fill.svg'}/></button>
      </div>
      <div className='namePhoto'>
        <Photo />
        <div className='nameDiv'>
          <h1 className='name'>Joás Silva</h1>
          <h2 className='description'>{description}</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;