import axios from "axios"
import { useState } from "react"

const Aircraft = () => {
  const [formData, setFormData] = useState({})
  const [aircraftTypeData, setAircraftTypeData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
      
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const aircraftTypeData = await axios.get('/api/aircraft/get-aircraft', { 
      params: {
        manufacturer: formData.aircraftManufacturer, 
        model: formData.aircraftModel
      }
    })
      setAircraftTypeData(aircraftTypeData.data)

    } catch (error) {
      console.error(error)
    }

  }

  console.log(aircraftTypeData)

  return (
    <main>
      <section className="flex px-[20px] max-w-[1200px] mx-auto gap-5 lg:flex-row flex-col py-[20px] ">

        <section className="max-w-[500px] flex-1 ">

          {/* form */}
          <div className="flex  border rounded-md  items-start p-[40px] gap-5 shadow-md justify-center flex-col md:px-[50px] w-full ">
            <h1 className="font-semibold text-lg md:text-xl md:py-[10px] md:tracking-[5px]">
              Enter aircraft details
            </h1>
            <form 
              action=""
              className="flex flex-col gap-6 w-full"
              onSubmit={handleSubmit}
            >

              {/* manufacturer input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="aircraftManufacturer"
                  className=" text-sm font-medium"
                >
                  Aircraft manufacturer
                </label>
                <input
                type="text"
                id="aircraftManufacturer" 
                name="aircraftManufacturer"
                className="border rounded-lg py-[5px] px-[15px] w-full text-sm"
                onChange={handleChange}
                />
              </div>

              {/* model input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="aircraftModel"
                  className=" text-sm font-medium"
                >
                  Aircraft model
                </label>
                <input
                type="text"
                id="aircraftModel" 
                name="aircraftModel"
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

          {aircraftTypeData.length > 0 && (
            <div className="flex flex-col text-sm gap-3 fo">
              <div>
                Manufacturer = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].manufacturer}</span>
              </div>
              
              <div>
                Model = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].model}</span>
              </div>

              <div>
                Engine Type = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].engine_type}</span>
              </div>

              <div>
                Max Speed = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].max_speed_knots} Knots</span>
              </div>

              <div>
                Ceiling = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].ceiling_ft} ft </span>
              </div>

              <div>
                Gross Weight = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].gross_weight_lbs} lbs</span>
              </div>

              <div>
                Length = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].length_ft} ft </span>
              </div>

              <div>
                Wingspan = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].wing_span_ft} ft </span>
              </div>

              <div>
                Range Nautical Miles = <span className="font-medium text-base border-b-2 border-black">{aircraftTypeData[0].range_nautical_miles} Nm</span>
              </div>
          </div>
          )}
        </section>
      </section>
    </main>
  )
}

export default Aircraft