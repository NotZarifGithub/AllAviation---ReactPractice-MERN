import axios from "axios"
import { useState } from "react"
import TitleCard from "../components/TitleCard"
import FormCard from "../components/FormCard"

const Airport = () => {
  const [airportSearchFormData, setAirportSearchFormData] = useState({})
  const [airportInfoFormData, setAirportInfoFormData] = useState({})
  const [airportSearchData, setAirportSearchData] = useState({})
  const [airportInfoData, setAirportInfoData] = useState({})

  const handleChangeAirportSearch = (e) => {
    setAirportSearchFormData({
      ...airportSearchFormData,
      [e.target.id]: e.target.value
    })
    console.log(airportSearchFormData)
  }

  const handleSubmitAirportSearch = async (e) => {
    e.preventDefault()

    try {
      const airportSearchData = await axios.get('/api/airport/airport-search', { 
      params: {
        country: airportSearchFormData.country, 
      }
    })
    setAirportSearchData(airportSearchData.data)

    } catch (error) {
      console.error(error)
    }
  }
  
  const handleChangeAirportInfo = (e) => {
    setAirportInfoFormData({
      ...airportInfoFormData,
      [e.target.id]: e.target.value
    })
    console.log(airportInfoFormData)
  }

  const handleSubmitAirportInfo = async (e) => {
    e.preventDefault()
    try {
      const airportInfoData = await axios.get("/api/airport/airport-info", {
        params: {
          icao: airportInfoFormData.icao
        }
      })
      setAirportInfoData(airportInfoData.data)

    } catch (error) {
      console.error(error)
    }
  }  

  console.log(airportInfoData)

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
              mainTitle={"Enter airport details"}
              title={"Country Code"}
              titleForm={"country"}
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

     {/* Airport Info */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Airport Info"}
          description={"Provides comprehensive details about airports identified by their ICAO code."}
        />

        <div className="flex flex-col gap-5 md:flex-row">

          {/* form */}
        
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airport details"}
              title={"Airport ICAO Code"}
              titleForm={"icao"}
              handleChange={handleChangeAirportInfo}
              handleSubmit={handleSubmitAirportInfo}
            />
          </div>
          
          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="text-lg font-medium">Airport Details</h1>
            {airportInfoData.length > 0 && (
              <div className="grid gap-2 text-sm md:grid-cols-2">
                {airportInfoData.map((item, index) => (
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
                    <p>
                      <span className="text-base font-medium">
                        Airport Name: <span className="border-b-2 border-black">{item.name}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        City: <span className="border-b-2 border-black">{item.city}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Country: <span className="border-b-2 border-black">{item.country}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Latitude: <span className="border-b-2 border-black">{item.pos_lat}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Longitude: <span className="border-b-2 border-black">{item.pos_lng}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Public: <span className="border-b-2 border-black">{item.public.toString()}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Owner: <span className="border-b-2 border-black">{item.owner}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Operator: <span className="border-b-2 border-black">{item.operator}</span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Local Time: <span className="border-b-2 border-black">{item.local_time}</span>
                      </span>
                    </p>
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