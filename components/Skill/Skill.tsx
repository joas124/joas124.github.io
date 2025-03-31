import styles from './skill.module.css';

type skillType = {
  title: string,
  proficiency: number,
}

export default function Skill({skill}: {skill: skillType}) {
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
    <div className={styles.skillContainer}>
      <span className={styles.skillTitle}>{skill.title}</span>
      <div className={styles.proficiencyDiv}>
        {proficiencyCircles.map((fillType, index) => (
          <div key={index} className={styles.circleWrapper}>
            <div className={`${styles.circle} ${styles.empty}`}></div>            
            {fillType === 'full' && (
              <div className={`${styles.circle} ${styles.filled}`}></div>
            )}            
            {fillType === 'half' && (
              <div className={`${styles.circle} ${styles.halfFilled}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}