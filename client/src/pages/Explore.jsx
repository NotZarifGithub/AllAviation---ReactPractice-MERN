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
      title: 'Real-Time Flight Tracker',
      desc: "Explore live updates on aircraft, including real-time operations which providing a comprehensive view of the aviation world.",
      logo: <GiCommercialAirplane />,
      path: '/explore/flight-tracker',
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