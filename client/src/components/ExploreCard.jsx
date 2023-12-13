import { Link } from "react-router-dom"

const ExploreCard = ({to, logo, title, desc}) => {
  return (
    <>
      <Link 
        to={to}
        className='border rounded-md flex items-center p-[15px] gap-5 drop-shadow-lg shadow-md'
      >
        <div className='rounded-full border p-[10px] text-3xl bg-black text-white'>
          {logo}
        </div>
        <div>
          <h2 className='text-lg font-medium tracking-[2px]'>
            {title}
          </h2>
          <p className='text-xs  md:flex'>
            {desc}
          </p>
        </div>
      </Link>
    </>
  )
}

export default ExploreCard