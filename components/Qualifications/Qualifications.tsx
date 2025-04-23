import Image from 'next/image';
import Skill from '../Skill';
import GithubIcon from './GithubIcon';
import styles from './qualifications.module.css';
import { useTranslations } from 'next-intl';


export default function Qualifications(){
  //Translation variables
  const t = useTranslations();  
  //SkillBars
  const skillsBackend = [
    { title: 'Laravel (PHP)', proficiency: 4.5 },
    { title: 'Django', proficiency: 4 },
    { title: 'Docker', proficiency: 4 },
    { title: 'pgSQL/MariaDB', proficiency: 4 },
    { title: 'Ruby On Rails', proficiency: 3.5 },
  ];
  const skillsFrontend = [
    { title: 'React/NextJS', proficiency: 4.5 },
    { title: 'TypeScript', proficiency: 4},
    { title: 'HTML', proficiency: 4 },
    { title: 'CSS/SASS', proficiency: 3.5 }
  ];
  const skillsOOP = [
    { title: 'Python', proficiency: 4.5 },
    { title: 'Java', proficiency: 4 },
    { title: 'C++', proficiency: 3.5 },
  ];

  return(
    <div className={styles.Qualifications}>
      <ul className={styles.socials}>
        <li className={styles.links}>
          <Image src="/icons/In-Blue-128@2x.png" width="30" height="30" className={styles.icon} alt='LinkedIn Logo'/>
          <a href='https://linkedin.com/in/joas124' target='_blank'>https://linkedin.com/in/joas124</a>
        </li>
        <li className={styles.links}>
          <Image src={'/icons/github-mark.svg'} width="30" height="30" className="icon github" alt='GitHub Logo' />          
          <a href='https://github.com/joas124' target='_blank'>https://github.com/joas124</a>
        </li>
        <li className={styles.links}>
          <Image src='/icons/simplemail.svg' width="30" height="30" className={styles.icon} alt='Vector drawing of a letter, representing an e-mail address'/>
          <a href='mailto:joasdavi16@gmail.com'>joasdavi16@gmail.com</a>
        </li>
      </ul>
      <h3 className='title'>{t('skills')}</h3>
      <div className={styles.skills}>
        <h4 className={styles.subTitle}>Back-end</h4>
        {skillsBackend.map((skill) => {
          return <Skill skill={skill} key={skill.title}/>;
        })}
        <h4 className={styles.subTitle}>Front-end</h4>
        {skillsFrontend.map((skill) => {
          return <Skill skill={skill} key={skill.title}/>;
        })}
        <h4 className={styles.subTitle}>{t('prog-langs')}</h4>
        {skillsOOP.map((skill) => {
          return <Skill skill={skill} key={skill.title}/>;
        })}
      </div>
      <h3 className='title'>{t('languages')}</h3>
      <div className={styles.languages}>
        <h4 className={styles.subTitle}>{t('pt')}</h4>
        <h4 className={styles.subTitle}>{t('en')}</h4>
      </div>
    </div>
  );
}