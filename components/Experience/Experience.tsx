import Image from 'next/image';
import styles from './experience.module.css';

type experienceType = {
  img: string,
  imgAlt: string,
  imgClass: string,
  imgWidth: number,
  imgHeight: number,
  title: string,
  description: string
}

export default function Experience({experience}: {experience: experienceType}){  
  return(
    <div className={styles.history}>
      <Image src={experience.img} className={styles[experience.imgClass]} width={experience.imgWidth} height={experience.imgHeight} alt={experience.imgAlt} />
      <div className={styles.study}>
        <h4>{experience.title}</h4>
        <p dangerouslySetInnerHTML={{__html: experience.description}}></p>
      </div>
    </div>
  );
}