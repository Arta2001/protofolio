import './ProjectSlider.css'
import uniqid from 'uniqid'
import { useRef } from 'react'
import { projects } from '../../portfolio'

const ProjectCardSlider = () => {
  const elementRef = useRef(null)

  if (!projects.length) return null

  return (
    <div className='main-slider'>
      <div className='slider' ref={elementRef}>
        {projects.map((slide, item) => (
          <div className='slider-card'>
            <div className='projectName'>
              <p>{slide.name}</p>
            </div>
            <div className='projectDescription'>{slide.description}</div>
            <div className='projectStack'>
              <h3 className='techStack'>Tech Stack</h3>
              {slide.stack.map((skill) => (
                <div className='chip'>{skill}</div>
              ))}
            </div>
           
            <div className='projectStack'>
              <h3 className='techStack'>Github Link:</h3>
              </div>
            <div className='githubLink'>
            
          <a className='githubIcon' href={slide.sourceCode}>
            <i className='fa fa-github fa-2x' />
          </a>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCardSlider
