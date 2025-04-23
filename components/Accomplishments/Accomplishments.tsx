import { useTranslations } from 'next-intl';
import ClientInteractiveAccomplishments from './ClientInteractiveAccomplishments';
import Experience from '../Experience';
import styles from './accomplishments.module.css';


export default function Accomplishments() {
  const t = useTranslations();

  const experience = [
    {img: '/images/Logo_MEO.png', imgClass: 'logo-rounded', imgAlt: 'Logo of MEO, a portuguese telecommunication company', imgWidth: 768, imgHeight: 768, title: t('meo.title'), description: t('meo.info')},
    {img: '/images/redlight.png', imgClass: 'logo', imgAlt: 'Logo of the RedLight Software company', imgWidth: 1578, imgHeight: 1578, title: t('redlight.title'), description: t.rich('redlight.info', {link: (chunks) => <a target='_blank' href='https://redlight.dev/project/vive-na-boa/'>{chunks}</a>})},
  ];

  const education = [
    {img: '/images/FCTUC_V_FundoClaro.png', imgClass: 'logo', imgAlt: 'Logo of the University of Coimbra', imgWidth: 1666, imgHeight: 1670, title: t('degree.title'), description: t('degree.info')},
  ];

  const certificates = [
    {label: t('enei'), certificate: '/images/enei.webp', certificateAlt: 'Certificate of participation in ENEI', width: 6006, height: 4157},
    {label: t('ebec'), certificate: '/images/ebec.webp', certificateAlt: 'Diploma of 3rd place in EBEC', width: 2272, height: 1600}
  ];

  return (
    <div className={styles.Accomplishments}>
      <h3 className='title'>{t('experience')}</h3>
      <div className={styles.divHistory}>
        {experience.map((e) => (
          <Experience experience={e} key={e.title} />
        ))}
      </div>

      <h3 className='title'>{t('history')}</h3>
      <div className={styles.divHistory}>
        {education.map((e) => (
          <Experience experience={e} key={e.title} />
        ))}
      </div>

      <h3 className='title'>{t('accomplishments')}</h3>
      <ClientInteractiveAccomplishments 
        certificates={certificates} 
      />

      <div className={styles.source}>
        <div className={styles.link}>
          <p>{t('hosted')}</p>
          <a href='https://joas124.github.io/'>https://joas124.github.io/</a>
        </div>
        <div className={styles.link}>
          <p>{t('source')}</p>
          <a href='https://github.com/joas124/CV'>https://github.com/joas124/CV</a>
        </div>
      </div>
    </div>
  );
}
