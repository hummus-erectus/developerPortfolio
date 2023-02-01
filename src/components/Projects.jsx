import toeflScreen from '../assets/toeflScreen.webp'
import pokereactScreen from '../assets/pokereactScreen.webp'
import { FaGithub } from "react-icons/fa"



function Projects() {
    return (
        <section id='projects' className="my-10 scroll-mt-[96px] mx-auto w-[95%] md:w-auto container rounded-[50px] bg-neutral p-8">
            <div>
                <h2 className="mb-5 text-3xl text-[#1EB854] font-bold text-center">Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-start">
                    
                    <label htmlFor="project1" className="h-full flex justify-center align-center card col-span-1 cursor-pointer bg-base-100 transition-transform duration-200 hover:scale-105">
                        {/* To add shadow transform: transition-shadow duration-200 hover:shadow-lg hover:shadow-neutral-content */}
                        
                            <figure><img src={toeflScreen} alt="TOEFL Speaking App"/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-info">
                                    TOEFL Speaking App
                                </h2>
                                <p>Web app for students to practice the independent speaking section of the TOEFL exam</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">React</div> 
                                    <div className="badge badge-outline">Custom API</div>
                                </div>
                            </div>
                        
                    </label>
                    
                    <input type="checkbox" id="project1" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative max-w-[1440px]">
                            <label htmlFor="project1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl font-bold text-center text-[#1EB854] mb-10">TOEFL Speaking App</h3>
                            <div className='grid lg:grid-cols-2 gap-8 mb-10'>
                                <div className='grid items-center justify-center'>
                                    <h4 className="text-lg font-bold text-info">Brief</h4>
                                    <p className="py-4">A web app for practicing TOEFL independent speaking questions. The user can select a question from a list, choose a question at random, or input their own question. The question will appear on screen along with a &#40;customizable&#41; timer. Users have the option of allowing the app to access their microphone, recording their answer and displaying the three most recent recordings for them to download.</p>
                                    <a className="btn normal-case btn-primary w-48" href="https://toefl-speaking.netlify.app/" target="_blank">Visit site</a>
                                </div>
                                <a href="https://toefl-speaking.netlify.app/" target="_blank" className='order-first lg:order-last'>
                                    <img src={toeflScreen} alt="TOEFL Speaking App"/>
                                </a>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-info">Story</h4>
                                <p className="py-4">As a TOEFL teacher, I often have students practice timed speaking exercises in the classroom, but the usual method of setting up a timer and writing a question on the board is inefficient. I wanted to create a tool that would allow teachers to use a classroom PC and projector to quickly load a question or compose their own. 
                                <br/><br/>
                                As motivated students often ask how they can improve their speaking skills at home, I decided to extend the project so it would be student-friendly. I designed the interface to be simple to understand and use. I also added a 'tips' section to give students advice on how to complete the task.
                                <br/><br/>
                                I learned a lot through making this project. At first, refreshing the page when it displayed a question would return users to the question select page, requiring them to choose a question from scratch. I implemented <code className='text-[#1EB854]'>react-router</code> to deal with this issue and allow back-button functionality. I also made use of <code className='text-[#1EB854]'>session-storage</code> to keep the currently-selected question in memory.
                                <br/><br/>
                                To gain experience with APIs I choose to move the question data to a separate <code className='text-[#1EB854]'>static API</code> that I could add questions to at a later date. I am currently in the process of increasing the number of stock questions by feeding appropriate prompts to <code className='text-[#1EB854]'>ChatGPT</code> and curating the results.</p>
                            </div>
                        </div>
                    </div>




                    <label htmlFor="project2" className="h-full flex justify-center align-center card col-span-1 cursor-pointer bg-base-100 transition-transform duration-200 hover:scale-105">
                       
                            <figure><img src={pokereactScreen} alt="PokéReact" className=''/></figure>
                            <div className="card-body ">
                                <h2 className="card-title text-info">
                                    PokéReact
                                </h2>
                                <p>Fetches data from PokeApi and displays as a classic Pokémon card</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">React</div> 
                                    <div className="badge badge-outline">Tailwind CSS</div> 
                                    <div className="badge badge-outline">RESTful API</div>
                                </div>
                            </div>
                        
                    </label>

                    <input type="checkbox" id="project2" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative max-w-[1440px]">
                            <label htmlFor="project2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-2xl font-bold text-center text-[#1EB854] mb-10">PokéReact</h3>
                            <div className='grid lg:grid-cols-2 gap-8 mb-10'>
                                <div className='grid items-center justify-center'>
                                    <h4 className="text-lg font-bold text-info">Brief</h4>
                                    <p className="py-4">An SPA that connects to various endpoints of the popular RESTful API, <a href='https://pokeapi.co/' target="_blank" className='font-bold text-[#1EB854]'>PokeAPI</a>. Users can search for a Pokémon using either its name or ID number, and when the data has been retrieved from the API, a Pokémon card will be rendered featuring various information about the creature. Styling is also conditional based on various factors such as Pokémon type, as in the original trading card game. </p>
                                    <a className="btn normal-case btn-primary w-48" href="https://pokereact-app.netlify.app/" target="_blank">Visit site</a>
                                </div>
                                <a href="https://pokereact-app.netlify.app/" target="_blank" className='order-first lg:order-last'>
                                    <img src={pokereactScreen} alt="PokéReact"/>
                                </a>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-info">Story</h4>
                                <p className="py-4">Having built a few basic projects using vanilla CSS, I wanted to try using a CSS framework, and picked <code className='text-[#1EB854]'>Tailwind CSS</code> for this project. I knew I also wanted to connect to an API for this app, and I came up with the idea of generating Pokémon cards on the basis that there would be plenty of information available to display and the design of the card would require the use of a wide range of Tailwind classes. 
                                <br/><br/>
                                Coding this project certainly helped me gain familiarity with the way Tailwind applies CSS rules through classes. I had to pay close attention to fundamental layout properties such as <code className='text-[#1EB854]'>padding</code> and <code className='text-[#1EB854]'>margin</code> to a degree I had not before, in order to get the cards looking as close to the originals as possible &#40;often challenging as the app displays different kinds of information to said original cards, just in a similar format&#41;.
                                <br/><br/>
                                One formatting challenge that was fun to conquer was mimicing a badge on the card that has text wrapped around the top of it. Rather than load a pre-rendered image, I decided to learn how to create an <code className='text-[#1EB854]'>svg</code> for this purpose. As with the rest of the card, I am very satisfied with how close I was able to get to the deisgn that inspired it.
                                <br/><br/>
                                This project also allowed me to gain experience with API calls within React. After the initial API call, the app makes further calls to other endpoints based on the information received from the first call. I had to think logically about how to achieve this with <code className='text-[#1EB854]'>useEffect</code> hooks, and how to deal with errors, such as when a user types in the ID of a Pokémon for which the API as yet has only limited data.</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full flex justify-center items-center sm:col-span-2 lg:col-span-1 lg:pb-20">
                        <a href='https://github.com/hummus-erectus' target="_blank">
                            <div className="grid cursor-pointer transition-transform duration-200 hover:scale-105 ">
                                <figure className='flex text-[120px] justify-center mb-6'><FaGithub /></figure>
                                <h3 className="font-bold">
                                    See more projects on GitHub
                                </h3>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects