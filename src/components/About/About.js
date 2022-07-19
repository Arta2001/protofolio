import { about } from '../../portfolio'
import image from '../../assets/arta.jpg'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='circular--portrait'>
        <img src={image} alt='Avatar' />
      </div>

      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}</h2>}

      <div className='aboutCard'>
        <p className='about__desc'>{description}</p>
        <div className='list'>
          <i className='fa fa-home' /> <p className='address'>Gjilan, Kosovo</p>
          <i className='fa fa-phone' />{' '}
          <p className='address'>+383 46 127 948</p>
          <i className='fa fa-envelope' />{' '}
          <p className='address'>kerqeliarta@gmail.com</p>
        </div>
        
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                {/* <GitHubIcon /> */}
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                {/* <LinkedInIcon /> */}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
