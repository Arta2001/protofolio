import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
 

  const skillsArea = [
    { filed: 'Frontend', icon: 'fa fa-paint-brush' },
    { filed: 'Backend', icon: 'fa fa-code' },
    { filed: 'Database', icon: 'fa fa-database' },
  ]


  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      <div className='main-skills-container'>
        <div className='skills-cards'>
          {skillsArea.map((item, index) => (
            <div className='skills-card-icon'>
              <div className='skills-cards-content'>
                <div className='skillsIcon'>
                  <i className={item.icon} />
                </div>
                <p className='skillsHeader'>{item.filed}</p>
              </div>
              {skills[index].map((skillsItem) => (
                <ul className='skillsList'>
                  <li>{skillsItem}</li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
