import axios from "axios";
import { useState } from "react";
import TitleCard from "../components/TitleCard";
import FormCard from "../components/FormCard";

const Airport = () => {
  const [airportSearchFormData, setAirportSearchFormData] = useState({});
  const [airportMetarFormData, setAirportMetarFormData] = useState({});
  const [airportInfoFormData, setAirportInfoFormData] = useState({});
  const [airportStatisticsFormData, setAirportStatisticsFormData] = useState({})
  const [airportMetarData, setAirportMetarData] = useState({});
  const [airportSearchData, setAirportSearchData] = useState([]);
  const [airportInfoData, setAirportInfoData] = useState([]);
  const [airportStatisticsData, setAirportStatisticsData] = useState({})

  const handleChangeAirportSearch = (e) => {
    setAirportSearchFormData({
      ...airportSearchFormData,
      [e.target.id]: e.target.value,
    });
    console.log(airportSearchFormData);
  };

  const handleSubmitAirportSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("https://allaviation.onrender.com/api/airport/airport-search", {
        params: {
          country: airportSearchFormData.country,
        },
      });
      setAirportSearchData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeAirportInfo = (e) => {
    setAirportInfoFormData({
      ...airportInfoFormData,
      [e.target.id]: e.target.value,
    });
    console.log(airportInfoFormData);
  };

  const handleSubmitAirportInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://allaviation.onrender.com/api/airport/airport-info", {
        params: {
          icao: airportInfoFormData.icao,
        },
      });
      setAirportInfoData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeAirportMetar = (e) => {
    setAirportMetarFormData({
      ...airportMetarFormData,
      [e.target.id]: e.target.value,
    });
    console.log(airportMetarFormData.icao);
  };

  const handleSubmitAirportMetar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://allaviation.onrender.com/api/airport/airport-metar", {
        params: {
          ident: airportMetarFormData.icao,
        },
      });
      setAirportMetarData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleChangeAirportStatistics = (e) => {
    setAirportStatisticsFormData({
      ...airportStatisticsFormData,
      [e.target.id]: e.target.value,
    });
    console.log(airportStatisticsFormData);
  };

  const handleSubmitAirportStatistics = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://allaviation.onrender.com/api/airport/airport-statistics", {
        params: {
          icao: airportStatisticsFormData.icao,
        },
      });
      setAirportStatisticsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };  

  console.log(airportMetarData);

  return (
    <main className="flex flex-col gap-10 py-[50px]">
      {/* Airport Search */}
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">
        {/* title and description */}
        <TitleCard
          title={"Airport Search"}
          description={
            "Provides a list of airports associated with a specified country."
          }
        />

        <div className="flex flex-col gap-5 md:flex-row">
          {/* form */}
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airport details"}
              title={"Alpha-2 Country Code"}
              titleForm={"country"}
              context={true}
              contextText={"Can't find your Alpha-2 Country Code?"}
              link={'/explore/countries-alphacode'}
              handleChange={handleChangeAirportSearch}
              handleSubmit={handleSubmitAirportSearch}
            />
          </div>

          {/* output */}
          <section className="flex flex-col flex-1 gap-4">
            <h1 className="text-lg font-medium">Airport Details</h1>

            {airportSearchData.length > 0 && (
              <div className="grid gap-2 text-sm md:grid-cols-2">
                {airportSearchData.map((item, index) => (
                  <div key={index}>
                    <p>
                      <span className="text-base font-medium">
                        IATA Code:{" "}
                        <span className="border-b-2 border-black">
                          {item.ident}
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

      {/* Airport Info */}
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">
        {/* title and description */}
        <TitleCard
          title={"Airport Info"}
          description={
            "Provides comprehensive details about airports identified by their ICAO code."
          }
        />

        <div className="flex flex-col gap-5 md:flex-row">
          {/* form */}
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airport details"}
              title={"Airport ICAO Code"}
              titleForm={"icao"}
              context={true}
              contextText={"Can't find your Airport ICAO code?"}
              link={'https://en.wikipedia.org/wiki/ICAO_airport_code'}
              handleChange={handleChangeAirportInfo}
              handleSubmit={handleSubmitAirportInfo}
            />
          </div>

          <section className="flex flex-col flex-1 gap-4 ">
            <h1 className="text-lg font-medium">Airport Details</h1>
            {airportInfoData.length > 0 && (
              <div>
                {airportInfoData.map((item, index) => (
                  <div
                    key={index}
                    className="grid gap-2 text-sm md:grid-cols-2"
                  >
                    <p>
                      <span className="text-base font-medium">
                        ICAO Code:{" "}
                        <span className="border-b-2 border-black">
                          {item.ident}
                        </span>
                      </span>
                    </p>
                    {item.iata && (
                      <p>
                        <span className="text-base font-medium">
                          IATA Code:{" "}
                          <span className="border-b-2 border-black">
                            {item.iata}
                          </span>
                        </span>
                      </p>
                    )}
                    <p>
                      <span className="text-base font-medium">
                        Airport Name:{" "}
                        <span className="border-b-2 border-black">
                          {item.name}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        City:{" "}
                        <span className="border-b-2 border-black">
                          {item.city}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Country:{" "}
                        <span className="border-b-2 border-black">
                          {item.country}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Latitude:{" "}
                        <span className="border-b-2 border-black">
                          {item.pos_lat}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Longitude:{" "}
                        <span className="border-b-2 border-black">
                          {item.pos_lng}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Public:{" "}
                        <span className="border-b-2 border-black">
                          {item.public.toString()}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Owner:{" "}
                        <span className="border-b-2 border-black">
                          {item.owner}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Operator:{" "}
                        <span className="border-b-2 border-black">
                          {item.operator}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Local Time:{" "}
                        <span className="border-b-2 border-black">
                          {item.local_time}
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

      {/* Airport Metar */}
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">
        {/* title and description */}
        <TitleCard
          title={"Airport Metar"}
          description={
            "Provides the latest METAR (Meteorological Aerodrome Report) for a specified airport identified by its ICAO code."
          }
        />

        <div className="flex flex-col gap-5 md:flex-row">
          {/* form */}
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airport details"}
              title={"Airport ICAO Code"}
              titleForm={"icao"}
              handleChange={handleChangeAirportMetar}
              handleSubmit={handleSubmitAirportMetar}
            />
          </div>

          {/* output */}
          <section className="flex flex-col flex-1 gap-4">
            <h1 className="text-lg font-medium">METAR Details</h1>
            {Object.keys(airportMetarData).length > 0 && (
              <div className="grid gap-2 text-sm md:grid-cols-2">
                <p>
                  <span className="text-base font-medium">
                    ICAO Code:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.ident}
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Date:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.date}
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Raw METAR:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.raw}
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Wind:{" "}
                    {airportMetarData.wind_calm
                      ? "Calm"
                      : `Speed ${airportMetarData.wind_speed} knots`}
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Visibility:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.visibility}{" "}
                      {airportMetarData.visibility_measure}
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Temperature:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.temperature} °C
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Dew Point:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.dew_point} °C
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Altimeter:{" "}
                    <span className="border-b-2 border-black">
                      {airportMetarData.altimeter}{" "}
                      {airportMetarData.altimeter_measure}
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Relative Humidity:{" "}
                    <span className="border-b-2 border-black">
                      {(airportMetarData.relative_humidity * 100).toFixed(2)}%
                    </span>
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Weather Elements:{" "}
                    {airportMetarData.weather_elements.map(
                      (element, index) => (
                        <span
                          key={index}
                          className="border-b-2 border-black"
                        >
                          {element.descriptor}
                          {element.intensity &&
                            ` (${element.intensity})`}
                          {index <
                            airportMetarData.weather_elements.length - 1 &&
                            ", "}
                        </span>
                      )
                    )}
                  </span>
                </p>
                <p>
                  <span className="text-base font-medium">
                    Clouds:{" "}
                    {airportMetarData.clouds.map((cloud, index) => (
                      <span
                        key={index}
                        className="border-b-2 border-black"
                      >
                        {cloud.coverage} {cloud.altitude}{" "}
                        {cloud.designator}
                        {index < airportMetarData.clouds.length - 1 &&
                          ", "}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            )}
          </section>
        </div>
      </section>

      {/* Airport Statistics */}
      <section className="flex px-[20px] max-w-[1200px] mx-auto py-[20px] flex-col gap-8 w-full">
        
        {/* title and description */}
        <TitleCard
          title={"Airport Statistics"}
          description={
            "Provide detailed airport statistics for airports identified by their ICAO code."
          }
        />

        <div className="flex flex-col gap-5 md:flex-row">
          {/* form */}
          <div className="flex-1">
            <FormCard
              mainTitle={"Enter airport details"}
              title={"Airport ICAO Code"}
              titleForm={"icao"}
              handleChange={handleChangeAirportStatistics}
              handleSubmit={handleSubmitAirportStatistics}
            />
          </div>

          {/* output */}
          <section className="flex flex-col flex-1 gap-4">
            <h1 className="text-lg font-medium">Airport Details</h1>
            {Array.isArray(airportStatisticsData) && airportStatisticsData.length > 0
              ? airportStatisticsData.map((airportData, index) => (
                  <div key={index} className="p-4 border rounded-md shadow-md">
                    <h1 className="text-lg font-medium">Airport Statistics</h1>
                    <p>
                      <span className="text-base font-medium">
                        ICAO Code:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.ident}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Departures:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.departures}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Arrivals:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.arrivals}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Avg Departure Distance:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.avg_departure_distance}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Avg Arrival Distance:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.avg_arrival_distance}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Cancelled Departures:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.cancelled_departures}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Cancelled Arrivals:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.cancelled_arrivals}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Avg Delay Departures:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.avg_delay_departures}
                        </span>
                      </span>
                    </p>
                    <p>
                      <span className="text-base font-medium">
                        Avg Delay Arrivals:{" "}
                        <span className="border-b-2 border-black">
                          {airportData.avg_delay_arrivals}
                        </span>
                      </span>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <h2 className="mt-2 font-medium text-md">Top Destinations</h2>
                        <ul>
                          {Object.entries(airportData.top_destinations).map(
                            ([destination, count]) => (
                              <li key={destination}>
                                {destination}: {count}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div>
                        <h2 className="mt-2 font-medium text-md">Top Airlines</h2>
                        <ul>
                          {Object.entries(airportData.top_airlines).map(([airline, count]) => (
                            <li key={airline}>
                              {airline}: {count}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>        
                ))
              : null}
          </section>

        </div>
      </section>
    </main>
  );
};

export default Airport;
