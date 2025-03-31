import styles from './certificate.module.css';
import Image from 'next/image';

interface CertificateProps {
  on: boolean;
  certificate: string;
  certificateAlt: string;
  close: (isOpen: boolean) => void;
  width: number;
  heigth: number;
}

export default function Certificate({on, certificate, certificateAlt, close, width, heigth}: CertificateProps) {
  // Preload the image when component mounts
  if (!on) return null;

  return (
    <div className={styles.Certificate} onClick={() => close(false)}>
      <div className={`${styles.certificateInner} ${styles.animated}`}
           onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={() => close(false)}>X</button>
        <Image width={width} height={heigth} className={styles.image} src={certificate} alt={certificateAlt} />
        {/* <img src={certificate} alt={certificateAlt} /> */}
      </div>
    </div>
  );
};
