import { useState, useEffect } from 'react'
import * as Scroll from 'react-scroll'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import resume from '../files/resume.pdf'
// import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [theme, setTheme] = useState('emerald')
    
    const toggleTheme = () => {
        setTheme(theme === 'emerald' ? 'forest' : 'emerald')
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
      }, [theme])

    useEffect(() => {
        const handleClick = (e) => {
          if (!e.target.closest('.dropdown')) {
            setIsMenuOpen(false)
          }
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])


    return (
        <nav className='navbar fixed top-0 bg-base-100 z-50'>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn md:hidden" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
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
                <Link className="btn btn-ghost normal-case text-md md:text-xl" spy={true} smooth={true} offset={-96} to="home">Robert Grayson</Link>
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
            <label className="swap swap-rotate mr-2">
                <input onClick={toggleTheme} type="checkbox" />
                <svg className="swap-on fill-current w-8 sm:w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                <svg className="swap-off fill-current w-8 sm:w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            </label>
                <a className="btn normal-case btn-primary" href={resume} download="Robert Grayson CV">Download CV</a>
            </div>
        </nav>
    )
}

export default Navbar