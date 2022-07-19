import './Footer.css'

const Footer = () => (
  <footer className='social-footer'>
    <div className='social-footer-left'>
      {/* <a href='#'>
        <img className='logo' src='https://placehold.it/150x30' alt='' />
      </a> */}
    </div>
    <div className='social-footer-icons'>
      <ul className='menu simple'>
        <li>
          <a href='https://www.facebook.com/'>
            <i className='fa fa-facebook' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/?hl=en'>
            <i className='fa fa-instagram' aria-hidden='true' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/arta-kerqeli-8a2766237/'>
            <i className='fa fa-twitter' aria-hidden='true' />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
