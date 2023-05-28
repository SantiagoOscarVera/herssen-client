import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";

function App() {
  return (
    <><Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/artist" element={<PricingArtist/>}/>
      </Routes>
    </>
  )
}

export default App
