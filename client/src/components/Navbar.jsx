import { MdConnectingAirports } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <header>
      <section className="p-[20px] flex items-center justify-between max-w-[1200px] mx-auto lg:py-[40px]">

        {/* home button */}
        
        <Link 
          to={'/'}
          className="flex items-center text-xl md:text-2xl lg:text-3xl lg:gap-1"
        >
          {/* text */}
          <h1 className=" font-semibold tracking-tighter">
            AllAviation
          </h1>

          {/* logo */}
          <div className="text-3xl md:text-4xl">
            <MdConnectingAirports />
          </div>
        </Link>

        {/* navlinks */}

        <ul className="lg:flex hidden gap-3 font-medium">
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              Get Started
            </Link>
          </li>
        </ul>

        {/* hamburger */}

        <div className="lg:hidden">

          {/* logo */}
          <div className="text-2xl">
            <RxHamburgerMenu />
          </div>
        </div>
        
      </section>
    </header>
  )
}

export default Navbar