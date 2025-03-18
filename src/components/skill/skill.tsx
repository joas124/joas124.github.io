import './skill.css';

type skillType = {
  title: string,
  proficiency: number,
}

function Skill({skill}: {skill: skillType}) {
  const proficiencyCircles = Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= Math.floor(skill.proficiency)) {
      return 'full'; // Full circle
    } else if (index + 0.5 === skill.proficiency) {
      return 'half'; // Half circle
    } else {
      return 'empty'; // Empty circle
    }
  });

  return (
    <div className="skill-container">
      <span className={"skill-title"}>{skill.title}</span>
      <div className="proficiency-div">
        {proficiencyCircles.map((fillType, index) => (
          <div key={index} className="circle-wrapper">
            <div className="circle empty"></div>            
            {fillType === 'full' && (
              <div className="circle filled"></div>
            )}            
            {fillType === 'half' && (
              <div className="circle half-filled"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;