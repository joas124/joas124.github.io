import './experience.css';

type experienceType = {
  img: string,
  imgAlt: string,
  imgClass: string,
  title: string,
  description: string
}

function Experience({experience}: {experience: experienceType}){  
  return(
    <div className='history'>
      <img src={experience.img} className={experience.imgClass} alt={experience.imgAlt} />
      <div className='study'>
        <h4>{experience.title}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}

export default Experience;