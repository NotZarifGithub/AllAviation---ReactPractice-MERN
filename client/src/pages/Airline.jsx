import axios from "axios"
import { useState } from "react"
import TitleCard from "../components/TitleCard"
import FormCard from "../components/FormCard"

const Airline = () => {
  const [formDataAirlineSearch, setFormDataAirlineSearch] = useState({})
  const [formDataAirlineAircraft, setFormDataAirlineAircraft] = useState({})
  const [formDataAircraftStatistics, setFormDataAircraftStatistics] = useState({})
  const [formDataAirlineInfo, setFormDataAirlineInfo] = useState({})
  const [airlineSearchData, setAirlineSearchData] = useState({})
  const [airlineAircraftData, setAirlineAircraftData] = useState({})
  const [airlineStatisticsData, setAirlineStatisticsData] = useState({})
  const [airlineInfoData, setAirlineInfoData] = useState({})


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

  // handle change for airline statistics
  const handleChangeAirlineStatistics = (e) => {
    setFormDataAircraftStatistics({
      ...formDataAircraftStatistics,
      [e.target.id]: e.target.value
    });
    console.log(formDataAircraftStatistics);
  }

  // handle submit for airline statistics
  const handleSubmitAirlineStatistics = async (e) => {
    e.preventDefault()

    try {
      const airlineStatisticsData = await axios.get("/api/airline/airline-statistics", {
        params: {
          icao: formDataAircraftStatistics.icao
        }
      })
      setAirlineStatisticsData(airlineStatisticsData.data)

    } catch (error) {
      console.error(error)
    }
  }

    // handle change for airline info
    const handleChangeAirlineInfo = (e) => {
      setFormDataAirlineInfo({
        ...formDataAirlineInfo,
        [e.target.id]: e.target.value
      })
  
      console.log(formDataAirlineInfo)
    }
  
    // handle submit for airline info
    const handleSubmitAirlineInfo = async (e) => {
      e.preventDefault()
  
      try {
        const airlineInfoData = await axios.get("/api/airline/airline-info", {
          params: {
            icao: formDataAirlineInfo.icao
          }
        })
        setAirlineInfoData(airlineInfoData.data)
  
      } catch (error) {
        console.error(error)
      }
    }

  console.log(airlineStatisticsData)

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

      {/* Airline Statistics */}
            
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Airline Statistics"}
          description={"Provides in-depth statistical information for airlines based on their ICAO code."}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* form */}

          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airline details"}
              title={"Airline ICAO Code"}
              titleForm={"icao"}
              handleChange={handleChangeAirlineStatistics}
              handleSubmit={handleSubmitAirlineStatistics}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="font-medium text-lg">
              Details
            </h1>

            {airlineStatisticsData.length > 0 && (
              <div className="grid md:grid-cols-2 text-sm gap-2">
                {airlineStatisticsData.map((item, index) => (
                  <div key={index}>
                    <p>
                      <span className="font-medium text-base">
                        Identification: <span className="border-b-2 border-black">{item.ident}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Total Flight in 1 Month: <span className="border-b-2 border-black">{item.flights_30_days}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Total Flight in 1 Week: <span className="border-b-2 border-black">{item.flights_7_days}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Oldest Aircraft Age: <span className="border-b-2 border-black">{item.oldest_plane_age}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Newest Aircraft Age: <span className="border-b-2 border-black">{item.newest_plane_age}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Top Airports in 1 Month: <span className="border-b-2 border-black">{Object.keys(item.top_airports_30_days).join(', ')}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Top Countries in 1 Month: <span className="border-b-2 border-black">{Object.keys(item.top_countries_30_days).join(', ')}</span>
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>

      {/* Airline Info */}
            
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Airline Info"}
          description={"Provides detailed information about airlines identified by their ICAO codes."}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* form */}

          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airline details"}
              title={"Airline ICAO Code"}
              titleForm={"icao"}
              handleChange={handleChangeAirlineInfo}
              handleSubmit={handleSubmitAirlineInfo}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="font-medium text-lg">
              Details
            </h1>

            {airlineInfoData.length > 0 && (
              <div className="grid md:grid-cols-2 text-sm gap-2">
                {airlineInfoData.map((item, index) => (
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
                        Callsign: <span className="border-b-2 border-black">{item.callsign}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Country: <span className="border-b-2 border-black">{item.country}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Founding Date: <span className="border-b-2 border-black">{item.founding_date}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Start Date: <span className="border-b-2 border-black">{item.start_date}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Website: <span className="border-b-2 border-black">{item.website}</span>
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-base">
                        Alliance: <span className="border-b-2 border-black">{item.alliance}</span>
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


export default Airline