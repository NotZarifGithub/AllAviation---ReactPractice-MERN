import axios from "axios"
import { useState } from "react"

const Helicopter = () => {
  const [formData, setFormData] = useState({})
  const [helicopterTypeData, setHelicopterTypeData] = useState({})

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
      const helicopterTypeData = await axios.get('https://allaviation.onrender.com/api/helicopter/helicopter-search', { 
      params: {
        manufacturer: formData.manufacturer, 
        model: formData.model
      }
    })
    setHelicopterTypeData(helicopterTypeData.data)

    } catch (error) {
      console.error(error)
    }

  }

  console.log(helicopterTypeData)

  return (
    <main>
      <section className="flex px-[20px] max-w-[1200px] mx-auto gap-5 lg:flex-row flex-col py-[20px] ">

        <section className="max-w-[500px] flex-1 ">

          {/* form */}
          <div className="flex  border rounded-md  items-start p-[40px] gap-5 shadow-md justify-center flex-col md:px-[50px] w-full ">
            <h1 className="font-semibold text-lg md:text-xl md:py-[10px] md:tracking-[5px]">
              Enter helicopter details
            </h1>
            <form 
              action=""
              className="flex flex-col w-full gap-6"
              onSubmit={handleSubmit}
            >

              {/* manufacturer input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="manufacturer"
                  className="text-sm font-medium "
                >
                  Helicopter manufacturer
                </label>
                <input
                type="text"
                id="manufacturer" 
                name="manufacturer"
                className="border rounded-lg py-[5px] px-[15px] w-full text-sm"
                onChange={handleChange}
                />
              </div>

              {/* model input */}
              <div className="flex flex-col gap-2">
                <label 
                  htmlFor="model"
                  className="text-sm font-medium "
                >
                  Helicopter model
                </label>
                <input
                type="text"
                id="model" 
                name="model1"
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
          <h1 className="text-lg font-medium">
            Details
          </h1>

          {helicopterTypeData.length > 0 && (
            <div className="flex flex-col gap-3 text-sm fo">
              <div>
                Manufacturer = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].manufacturer}</span>
              </div>

              <div>
                Model = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].model}</span>
              </div>

              <div>
                Max Speed (Sea Level) = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].max_speed_sl_knots} Knots</span>
              </div>

              <div>
                Cruise Speed (Sea Level) = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].cruise_speed_sl_knots} Knots</span>
              </div>

              <div>
                Range = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].range_nautical_miles} Nautical Miles</span>
              </div>

              <div>
                Cruise Time = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].cruise_time_min} Minutes</span>
              </div>

              <div>
                Fuel Capacity = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].fuel_capacity_gallons} Gallons</span>
              </div>

              <div>
                Gross External Load = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].gross_external_load_lbs} lbs</span>
              </div>

              <div>
                External Load Limit = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].external_load_limit_lbs} lbs</span>
              </div>

              <div>
                Main Rotor Diameter = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].main_rotor_diameter_ft} ft</span>
              </div>

              <div>
                Number of Blades = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].num_blades}</span>
              </div>

              <div>
                Blade Material = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].blade_material}</span>
              </div>

              <div>
                Rotor Type = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].rotor_type}</span>
              </div>

              <div>
                Storage Width = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].storage_width_ft} ft</span>
              </div>

              <div>
                Length = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].length_ft} ft</span>
              </div>

              <div>
                Height = <span className="text-base font-medium border-b-2 border-black">{helicopterTypeData[0].height_ft} ft</span>
              </div>
            </div>
          )}

        </section>
      </section>
    </main>
  )
}

export default Helicopter