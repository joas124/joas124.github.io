import ClientInteractiveAccomplishments from './ClientInteractiveAccomplishments';
import Experience from '../Experience';
import styles from './accomplishments.module.css';


export default function Accomplishments({ translations }: { translations: Record<string, string> }) {
  const experience = [
    {img: '/images/Logo_MEO.png', imgClass: 'logo-rounded', imgAlt: 'Logo of MEO, a portuguese telecommunication company', imgWidth: 768, imgHeight: 768, title: translations['meoTitle'], description: translations['meoInfo']},
    {img: '/images/redlight.png', imgClass: 'logo', imgAlt: 'Logo of the RedLight Software company', imgWidth: 1578, imgHeight: 1578, title: translations['redlightTitle'], description: translations['redlightInfo']},
  ];

  const education = [
    {img: '/images/FCTUC_V_FundoClaro.png', imgClass: 'logo', imgAlt: 'Logo of the University of Coimbra', imgWidth: 1666, imgHeight: 1670, title: translations['degreeTitle'], description: translations['degreeInfo']},
  ];

  const certificates = [
    {label: translations['enei'], certificate: '/images/enei.webp', certificateAlt: 'Certificate of participation in ENEI', width: 6006, height: 4157},
    {label: translations['ebec'], certificate: '/images/ebec.webp', certificateAlt: 'Diploma of 3rd place in EBEC', width: 2272, height: 1600}
  ];

  return (
    <div className={styles.Accomplishments}>
      <h3 className='title'>{translations['experience']}</h3>
      <div className={styles.divHistory}>
        {experience.map((e) => (
          <Experience experience={e} key={e.title} />
        ))}
      </div>

      <h3 className='title'>{translations['history']}</h3>
      <div className={styles.divHistory}>
        {education.map((e) => (
          <Experience experience={e} key={e.title} />
        ))}
      </div>

      <h3 className='title'>{translations['accomplishments']}</h3>
      <ClientInteractiveAccomplishments 
        certificates={certificates} 
      />

      <div className={styles.source}>
        <div className={styles.link}>
          <p>{translations['hosted']}</p>
          <a href='https://joas124.github.io/'>https://joas124.github.io/</a>
        </div>
        <div className={styles.link}>
          <p>{translations['source']}</p>
          <a href='https://github.com/joas124/CV'>https://github.com/joas124/CV</a>
        </div>
      </div>
    </div>
  );
}
