import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <a href='https://www.linkedin.com/in/rob-grayson/' target="_blank" ><FaLinkedin /></a>
                    <a href='https://github.com/hummus-erectus' target="_blank"><FaGithub /></a>
                </div>
            </div> 
            <div>
                <p>© {currentYear} Robert Grayson - All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer