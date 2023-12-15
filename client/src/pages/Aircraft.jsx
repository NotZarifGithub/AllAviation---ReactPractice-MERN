import axios from "axios";
import { useState } from "react";
import FormCard from "../components/FormCard"
import TitleCard from "../components/TitleCard";

const Aircraft = () => {
  const [formDataAircraftSearch, setFormDataAircraftSearch] = useState({});
  const [formDataAircraftInfo, setFormDataAircraftInfo] = useState({})
  const [aircraftSearchData, setAircraftSearchData] = useState({});
  const [aircraftInfoData, setAircraftInfoData] = useState({})

  // handle change for aircraft search
  const handleChangeAircraftSearch = (e) => {
    setFormDataAircraftSearch({
      ...formDataAircraftSearch,
      [e.target.id]: e.target.value,
    });

    console.log(formDataAircraftSearch)
  };

  // handle submit for aircraft search
  const handleSubmitAircraftSearch = async (e) => {
    e.preventDefault();

    try {
      const aircraftSearchData = await axios.get('/api/aircraft/aircraft-search', {
        params: {
          model: formDataAircraftSearch.model,
        },
      });
      setAircraftSearchData(aircraftSearchData.data);
    } catch (error) {
      console.error(error);
    }
  };

 // handle change for aircraft info
  const handlechangeAircraftInfo = (e) => {
    setFormDataAircraftInfo({
      ...formDataAircraftInfo,
      [e.target.id]: e.target.value,
    })
    console.log(formDataAircraftInfo)
  }
  
  // handle submit for aircraft info
  const handleSubmitAircraftInfo = async (e) => {
    e.preventDefault()

    try {
      const aircraftInfoData = await axios.get("/api/aircraft/aircraft-info", {
        params: {
          registration: formDataAircraftInfo.registration
        }
      })
      setAircraftInfoData(aircraftInfoData.data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex flex-col gap-10">

      {/* Aircraft Search */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Aircraft Search"}
          description={"Provide a list of 10 aircraft registration numbers for a particular model."}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* form */}
        
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter aircraft details"}
              title={"Aircraft Model"}
              titleForm={"model"}
              handleChange={handleChangeAircraftSearch}
              handleSubmit={handleSubmitAircraftSearch}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="font-medium text-lg">Details</h1>

            {aircraftSearchData.length > 0 && (
              <div className="grid md:grid-cols-2 text-sm gap-2">
                {aircraftSearchData.map((data, index) => (
                  <div key={index}>
                    Aircraft {index + 1} ={" "}
                    <span className="font-medium text-base border-b-2 border-black">
                      {data}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>

      {/* Aircraft Info */}
      
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">

        {/* title and description */}

        <TitleCard 
          title={"Aircraft Info"}
          description={"Provides in-depth details about an aircraft identified by its registration."}
        />

        <div className="flex flex-col md:flex-row gap-5">

          {/* form */}

          <div className="flex-1">
            <FormCard
              title={"Aircraft Registration"}
              titleForm={"registration"}
              handleChange={handlechangeAircraftInfo}
              handleSubmit={handleSubmitAircraftInfo}
            />
          </div>

          {/* output */}

          <section className="flex-1 flex flex-col gap-4 max-h-[200px]">
            <h1 className="font-medium text-lg">Details</h1>

            {aircraftInfoData.length > 0 && (
              <div className="grid md:grid-cols-2 text-sm gap-2">
                {aircraftInfoData.map((data, index) => (
                  <div key={index}>
                    hello
                    <div key={index}>
                    Aircraft {index + 1} ={" "}
                    <span className="font-medium text-base border-b-2 border-black">
                      {data}
                    </span>
                  </div>
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

export default Aircraft