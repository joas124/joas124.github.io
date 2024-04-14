import './experience.css';
import React, { useState } from 'react';
import Certificate from '../certificate/certificate';

function Experience({language}){
  const [eneiOn, setEneiOn] = useState(false);
  const [ebecOn, setEbecOn] = useState(false);
  
  let history, accomplishments, degree, degreeInfo, secondary, secondaryInfo, ebec, enei;
  if(language === 'portuguese'){
    history = 'Histórico de Estudo';
    accomplishments = 'Conquistas';
    degree = 'Licenciatura em Engenharia Informática';
    degreeInfo = 'Instituição: Universidade de Coimbra - FCTUC\n[2021-2024]';
    secondary = 'Ensino Secundário';
    secondaryInfo = 'Curso: Ciências e Tecnologias\nInstituição: Escola Secundária Francisco Rodrigues Lobo\n[2018-2021]';
    enei = 'Participante na edição de 2023 do ENEI (Encontro Nacional de Estudantes de Informática)';
    ebec = 'Membro da equipa qualificada em 3º lugar no EBEC - European BEST Engineering Competition, em Março de 2022';
  }else if(language === 'english'){
    history = 'Education History';
    accomplishments = 'Accomplishments';
    degree = "Bachelor's Degree in Informatics Engineering (Computer Science)"
    degreeInfo = 'Institution: University of Coimbra - FCTUC\n[2021-2024]'
    secondary = 'Secondary School Certificate';
    secondaryInfo = 'Course: Science and Technology\nInstitution: Francisco Rodrigues Lobo Secondary School\n[2018-2021]';
    enei = 'Participant in the 2023 edition of ENEI (National Meeting of Computer Science Students)';
    ebec = 'Member of the team that placed 3rd at EBEC - European BEST Engineering Competition, on March of 2022';
  }
  
  return(
    <div className='Experience'>
      <Certificate on={ebecOn} certificate={'./ebec.png'} certificateAlt={'Diploma of 3rd place in EBEC'} close={setEbecOn} />
      <Certificate on={eneiOn} certificate={'./enei.png'} certificateAlt={'Certificate of participation in ENEI'} close={setEneiOn} />
      <h3 className='title'>{history}</h3>
      <div className='divHistory'>
        <div className='history'>
          <img src='./FCTUC_V_FundoClaro.png' className='ucLogo' alt='Logo of the University of Coimbra' />
          <div className='study'>
            <h4>{degree}</h4>
            <p>{degreeInfo}</p>
          </div>
        </div>
        <div className='history'>
          <img src='./logoESFRL.jpg'className='esfrlLogo' alt='Logo of the Francisco Rodrigues Lobo Secondary School' />
          <div className='study'>
            <h4>{secondary}</h4>
            <p>{secondaryInfo}</p>
          </div>
        </div>
      </div>
      <h3 className='title'>{accomplishments}</h3>
      <ul className='list-accomp'>
        <li className='certificate-p' onClick={() => setEneiOn(true)}> {enei} </li>
        <li className='certificate-p' onClick={() => setEbecOn(true)}>{ebec} </li>
      </ul>
    </div>
  );
}

export default Experience;