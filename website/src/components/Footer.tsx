import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='p-4 container-fluid'>
      <section className='d-flex justify-content-lg-left'>
        <Link to="https://www.linkedin.com/groups/12006817/" target='_blank'>
          <div className='img-background'>
            <img src="/src/assets/LI-In-Bug.png" alt="LinkedIn" />
          </div>
        </Link>
      </section>
      <hr className='py-0 my-3' />
      <a className='py-3' href="mailto:nagromkruger@gmail.com">Leave us a message</a>
      <div className="text-center">© 2023 Copyright: <Link to="/">CLAR.com</Link></div>
    </footer>    
  )
}

export default Footer