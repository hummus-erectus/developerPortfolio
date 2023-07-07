import toeflScreen from '../assets/toeflScreen.webp'
import pokereactScreen from '../assets/pokereactScreen.webp'
import lemonScreen from '../assets/lemonScreen.webp'
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    id: "project1",
    image: lemonScreen,
    title: "Little Lemon Restaurant (WIP)",
    description: "Capstone project for Meta Front-End Developer Professional Certificate, with added back-end features",
    badges: ["React", "MongoDB", "Node.js", "Firebase"],
    modalContent: (
      <>
        <h3 className="text-2xl font-bold text-center text-primary mb-10">Little Lemon Restaurant (WIP)</h3>
        <div className='grid lg:grid-cols-2 gap-8 mb-10'>
          <div className='grid items-center justify-center'>
            <h4 className="text-lg font-bold text-info">Brief</h4>
            <p className="py-4">A homepage for a fictional Mediterranean restaurant in Chicago. Users can place orders for delivery or make a reservation to eat in.</p>
            <a className="btn normal-case btn-primary w-48" href="https://little-lemon-vegan-restaurant.netlify.app/" target="_blank">Visit site</a>
          </div>
          <a href="https://little-lemon-vegan-restaurant.netlify.app/" target="_blank" className='order-first lg:order-last'>
            <img className="drop-shadow-lg" src={lemonScreen} alt="Little Lemon Restaurant"/>
          </a>
        </div>
        <div>
          <h4 className="text-lg font-bold text-info">Story</h4>
          <p className="py-4">The capstone project of the Meta Front-End Developer Professional Certificate, a 7-course online specialization covering front-end fundamentals, advanced react, UI/ UX concepts and more, requires students to submit a simple website for a restaurant. I was provided a brief and style guide, and had to use the skills I picked up during the specialization to complete the task.
          <br/><br/>
          THe original brief was fairly simple, requiring a main homepage and a reservation page. I made sure to include proper validation for the reservation form, and implemented unit tests to check the setup was correct. I added components such as cards for the specials and a carousel for testimonials on the homepage, and used vanilla <code className='text-primary'>CSS</code> for all styling.
          <br/><br/>
          Once I met all the requirements for the course, I decided to take the opportunity to add more features and learn some simple backend concepts. I added a <code className='text-primary'>node.js</code> server to interface with a database that would store menu items and categories. This allowed me to build a food ordering system. For payments, I used the <code className='text-primary'>Stripe</code> API, which allows mock payments for testing purposes.
          <br/><br/>
          With the payment system implemented, with orders being recorded in the database, I used <code className='text-primary'>Firebase</code> for user authentication. While a registration/ login system currently exists, I would like to link it to the order and reservation systems in future so users can see their past activity and save their personal details. The project is currently hosted on Netlify for the front-end and Render for the back-end. As the base tier of Render only activates the server when called, the 'Specials' and 'Menu' sections may take some extra time to load on initialization.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "project2",
    image: toeflScreen,
    title: "TOEFL Speaking App",
    description: "Web app for students to practice the independent speaking section of the TOEFL exam",
    badges: ["React", "Custom API"],
    modalContent: (
      <>
        <h3 className="text-2xl font-bold text-center text-primary mb-10">TOEFL Speaking App</h3>
        <div className='grid lg:grid-cols-2 gap-8 mb-10'>
          <div className='grid items-center justify-center'>
            <h4 className="text-lg font-bold text-info">Brief</h4>
            <p className="py-4">A web app for practicing TOEFL independent speaking questions. The user can select a question from a list, choose a question at random, or input their own question. The question will appear on screen along with a &#40;customizable&#41; timer. Users have the option of allowing the app to access their microphone, recording their answer and displaying the three most recent recordings for them to download.</p>
            <a className="btn normal-case btn-primary w-48" href="https://toefl-speaking.netlify.app/" target="_blank">Visit site</a>
          </div>
          <a href="https://toefl-speaking.netlify.app/" target="_blank" className='order-first lg:order-last'>
            <img className="drop-shadow-lg" src={toeflScreen} alt="TOEFL Speaking App"/>
          </a>
        </div>
        <div>
          <h4 className="text-lg font-bold text-info">Story</h4>
          <p className="py-4">As a TOEFL teacher, I often have students practice timed speaking exercises in the classroom, but the usual method of setting up a timer and writing a question on the board is inefficient. I wanted to create a tool that would allow teachers to use a classroom PC and projector to quickly load a question or compose their own. 
          <br/><br/>
          As motivated students often ask how they can improve their speaking skills at home, I decided to extend the project so it would be student-friendly. I designed the interface to be simple to understand and use. I also added a 'tips' section to give students advice on how to complete the task.
          <br/><br/>
          I learned a lot through making this project. At first, refreshing the page when it displayed a question would return users to the question select page, requiring them to choose a question from scratch. I implemented <code className='text-primary'>react-router</code> to deal with this issue and allow back-button functionality. I also made use of <code className='text-primary'>session-storage</code> to keep the currently-selected question in memory.
          <br/><br/>
          To gain experience with APIs I choose to move the question data to a separate <code className='text-primary'>static API</code> that I could add questions to at a later date. I am currently in the process of increasing the number of stock questions by feeding appropriate prompts to <code className='text-primary'>ChatGPT</code> and curating the results.</p>
        </div>
      </>
    ),
  },
  {
    id: "project3",
    image: pokereactScreen,
    title: "PokéReact",
    description: "Fetches data from PokeApi and displays as a classic Pokémon card",
    badges: ["React", "Tailwind CSS", "RESTful API"],
    modalContent: (
      <>
        <h3 className="text-2xl font-bold text-center text-primary mb-10">PokéReact</h3>
        <div className='grid lg:grid-cols-2 gap-8 mb-10'>
          <div className='grid items-center justify-center'>
            <h4 className="text-lg font-bold text-info">Brief</h4>
            <p className="py-4">A web app for practicing TOEFL independent speaking questions. The user can select a question from a list, choose a question at random, or input their own question. The question will appear on screen along with a &#40;customizable&#41; timer. Users have the option of allowing the app to access their microphone, recording their answer and displaying the three most recent recordings for them to download.</p>
            <a className="btn normal-case btn-primary w-48" href="https://toefl-speaking.netlify.app/" target="_blank">Visit site</a>
          </div>
          <a href="https://toefl-speaking.netlify.app/" target="_blank" className='order-first lg:order-last'>
            <img className="drop-shadow-lg" src={toeflScreen} alt="TOEFL Speaking App"/>
          </a>
        </div>
        <div>
          <h4 className="text-lg font-bold text-info">Story</h4>
          <p className="py-4">As a TOEFL teacher, I often have students practice timed speaking exercises in the classroom, but the usual method of setting up a timer and writing a question on the board is inefficient. I wanted to create a tool that would allow teachers to use a classroom PC and projector to quickly load a question or compose their own. 
          <br/><br/>
          As motivated students often ask how they can improve their speaking skills at home, I decided to extend the project so it would be student-friendly. I designed the interface to be simple to understand and use. I also added a 'tips' section to give students advice on how to complete the task.
          <br/><br/>
          I learned a lot through making this project. At first, refreshing the page when it displayed a question would return users to the question select page, requiring them to choose a question from scratch. I implemented <code className='text-primary'>react-router</code> to deal with this issue and allow back-button functionality. I also made use of <code className='text-primary'>session-storage</code> to keep the currently-selected question in memory.
          <br/><br/>
          To gain experience with APIs I choose to move the question data to a separate <code className='text-primary'>static API</code> that I could add questions to at a later date. I am currently in the process of increasing the number of stock questions by feeding appropriate prompts to <code className='text-primary'>ChatGPT</code> and curating the results.</p>
        </div>
      </>
    ),
  },
]

function Project({ project }) {
  const { id, image, title, description, badges, modalContent } = project

  return (
    <>
      <label htmlFor={id} className="h-full flex justify-center align-center card col-span-1 cursor-pointer bg-secondary transition-transform duration-200 hover:scale-105">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body text-secondary-content">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {badges.map((badge) => (
              <div className="badge badge-outline" key={badge}>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </label>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-[1440px]">
          <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          {modalContent}
        </div>
      </div>
    </>
  )
}

function Projects() {
  return (
    <section id="projects" className="my-10 scroll-mt-[96px] mx-auto w-[95%] md:w-auto container rounded-[50px] bg-base-100 p-8">
      <div>
        <h2 className="mb-5 text-3xl text-primary font-bold text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-start">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
          <div className="h-full w-full flex justify-center items-center lg:col-span-3 xl:col-span-1 lg:pb-20">
            <a href="https://github.com/hummus-erectus" target="_blank">
              <div className="grid cursor-pointer transition-transform duration-200 hover:scale-105 ">
                <figure className="flex text-[120px] justify-center mb-6">
                  <FaGithub />
                </figure>
                <h3 className="font-bold">See more projects on GitHub</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects