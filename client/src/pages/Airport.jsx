import axios from "axios"
import { useState } from "react"
import TitleCard from "../components/TitleCard"
import FormCard from "../components/FormCard"

const Airport = () => {
  const [airportSearchformData, airportSearchsetFormData] = useState({})
  const [airportSearchData, setAirportSearchData] = useState({})

  const handleChangeAirportSearch = (e) => {
    airportSearchsetFormData({
      ...airportSearchformData,
      [e.target.id]: e.target.value
      
    })
  }

  const handleSubmitAirportSearch = async (e) => {
    e.preventDefault()

    try {
      const airportSearchData = await axios.get('/api/airport/airport-search', { 
      params: {
        city: airportSearchformData.city, 
      }
    })
    setAirportSearchData(airportSearchData.data)

    } catch (error) {
      console.error(error)
    }
  }

  console.log(airportSearchData)

  return (
    <main className="flex flex-col gap-10">

      {/* Airport Search */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Airport Search"}
          description={"Provides a list of airports associated with a specified country."}
        />

        <div className="flex flex-col gap-5 md:flex-row">

          {/* form */}
        
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter aircraft details"}
              title={"Country Code"}
              titleForm={"model"}
              handleChange={handleChangeAirportSearch}
              handleSubmit={handleSubmitAirportSearch}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="text-lg font-medium">Airport Details</h1>

            {airportSearchData.length > 0 && (
              <div className="grid gap-2 text-sm md:grid-cols-2">
                {airportSearchData.map((item, index) => (
                  <div key={index}>
                    <p>
                      <span className="text-base font-medium">
                        ICAO Code: <span className="border-b-2 border-black">{item.ident}</span>
                      </span>
                    </p>
                    {item.iata && (
                      <p>
                        <span className="text-base font-medium">
                          IATA Code: <span className="border-b-2 border-black">{item.iata}</span>
                        </span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
          
        </div>
      </section>

     

    </main>
  )
}

export default Airport