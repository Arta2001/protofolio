import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectCardSlider from '../ProjectContainer/ProjectCardSlider'

import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>
      <ProjectCardSlider />
    </section>
  )
}

export default Projects
