import './qualifications.css';
import React from 'react';
import SkillBar from 'react-skillbars';

function Qualifications({language, darkMode}){
  //DarkMode Variables
  let githubIcon, symbolColor;
  //Language variables
  let skillsText, oop, languages, pt, en;
  //SkillBars
  const colors = {
    bar: '#278AD2',
    title: {
      text: '#FFFFFF',
      background: '#278AD2',
    },
  };
  const skillsBackend = [
    { type: 'Django', level: 90 },
    { type: 'pgSQL', level: 85 },
  ];
  const skillsFrontend = [
    { type: 'ReactJS', level: 75 },
    { type: 'CSS', level: 55 },
    { type: 'JavaScript', level: 85},
    { type: 'HTML', level: 70 }
  ];
  const skillsOOP = [
    { type: 'Java', level: 90 },
    { type: 'C++', level: 65 },
  ];

  if(language === 'portuguese'){
    oop = 'Programação Orientada a Objetos';
    skillsText = 'Habilidades Relevantes';
    languages = 'Idiomas';
    pt = 'Português - Nativo';
    en = 'Inglês - Fluente';
  }else if(language === 'english'){
    oop = 'Object-Oriented Programming';
    skillsText = 'Relevant Skills';
    languages = 'Languages';
    pt = 'Portuguese - Native';
    en = 'English - Fluent';
  }

  if(darkMode){
    githubIcon = './github-mark.svg'
    symbolColor = 'black';
  }else{
    githubIcon = './github-mark-white.svg'
    symbolColor = 'white';
  }
  return(
    <div className='Qualifications'>
      <ul className='socials'>
        <li>
          <img src='./In-Blue-128@2x.png' className='icon' alt='Linkedin Logo'/>
          <a href='http://linkedin.com/in/joas124'>http://linkedin.com/in/joas124</a>
        </li>
        <li>
          <img src={githubIcon} className='icon' alt='GitHub Logo' />
          <a href='https://github.com/joas124'>https://github.com/joas124</a>
        </li>
        <li>
          <img src='./simplemail.svg' className='icon' alt='Vector drawing of a letter, representing an e-mail address' />
          <a href='mailto:joasdavi16@gmail.com'>joasdavi16@gmail.com</a>
        </li>
      </ul>
      <h3 className='title'>{skillsText}</h3>
      <div className='skills'>
        <h4 className='subTitle'>Backend</h4>
        <SkillBar skills={skillsBackend} colors={colors} symbolColor={symbolColor} height={'20px'} animationDuration={'1500'} />
        <h4 className='subTitle'>Frontend</h4>
        <SkillBar skills={skillsFrontend} colors={colors} symbolColor={symbolColor} height={'20px'} animationDuration={'1500'} />
        <h4 className='subTitle'>{oop}</h4>
        <SkillBar skills={skillsOOP} colors={colors} symbolColor={symbolColor} height={'20px'} animationDuration={'1500'} />
      </div>
      <h3 className='title'>{languages}</h3>
      <div className='languages'>
        <h4 className='subTitle'>{pt}</h4>
        <h4 className='subTitle'>{en}</h4>
      </div>
    </div>
  );
}

export default Qualifications;