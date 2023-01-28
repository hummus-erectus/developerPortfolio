import runner from '../assets/runner.webp'

function Banner() {
    return (
        <div className="mt-20 md:mt-32 mx-auto w-[95%] md:w-auto container grid items-center rounded-[50px] bg-neutral md:grid-cols-2 p-8">
            <div className="max-w-[640px]  text-center md:text-left items-center justify-center">
                <h1 className="mb-5 text-5xl lg:text-6xl  font-bold">Japan-based frontend developer</h1>
                <h2 className="mb-5 text-3xl lg:text-4xl text-[#1EB854] font-bold ">Robert Grayson</h2>
                <p className="mb-5 text-xl lg:text-2xl">Coding the peaks, running the distance, pushing limits on the frontend</p>  
            </div>
            <img src={runner} alt={'Trail runner coding'} className='max-w-[90%] mx-auto my-10'/>
        </div>
    )
}

export default Banner