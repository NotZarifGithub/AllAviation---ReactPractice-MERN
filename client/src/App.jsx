import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/> 
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App