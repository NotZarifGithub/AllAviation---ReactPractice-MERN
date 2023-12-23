import TitleCard from "../components/TitleCard"
import FormCard from "../components/FormCard"
import { useState } from "react"
import axios from "axios"

const Countries = () => {
  const [countrySearchFormData, setCountrySearchFormData] = useState({}) 
  const [countrySearchData, setCountrySearchData] = useState({})

  const handleChangeCountrySearch = (e) => {
    setCountrySearchFormData({
      ...countrySearchFormData,
      [e.target.id]: e.target.value
    })
    console.log(countrySearchFormData)
  }
  
    const handleSubmitCountrySearch = async (e) => {
    e.preventDefault()
    try {
      const countrySearchData = await axios.get("/api/country/country-search", {
        params: {
          name: countrySearchFormData.country
        }
      })
      setCountrySearchData(countrySearchData.data)
    } catch (error) {
      console.error(error)
      
    }
  }
  
  console.log(countrySearchData)
  
  return (
    <main className="flex flex-col gap-10 py-[50px]">

      {/* Aircraft Search */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Country Search"}
          description={"Provide an alpha2code and alpha3code for specified country."}
        />

        <div className="flex flex-col gap-5 md:flex-row">

          {/* form */}
        
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter country details"}
              title={"Country"}
              titleForm={"country"}
              handleChange={handleChangeCountrySearch}
              handleSubmit={handleSubmitCountrySearch}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="text-lg font-medium">Details</h1>
            {countrySearchData.length > 0 && (
              <div>
                {countrySearchData.map((country, index) => (
                  <div key={index} className="p-4 border rounded-md shadow-md">
                    <p>
                      <span className="text-base font-medium">
                        Country Name:{" "}
                        <span className="border-b-2 border-black">
                          {country.name}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Alpha2 Code:{" "}
                        <span className="border-b-2 border-black">
                          {country.alpha2Code}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Alpha3 Code:{" "}
                        <span className="border-b-2 border-black">
                          {country.alpha3Code}
                        </span>
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

export default Countries