'use client';

import React from "react";
import dynamic from 'next/dynamic';
import styles from './accomplishments.module.css';

const Certificate = dynamic(() => import('@/components/Certificate/Certificate'), { 
  ssr: true 
});

interface ClientInteractiveAccomplishmentsProps {
  certificates: {
    label: string;
    certificate: string;
    certificateAlt: string;
    width: number;
    height: number;
  }[]
}

export default function ClientInteractiveAccomplishments({ certificates }: ClientInteractiveAccomplishmentsProps) {
  const [activeModal, setActiveModal] = React.useState<number | null>(null);

  return (
    <>
      <ul className={styles.listAccomp}>
        {certificates.map((certificate, index) => (
          <li 
            key={certificate.label}
            className={styles.certificateP} 
            onClick={() => setActiveModal(index)}
          >
            {certificate.label}
          </li>
        ))}
      </ul>

      {certificates.map((certificate, index) => (
        <Certificate
          key={certificate.label}
          on={activeModal === index}
          certificate={certificate.certificate}
          certificateAlt={certificate.certificateAlt}
          close={() => setActiveModal(null)}
          width={certificate.width}
          heigth={certificate.height}
        />
      ))}
    </>
  );
}