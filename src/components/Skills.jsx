import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma, FaGraduationCap } from "react-icons/fa"
import { SiJavascript, SiFirebase, SiTailwindcss, SiVite, SiVisualstudio } from "react-icons/si"
import { SlSpeech } from "react-icons/sl"
import { MdDevices } from "react-icons/md"
import { HiLightBulb } from "react-icons/hi"

function Skills() {
  return (
    <section id='skills' className="my-10 scroll-mt-[96px] mx-auto w-[95%] md:w-auto container rounded-[50px] bg-base-100 p-8">
        <div className="text-center">
            <h2 className="mb-5 text-3xl text-primary font-bold">Skills and Tools</h2>
            <p className="mb-5 text-base-content ">I am equipped with the following languages, libraries and technologies to help get your project over the finish line:</p>  
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3">
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <FaHtml5 />
                    </figure>
                    <figcaption className="text-sm ">HTML 5</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <FaCss3Alt />
                    </figure>
                    <figcaption className="text-sm">CSS3</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <SiJavascript />
                    </figure>
                    <figcaption className="text-sm">JavaScript</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <SiVisualstudio />
                    </figure>
                    <figcaption className="text-sm">VSCode</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <FaReact />
                    </figure>
                    <figcaption className="text-sm">React</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <SiVite />
                    </figure>
                    <figcaption className="text-sm">Vite</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <FaGitAlt />
                    </figure>
                    <figcaption className="text-sm">Git</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <FaGithub />
                    </figure>
                    <figcaption className="text-sm">GitHub</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <SiTailwindcss />
                    </figure>
                    <figcaption className="text-sm">Tailwind CSS</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <SiFirebase />
                    </figure>
                    <figcaption className="text-sm">Firebase</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <FaFigma />
                    </figure>
                    <figcaption className="text-sm">Figma</figcaption>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-5xl mx-auto">
                        <MdDevices />
                    </figure>
                    <figcaption className="text-sm">Responsive Design</figcaption>
                </div>
            </div>
            <p className="mb-5 mt-5 text-base-content ">The following are some of the key professional and soft skills I have developed along my journey:</p>  
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-start">
                <div className="grid mx-auto">
                    <figure className="text-[100px] mx-auto">
                        <SlSpeech />
                    </figure>
                    <figcaption className="text-info font-bold my-2">Communication</figcaption>
                    <ul className="text-left">
                        <li>
                            <ul className="list-disc">
                                <li>Taught ESL to young and adult learners</li>
                                <li>Performed basic JP to EN translation</li>
                                <li>Collaborated with a diverse, international team</li>
                                <li>Organized and hosted Meetup events in Tokyo</li>
                            </ul>
                        </li>
                        <br />
                        <li><span className="text-info">English level:</span> Native</li>
                        <li><span className="text-info">Japanese level:</span> Conversational</li>
                    </ul>
                </div>
                <div className="grid mx-auto">
                    <figure className="text-[100px] mx-auto">
                        <FaGraduationCap />
                    </figure>
                    <figcaption className="text-info font-bold my-2">Instructional Design</figcaption>
                    <ul className="text-left">
                        <li>
                            <ul className="list-disc">
                                <li>Developed/ managed eLearning content through LMS &#40;Moodle&#41;</li>
                                <li>Designed and hosted training sessions for instructors</li>
                                <li>Utilized original research and background in linguistics to create courses for test preparation, academic skills, and humanities subjects</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="grid mx-auto sm:col-span-2 lg:col-span-1">
                    <figure className="text-[100px] mx-auto">
                        <HiLightBulb />
                    </figure>
                    <figcaption className="text-info font-bold my-2">Problem-solving and planning</figcaption>
                    <ul className="text-left">
                        <li>
                            <ul className="list-disc">
                                <li>Authored a program to automate experiments with no previous experience and little documentation &#40;Praat&#41;</li>
                                <li>Harnessed AI &#40;ChatGPT&#41; to vastly accelerate the process of producing learning material</li>
                                <li>Created marathon training plans, multi-day hiking routes and barrier-free travel itineraries for myself and others</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills