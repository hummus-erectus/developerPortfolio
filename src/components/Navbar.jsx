import { useState, useEffect } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import resume from '../files/resume.pdf'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleClick = (e) => {
          if (!e.target.closest('.dropdown')) {
            setIsMenuOpen(false)
          }
        }
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick)
    }, [])



    return (
        <nav className='navbar fixed top-0 bg-neutral z-50'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn md:hidden" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-96} to="home">Home</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-96} to="about">About</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-94} to="skills">Skills</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-94} to="projects">Projects</Link></li>
                            <li><Link activeClass="active" spy={true} smooth={true} offset={-94} to="contact">Contact</Link></li>
                        </ul>
                        <hr/>
                        <ul >
                            <li><a href='https://www.linkedin.com/in/rob-grayson/' target="_blank">LinkedIn</a></li>
                            <li><a href='https://github.com/hummus-erectus' target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <Link className="btn normal-case text-xl" spy={true} smooth={true} offset={-96} to="home">Robert Grayson</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link activeClass="active" spy={true} smooth={true} offset={-96} to="home">Home</Link></li>
                    <li><Link activeClass="active" spy={true} smooth={true} offset={-96} to="about">About</Link></li>
                    <li><Link activeClass="active" spy={true} smooth={true} offset={-94} to="skills">Skills</Link></li>
                    <li><Link activeClass="active" spy={true} smooth={true} offset={-94} to="projects">Projects</Link></li>
                    <li><Link activeClass="active" spy={true} smooth={true} offset={-94} to="contact">Contact</Link></li>
                    {/* <li><a href='https://www.linkedin.com/in/rob-grayson/' target="_blank" className='ml-2 lg:ml-10'><FaLinkedin /></a></li>
                    <li><a href='https://github.com/hummus-erectus' target="_blank"><FaGithub /></a></li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn normal-case btn-primary" href={resume} download="Robert Grayson CV">Download CV</a>
            </div>
        </nav>
    )
}

export default Navbar