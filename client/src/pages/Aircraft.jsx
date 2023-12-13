import axios from "axios"
import { useState } from "react"

const Aircraft = () => {
  const [formData, setFormData] = useState({})

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
      const aircraftTypeData = await axios.get('/api/aircraft/get-aircraft', { 
      params: {
        manufacturer: formData.aircraftManufacturer, 
        model: formData.aircraftModel
      }
    })
      console.log(aircraftTypeData.data)
      return aircraftTypeData.data
      
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <main>
      <section className="flex px-[20px] max-w-[1200px] mx-auto flex-col gap-5">
        <form 
          action=""
          className="flex flex-col gap-3 "
          onSubmit={handleSubmit}
        >
          {/* manufacturer input */}
          <div className="flex flex-col">
            <label 
              htmlFor="aircraftManufacturer"
              className="hidden"
            >
              hello
            </label>
            <input
            type="text"
            id="aircraftManufacturer" 
            name="aircraftManufacturer"
            placeholder="enter a specific aircraft manufacturer"
            className="border rounded-lg py-[5px] px-[15px] w-[350px]"
            onChange={handleChange}
            />
          </div>

          {/* model input */}
          <div className="flex flex-col">
            <label 
              htmlFor="aircraftModel"
              className="hidden"
            >
              hello
            </label>
            <input
            type="text"
            id="aircraftModel" 
            name="aircraftModel"
            placeholder="enter a specific aircraft model"
            className="border rounded-lg py-[5px] px-[15px] w-[350px]"
            onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="border rounded-full py-[5px] px-[15px] w-[100px]"
          >
            search
          </button>
        </form>
      </section>
    </main>
  )
}

export default Aircraft