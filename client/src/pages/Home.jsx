import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>

      {/* hero section */}
      <section className="flex px-[40px] max-w-[1200px] mx-auto lg:flex-row flex-col md:px-[20px]">

        {/* website information */}
        <section className="flex flex-col gap-10 py-[30px] lg:flex-1">

          <div className="flex flex-col text-center gap-4 md:text-start lg:max-w-[500px] ">
            <h1 className="text-3xl font-bold tracking-[3px] leading-[40px] md:text-4xl lg:text-5xl lg:leading-[70px]">
              Explore the Skies with AllAviation
            </h1>
            <div className="w-full flex justify-center">
              <p className="text-sm font-medium leading-6">
              Welcome to AllAviation! Whether youre a seasoned pilot, aspiring aviator, or simply fascinated by flight, our platform is your ultimate go-to for comprehensive insights into the world of aviation.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 ">
            <div className="flex gap-3 items-start">
              <div className="text-[#34b233] pt-[2px] text-2xl">
                <CiCircleCheck />
              </div>
              <p className="font-semibold text-xs leading-5">
                Dive into detailed resources on aircraft models, airline operations, and airport facilities.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-[#34b233] pt-[2px] text-2xl">
                <CiCircleCheck />
              </div>
              <p className="font-semibold text-xs leading-5">
                Join a vibrant community of aviation enthusiasts, pilots, and industry experts.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-[#34b233] pt-[2px] text-2xl">
                <CiCircleCheck />
              </div>
              <p className="font-semibold text-xs leading-5">
                Get real-time updates on the latest aviation developments.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-[#34b233] pt-[2px] text-2xl">
                <CiCircleCheck />
              </div>
              <p className="font-semibold text-xs leading-5">
                Explore tailored content based on your interests, whether its aircraft engineering or airline management.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-[#34b233] pt-[2px] text-2xl">
                <CiCircleCheck />
              </div>
              <p className="font-semibold text-xs leading-5">
                Our platform streamlines your aviation journey with automation and insightful reporting tools.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-[#34b233] pt-[2px] text-2xl">
                <CiCircleCheck />
              </div>
              <p className="font-semibold text-xs leading-5">
                Embrace best practices with standardized information and reliable resources for a seamless exploration.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start py-[20px]">
            <button className="border-2 rounded-lg border-black text-lg w-[200px] py-[5px]">
              <Link to={'/explore'}>
                Explore
              </Link>
            </button>
          </div>
        </section>

        {/* hero image */}
        <section className="lg:flex-1">
          hello
        </section>
      </section>
    </main>
  )
}

export default Home