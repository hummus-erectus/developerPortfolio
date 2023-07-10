import runner from '../assets/runner.webp'

function Banner() {
    return (
        <section id='home' className="mt-20 scroll-mt-[96px] md:mt-24 mx-auto w-[95%] md:w-auto container grid items-center rounded-[50px] bg-base-100 md:grid-cols-2 p-8">
            <div className="max-w-[640px]  text-center md:text-left items-center justify-center">
                <h1 className="mb-5 text-3xl md:text-5xl lg:text-6xl  font-bold">Japan-based full stack developer</h1>
                <h2 className="mb-5 text-xl md:text-3xl lg:text-4xl text-primary font-bold ">Robert Grayson</h2>
                <p className="mb-5 text-base-content md:text-xl lg:text-2xl">Keeping <span className='text-primary'>pace</span> with new technologies.<br/> Scaling the <span className='text-primary'>heights</span> of creativity.<br/> Breathing <span className='text-primary'>fresh air</span> into your online experience.</p>
            </div>
            <img src={runner} alt={'Trail runner coding'} className='max-w-[90%] mx-auto my-5'/>
        </section>
    )
}

export default Banner