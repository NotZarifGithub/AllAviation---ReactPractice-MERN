import { GiCommercialAirplane } from "react-icons/gi";
import { MdAirlines } from "react-icons/md";
import { PiAirplaneLandingLight } from "react-icons/pi";
import { GiHelicopter } from "react-icons/gi";
import ExploreCard from '../components/ExploreCard';

const Explore = () => {

  const exploreData = [
    {
      title: 'Aircraft',
      desc: "Explore detailed aircraft information, covering everything from engineering specifics to operational insights",
      logo: <GiCommercialAirplane />,
      path: '/explore/aircraft',
    },
    {
      title: 'Airline',
      desc: "Discover comprehensive details about different airlines, from operational strategies to fleet specifics",
      logo: <MdAirlines />,
      path: '/explore/airline',
    },
    {
      title: 'Airport',
      desc: "Uncover insights into various airports, exploring facilities, services, and operational intricacies",
      logo: <PiAirplaneLandingLight />,
      path: '/explore/airport',
    },
    {
      title: 'Helicopter',
      desc: "Delve into the world of helicopters, exploring their unique features and operational functionalities",
      logo: <GiHelicopter />,
      path: '/explore/helicopter',
    },
    {
      title: 'Countries AlphaCode',
      desc: "Explore all the alpha2code and alpha3code for specified countries",
      logo: <GiCommercialAirplane />,
      path: '/explore/countries-alphacode',
    },
    {
      title: 'Aviation Taxes',
      desc: "Explore airline finances, understanding operational strategies, fleet details, and how aviation taxes shape the industry.",
      logo: <MdAirlines />,
      path: '/explore/aviation-taxes',
    },
  ];
  
  return (
    <main>

      {/* categories */}
      <section className="flex px-[20px] max-w-[1200px] mx-auto flex-col gap-5">
        <div className="py-10 ">
          <h1 className="mb-4 text-4xl font-bold">Explore the World of Aviation</h1>
          <p className="font-medium">
            Welcome to our comprehensive aviation hub where you can delve into a vast array of information about aircraft, airlines, airports, etc. Whether youre a passionate aviation enthusiast, a student studying aviation, or someone fascinated by the intricacies of the aviation industry, this is the place to satisfy your curiosity.
          </p>
          <p className="mt-4 font-medium">
            Navigate through the categories below and uncover detailed insights, from engineering specifics to operational strategies, and gain a deeper understanding of the fascinating world of aviation.
          </p>
        </div>
        <h1 className='font-semibold md:text-xl lg:text-2xl'>
          Categories
        </h1>
        <div className='flex flex-col gap-5 md:grid md:grid-cols-2'>
          {exploreData.map((item, index) => (
            <ExploreCard 
              to={item.path}
              key={index}
              logo={item.logo}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Explore