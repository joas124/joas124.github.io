import './certificate.css';
import React from 'react';

function Certificate(props){

  return (props.on) ? (
    <div className='Certificate' onClick={() => props.close(false)}>
        <div className='certificate-inner animated' >
          <button className='close' onClick={() => props.close(false)}>X</button>
          <img src={props.certificate} alt={props.certificateAlt} />
        </div>
    </div>
  ): "";
}

export default Certificate;