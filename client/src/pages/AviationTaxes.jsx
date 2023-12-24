
import TitleCard from "../components/TitleCard"
import FormCard from "../components/FormCard"
import { useState } from "react"
import axios from "axios"

const Countries = () => {
  const [aviationTaxFormData, setAviationTaxFormData] = useState({}) 
  const [aviationTaxData, setAviationTaxData] = useState({})

  const handleChangeAviationTax = (e) => {
    setAviationTaxFormData({
      ...aviationTaxFormData,
      [e.target.id]: e.target.value
    })
    console.log(aviationTaxFormData)
  }
  
    const handleSubmitAviationTax = async (e) => {
    e.preventDefault()
    try {
      const aviationTaxData = await axios.post("https://allaviation.onrender.com/api/tax/aviation-tax", {
        search: aviationTaxFormData.search
      })
      setAviationTaxData(aviationTaxData.data)
    } catch (error) {
      console.error(error)
      
    }
  }
  
  console.log(aviationTaxData)
  
  return (
    <main className="flex flex-col gap-10 py-[50px]">

      {/* Aviation Taxes */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Aviation Taxes"}
          description={"Provide a list of 20 specified taxes in aviation (airport, airline, passenger, etc.)"}
        />

        <div className="flex flex-col gap-5 md:flex-row">

          {/* form */}
        
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter Taxes details"}
              title={"Keyword"}
              titleForm={"search"}
              handleChange={handleChangeAviationTax}
              handleSubmit={handleSubmitAviationTax}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="text-lg font-medium">Details</h1>
            {aviationTaxData.data && (
              <ul>
                {aviationTaxData.data.map((tax, index) => (
                  <li key={tax.id}>
                    {index + 1}. {tax.tax_name}
                  </li>
                ))}
              </ul>
            )}
            
          </section>
        </div>
      </section>

    </main>
 
  )
}

export default Countries