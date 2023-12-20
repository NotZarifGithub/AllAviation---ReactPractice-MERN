import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Aircraft from "./pages/Aircraft"
import Airline from "./pages/airline"
import Airport from "./pages/airport"
import Helicopter from "./pages/helicopter"
import AviationTaxes from "./pages/AviationTaxes"
import Countries from "./pages/Countries"

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/explore" element={<Explore />}/>
          <Route path="/explore/aircraft" element={<Aircraft />}/> 
          <Route path="/explore/airline" element={<Airline />}/> 
          <Route path="/explore/airport" element={<Airport />}/> 
          <Route path="/explore/helicopter" element={<Helicopter />}/> 
          <Route path="/explore/countries-alphacode" element={<Countries />}/> 
          <Route path="/explore/aviation-taxes" element={<AviationTaxes />}/> 
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App