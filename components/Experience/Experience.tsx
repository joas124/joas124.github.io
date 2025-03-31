import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './experience.module.css';

type experienceType = {
  img: string,
  imgAlt: string,
  imgClass: string,
  title: string,
  description: string | ReactNode
}

export default function Experience({experience}: {experience: experienceType}){  
  return(
    <div className={styles.history}>
      <Image src={experience.img} className={styles[experience.imgClass]} alt={experience.imgAlt} />
      <div className={styles.study}>
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}