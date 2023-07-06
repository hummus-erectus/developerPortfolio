import { useState } from "react"
import { toast } from 'react-toastify'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&")
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, email, message }),
        })
          .then(() => {
            toast.success('Message sent!')
            setName('')
            setEmail('')
            setMessage('')
            })
          .catch((error) => {
            toast.error("Oops! Something went wrong.")
            console.log(error)
          })
    }

    return (
        <section id='contact' className="my-10 scroll-mt-[96px] mx-auto w-[95%] md:w-auto container rounded-[50px] bg-base-100 p-8 items-center">
            <div>
                <h2 className="mb-5 text-3xl text-primary font-bold text-center">Contact</h2>
                <form
                    netlify
                    name="contact"
                    onSubmit={handleSubmit}
                    className="md:w-[75%] lg:w-[50%] flex flex-col w-full md:py-8 mt-8 md:mt-0 mx-auto">
                    <h3 className="text-info sm:text-2xl text-lg mb-1 font-medium title-font">
                        Get in Touch
                    </h3>
                    <p className="leading-relaxed mb-5">
                        Have any questions? Want to work together? Feel free to connect with me on <a href='https://www.linkedin.com/in/rob-grayson/' target="_blank" className="font-bold">LinkedIn</a> or send me a message:
                    </p>
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        className="input input-bordered w-full py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          className="input input-bordered w-full py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label htmlFor="message" className="label">
                          <span className="label-text">Message</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={message}
                          className="textarea textarea-bordered w-full h-24 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          onChange={(e) => setMessage(e.target.value)}
                          maxLength={10000}
                          required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary py-2 px-6">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact