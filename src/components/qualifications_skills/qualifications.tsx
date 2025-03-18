import './qualifications.css';
import Skill from '../skill/skill';
import { useTranslation } from "react-i18next";

function Qualifications({darkMode}: {darkMode: boolean}){
  //Translation variables
  const {t} = useTranslation();  
  //SkillBars
  const skillsBackend = [
    { title: 'Laravel/PHP', proficiency: 4.5 },
    { title: 'Docker', proficiency: 4 },
    { title: 'pgSQL/MariaDB', proficiency: 4 },
    { title: 'Django', proficiency: 3.5 },
    { title: 'Ruby On Rails', proficiency: 3 },
  ];
  const skillsFrontend = [
    { title: 'ReactJS', proficiency: 4.5 },
    { title: 'JavaScript', proficiency: 4},
    { title: 'HTML', proficiency: 4 },
    { title: 'CSS', proficiency: 3.5 }
  ];
  const skillsOOP = [
    { title: 'Python', proficiency: 4.5 },
    { title: 'Java', proficiency: 4 },
    { title: 'C++', proficiency: 3.5 },
  ];

  return(
    <div className='Qualifications'>
      <ul className='socials'>
        <li>
          <img src='./icons/In-Blue-128@2x.png' className='icon' alt='Linkedin Logo'/>
          <a href='http://linkedin.com/in/joas124'>http://linkedin.com/in/joas124</a>
        </li>
        <li>
          <img src={darkMode ? './icons/github-mark-white.svg' : './icons/github-mark.svg'} className='icon' alt='GitHub Logo' />
          <a href='https://github.com/joas124'>https://github.com/joas124</a>
        </li>
        <li>
          <img src='./icons/simplemail.svg' className='icon' alt='Vector drawing of a letter, representing an e-mail address' />
          <a href='mailto:joasdavi16@gmail.com'>joasdavi16@gmail.com</a>
        </li>
      </ul>
      <h3 className='title'>{t('skills')}</h3>
      <div className='skills'>
        <h4 className='subTitle'>Backend</h4>
        {skillsBackend.map((skill) => {
          return <Skill skill={skill} key={skill.title}/>;
        })}
        <h4 className='subTitle'>Frontend</h4>
        {skillsFrontend.map((skill) => {
          return <Skill skill={skill} key={skill.title}/>;
        })}
        <h4 className='subTitle'>{t('prog-langs')}</h4>
        {skillsOOP.map((skill) => {
          return <Skill skill={skill} key={skill.title}/>;
        })}
      </div>
      <h3 className='title'>{t('languages')}</h3>
      <div className='languages'>
        <h4 className='subTitle'>{t('pt')}</h4>
        <h4 className='subTitle'>{t('en')}</h4>
      </div>
    </div>
  );
}

export default Qualifications;