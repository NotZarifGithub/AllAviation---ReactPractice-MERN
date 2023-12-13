import axios from "axios"
import { useState } from "react"

const Airport = () => {
  const [formData, setFormData] = useState({})
  const [cityData, setCityData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
      
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const cityData = await axios.get('/api/airport/get-airport', { 
      params: {
        city: formData.city, 
      }
    })
    setCityData(cityData.data)

    } catch (error) {
      console.error(error)
    }
  }

  console.log(cityData)

  return (
    <main>
      <section className="flex px-[20px] max-w-[1200px] mx-auto gap-5 lg:flex-row flex-col py-[20px] ">

        <section className="max-w-[500px] flex-1 ">

          {/* form */}
          <div className="flex  border rounded-md  items-start p-[40px] gap-5 shadow-md justify-center flex-col md:px-[50px] w-full ">
            <h1 className="font-semibold text-lg md:text-xl md:py-[10px] md:tracking-[5px]">
              Enter city details
            </h1>
            <form 
              action=""
              className="flex flex-col gap-6 w-full"
              onSubmit={handleSubmit}
            >

              {/* manufacturer input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="city"
                  className=" text-sm font-medium"
                >
                  City
                </label>
                <input
                type="text"
                id="city" 
                name="city"
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

          <div className="grid md:grid-cols-2 gap-10">
            {cityData.length > 0 && (
              cityData.map((item, index) => (
                <div key={index} className="flex flex-col text-sm gap-3">
                  <div>
                    City = <span className="font-medium text-base border-b-2 border-black">{cityData[index].city}</span>
                  </div>

                  <div>
                    Country = <span className="font-medium text-base border-b-2 border-black">{cityData[index].country}</span>
                  </div>

                  <div>
                    Elevation = <span className="font-medium text-base border-b-2 border-black">{cityData[index].elevation_ft} ft</span>
                  </div>

                  <div>
                    IATA = <span className="font-medium text-base border-b-2 border-black">{cityData[index].iata}</span>
                  </div>

                  <div>
                    ICAO = <span className="font-medium text-base border-b-2 border-black">{cityData[index].icao}</span>
                  </div>

                  <div>
                    Latitude = <span className="font-medium text-base border-b-2 border-black">{cityData[index].latitude}</span>
                  </div>

                  <div>
                    Longitude = <span className="font-medium text-base border-b-2 border-black">{cityData[index].longitude}</span>
                  </div>

                  <div>
                    Name = <span className="font-medium text-base border-b-2 border-black">{cityData[index].name}</span>
                  </div>

                  <div>
                    Region = <span className="font-medium text-base border-b-2 border-black">{cityData[index].region}</span>
                  </div>

                  <div>
                    Timezone = <span className="font-medium text-base border-b-2 border-black">{cityData[index].timezone}</span>
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

export default Airport