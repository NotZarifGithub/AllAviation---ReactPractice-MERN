import axios from "axios"
import { useState } from "react"

const Airline = () => {
  const [formData, setFormData] = useState({})
  const [airlineData, setAirlineData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
      
    })
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const airlineData = await axios.get('/api/airline/get-airline', { 
      params: {
        country: formData.airlineCountry
      }
    })
      setAirlineData(airlineData.data)

    } catch (error) {
      console.error(error)
    }

  }

  console.log(airlineData)

  return (
    <main>
      <section className="flex px-[20px] max-w-[1200px] mx-auto gap-5 lg:flex-row flex-col py-[20px] ">

        <section className="max-w-[500px] flex-1 ">

          {/* form */}
          <div className="flex  border rounded-md  items-start p-[40px] gap-5 shadow-md justify-center flex-col md:px-[50px] w-full ">
            <h1 className="font-semibold text-lg md:text-xl md:py-[10px] md:tracking-[5px]">
              Enter airline details
            </h1>
            <form 
              action=""
              className="flex flex-col gap-6 w-full"
              onSubmit={handleSubmit}
            >

              {/* airline name input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="airlineCountry"
                  className=" text-sm font-medium"
                >
                  Country
                </label>
                <input
                type="text"
                id="airlineCountry" 
                name="airlineCountry"
                className="border rounded-lg py-[5px] px-[15px] w-full text-sm"
                onChange={handleChange}
                />
              </div>
              
              <div className="py-[10px] md:py-[20px]">
                <button
                  type="submit"
                  className="border rounded-full py-[5px] px-[15px] w-full"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* output */}
        <section className="flex-1 flex flex-col gap-4 py-[20px]">
          <h1 className="font-medium text-lg">
            Details
          </h1>

          <div className="grid md:grid-cols-2">

            {airlineData.length > 0 && (
              airlineData.map((item, index) => (
                <div key={index} className="flex flex-col text-sm gap-3 fo">
                  <div>
                    Name = <span className="font-medium text-base border-b-2 border-black">{item.name}</span>
                  </div>

                  <div>
                    IATA = <span className="font-medium text-base border-b-2 border-black">{item.iata}</span>
                  </div>

                  <div>
                    ICAO = <span className="font-medium text-base border-b-2 border-black">{item.icao}</span>
                  </div>

                  {Object.entries(item.fleet).slice(0, -1).map(([aircraftType, count], index) => (
                    <div key={index} className="">
                      Fleet {index + 1} = <span className="font-medium text-base border-b-2 border-black">{aircraftType} ({count})</span>
                    </div>
                  ))}

                  {/* Display total fleet count */}
                  <div>
                    Total Fleet = <span className="font-medium text-base border-b-2 border-black">{item.fleet.total}</span>
                  </div>
                </div>
              ))
            )}
          </div>

        </section>
      </section>
    </main>
  )
}

export default Airline