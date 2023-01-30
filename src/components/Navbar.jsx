import { useState, useEffect } from 'react'
import resume from '../files/resume.pdf'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

 

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [activeLink, setActiveLink] = useState ('home')
    // const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleClick = (e) => {
          if (!e.target.closest('.dropdown')) {
            setIsMenuOpen(false)
          }
        }
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick)
      }, [])

    // useEffect(() => {
    // const onScroll = () => {
    //     if (window.scrollY > 50) {
    //     setScrolled(true)
    //     } else {
    //     setScrolled(false)
    //     }
    // }
    // window.addEventListener("scroll", onScroll)
    // return () => window.removeEventListener("scroll", onScroll)
    // }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <nav className='navbar fixed top-0 bg-neutral z-50'>
            <div className="navbar-start">
                <div className="dropdown">
                    <button className="btn md:hidden" onClick={() => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    <div className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <ul onClick={() => setIsMenuOpen(false)}>
                            <li><a href="#about" onClick={() => onUpdateActiveLink('about')}>About</a></li>
                            <li><a href="#skills"  onClick={() => onUpdateActiveLink('skills')}>Skills</a></li>
                            <li><a href="#projects"  onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                            <li><a href="#contact"  onClick={() => onUpdateActiveLink('contact')}>Contact</a></li>
                        </ul>
                        <hr/>
                        <ul onClick={() => setIsMenuOpen(false)}>
                            <li><a href='https://www.linkedin.com/in/rob-grayson/' target="_blank">LinkedIn</a></li>
                            <li><a href='https://github.com/hummus-erectus' target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <a href="#"className="btn  normal-case text-xl" onClick={() => onUpdateActiveLink('')}>Robert Grayson</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="#about" className={activeLink === 'about' ? 'btn-info' : 'undefined'} onClick={() => onUpdateActiveLink('about')}>About</a></li>
                    <li><a href="#skills"  className={activeLink === 'skills' ? 'btn-info' : 'undefined'} onClick={() => onUpdateActiveLink('skills')}>Skills</a></li>
                    <li><a href="#projects" className={activeLink === 'projects' ? 'btn-info' : 'undefined'} onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                    <li><a href="#contact" className={activeLink === 'contact' ? 'btn-info' : 'undefined'} onClick={() => onUpdateActiveLink('contact')}>Contact</a></li>
                    <li><a href='https://www.linkedin.com/in/rob-grayson/' target="_blank" className='ml-2 lg:ml-10'><FaLinkedin /></a></li>
                    <li><a href='https://github.com/hummus-erectus' target="_blank"><FaGithub /></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn normal-case btn-primary" href={resume} download="Robert Grayson CV">Download CV</a>
            </div>
        </nav>

    )
}

export default Navbar