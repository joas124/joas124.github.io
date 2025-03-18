import './certificate.css';
import { useEffect } from 'react';

interface CertificateProps {
  on: boolean;
  certificate: string;
  certificateAlt: string;
  close: (isOpen: boolean) => void;
}

function Certificate({on, certificate, certificateAlt, close}: CertificateProps) {
  // Preload the image when component mounts
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = certificate;
  }, [certificate]);

  if (!on) return null;

  return (
    <div className='Certificate' onClick={() => close(false)}>
      <div className='certificate-inner animated'
           onClick={(e) => e.stopPropagation()}>
        <button className='close' onClick={() => close(false)}>X</button>
        <img src={certificate} alt={certificateAlt} />
      </div>
    </div>
  );
};

export default Certificate;