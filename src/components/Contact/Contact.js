import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='wrapper'>
        <h2> CONNECT WITH ME</h2>
        <div className='wrppaerContetn'>
          <p>I am currently accepting new freelance design projects.</p>

          <a href={`mailto:${contact.email}`}>
            <div className='wrapperContact'>
              <span type='button' className='btn--outline'>
                Email me
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
