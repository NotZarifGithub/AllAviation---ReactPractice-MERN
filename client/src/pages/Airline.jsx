import axios from "axios"
import { useState } from "react"
import TitleCard from "../components/TitleCard"
import FormCard from "../components/FormCard"

const Airline = () => {
  const [formDataAirlineSearch, setFormDataAirlineSearch] = useState({})
  const [formDataAirlineAircraft, setFormDataAirlineAircraft] = useState({})
  const [airlineSearchData, setAirlineSearchData] = useState({})
  const [airlineAircraftData, setAirlineAircraftData] = useState({})

  // handle change for airline search
  const handleChangeAirlineSearch = (e) => {
    setFormDataAirlineSearch({
      ...formDataAirlineSearch,
      [e.target.id]: e.target.value
      
    })
    console.log(formDataAirlineSearch)
  }

  // handle submit for airline search
  const handleSubmitAirlineSearch = async (e) => {
    e.preventDefault()

    try {
      const airlineSearchData = await axios.get('/api/airline/airline-search', { 
      params: {
        icao: formDataAirlineSearch.icao
      }
    })
    setAirlineSearchData(airlineSearchData.data)

    } catch (error) {
      console.error(error)
    }
  }

  // handle change for airline search
  const handleChangeAirlineAircraft = (e) => {
    setFormDataAirlineAircraft({
      ...formDataAirlineAircraft,
      [e.target.id]: e.target.value
    })

    console.log(formDataAirlineAircraft)
  }

  // handle submit for airline search
  const handleSubmitAirlineAircraft = async (e) => {
    e.preventDefault()

    try {
      const airlineAircraftData = await axios.get("/api/airline/airline-aircraft", {
        params: {
          ident: formDataAirlineAircraft.ident
        }
      })
      setAirlineAircraftData(airlineAircraftData.data)

    } catch (error) {
      console.error(error)
    }
  }

  console.log(airlineAircraftData)
  return (
    <main className="flex flex-col gap-10">

      {/* Airline Search */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Airline Search"}
          description={"Provides a list of airlines associated with a specified airline ICAO code."}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* form */}
        
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airline details"}
              title={"Airline ICAO Code"}
              titleForm={"icao"}
              handleChange={handleChangeAirlineSearch}
              handleSubmit={handleSubmitAirlineSearch}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="font-medium text-lg">Details</h1>

            {airlineSearchData.length > 0 && (
              <div className="grid md:grid-cols-2 text-sm gap-2">
                {airlineSearchData.map((item, index) => (
                  <div key={index}>
                    <p>
                      <span className="font-medium text-base">
                        Identification: <span className="border-b-2 border-black">{item.ident}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        ICAO Code: <span className="border-b-2 border-black">{item.icao}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        IATA Code: <span className="border-b-2 border-black">{item.iata}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Airline Name: <span className="border-b-2 border-black">{item.name}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Country: <span className="border-b-2 border-black">{item.country}</span>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}

          </section>
        </div>
      </section>

      {/* Airline Aircrafts */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Airline Aircrafts"}
          description={"Provide a list of 15 aircraft registration numbers for a particular airline."}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* form */}

          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airline details"}
              title={"Airline Identification"}
              titleForm={"ident"}
              handleChange={handleChangeAirlineAircraft}
              handleSubmit={handleSubmitAirlineAircraft}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="font-medium text-lg">Details</h1>

            {airlineAircraftData.length > 0 && (
              <div className="grid lg:grid-cols-3 text-sm gap-2 md:grid-cols-2">
                {airlineAircraftData
                .filter((item, index) => index < 15)
                .map((item, index) => (
                  <div key={index}>
                    Aircraft {index + 1} = <span className="border-b-2 border-black">{item}</span>
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


export default Airline