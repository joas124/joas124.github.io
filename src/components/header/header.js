import './header.css';
import React, {useState} from 'react';
import Photo from '../photo/photo';

function Header({language, setLanguage}){
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    const element = document.body;
    element.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  }

  let description;
  if(language === 'english'){
    description = 'Third-year Computer Science student seeking work experience in the area. Strong programming skills and eager to learn and contribute to real-world projects.'
  }else if (language === 'portuguese'){
    description = 'Estudante de 3º ano de Engenharia Informática à procura de experiência na área. Fortes habilidades de programação e entusiasmado para aprender e contribuir para projetos reais'
  }
  return (
    <header className='Header'>
      <Photo />
      <div className='nameDiv'>
        <div className='buttons'>
          <button className='print' onClick={() => console.log('TODO: Imprimir')}>Print</button>
          <select className='langSelect' name='language' value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value='english'>English</option>
            <option value='portuguese'>Português</option>
          </select>
          <button className='dmButton' onClick={() => handleDarkMode()}>DM</button>
        </div>
        <h1 className='name'>Joás Silva</h1>
        <h3 className='description'>{description}</h3>
      </div>
    </header>
  );
}

export default Header;