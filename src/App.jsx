import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";
import FormArtist from "./components/Artist/FormArtist/FormArtist";

function App() {
  return (
    <><Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/artist" element={<PricingArtist/>}/>
        <Route exact path="/artist/form" element={<FormArtist/>}/>
      </Routes>
    </>
  )
}


export default App
