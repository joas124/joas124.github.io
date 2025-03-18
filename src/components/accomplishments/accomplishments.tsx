import './accomplishments.css';
import { useState } from 'react';
import Certificate from '../certificate/certificate';
import Experience from '../experience/experience';
import { useTranslation } from "react-i18next";

function Accomplishments(){
  const {t} = useTranslation();
  const [eneiOn, setEneiOn] = useState(false);
  const [ebecOn, setEbecOn] = useState(false);

  const experience = [
    {img: './images/Logo_MEO.png', imgClass: 'logo-rounded', imgAlt: 'Logo of the University of Coimbra', title: t('meo.title'), description: t('meo.info')},
    {img: './images/redlight.png', imgClass: 'logo', imgAlt: 'Logo of the RedLight Software company', title: t('redlight.title'), description: t('redlight.info')},
  ]

  const education = [
    {img: './images/FCTUC_V_FundoClaro.png', imgClass: 'logo', imgAlt: 'Logo of the University of Coimbra', title: t('degree.title'), description: t('degree.info')},
    {img: './images/logoESFRL.jpg', imgClass: 'logo-rounded', imgAlt: 'Logo of the Francisco Rodrigues Lobo Secondary School', title: t('secondary.title'), description: t('secondary.info')},
  ]
    
  return(
    <div className='Accomplishments'>
      <Certificate on={ebecOn} certificate={'./images/ebec.png'} certificateAlt={'Diploma of 3rd place in EBEC'} close={setEbecOn} />
      <Certificate on={eneiOn} certificate={'./images/enei.png'} certificateAlt={'Certificate of participation in ENEI'} close={setEneiOn} />
      <h3 className='title'>{t('experience')}</h3>
      <div className='divHistory'>
        {experience.map((e) => {
          return <Experience experience={e} key={e.title} />;
        })}
      </div>
      <h3 className='title'>{t('history')}</h3>
      <div className='divHistory'>
        {education.map((e) => {
          return <Experience experience={e} key={e.title} />;
        })}
      </div>
      <h3 className='title'>{t('accomplishments')}</h3>
      <ul className='list-accomp'>
        <li className='certificate-p' onClick={() => setEneiOn(true)}>{t('enei')}</li>
        <li className='certificate-p' onClick={() => setEbecOn(true)}>{t('ebec')}</li>
      </ul>
      <div className='source'>
        <div className='link'>
          {t('hosted')} <a href='https://joas124.github.io/'>https://joas124.github.io/</a>
        </div>
        <div className='link'>
          {t('source')} <a href='https://github.com/joas124/CV'>https://github.com/joas124/CV</a>
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;