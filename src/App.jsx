import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";
import FormArtist from "./components/Artist/FormArtist/FormArtist";
import ArtistDashboard from "./components/Artist/Dashboard/ArtistDashboard";
import ArtistDashNavBar from "./components/Artist/Dashboard/ArtistDashNavBar";
import ArtistNewItem from "./components/Artist/Dashboard/ArtistNewItem";

function App() {
  return (
    <><Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/artist" element={<PricingArtist/>}/>
        <Route exact path="/artist/form" element={<FormArtist/>}/>
        <Route exact path="/artist/dashboard" element={<ArtistDashboard/>}/>
        <Route exact path="/artist/dashboard/item" element={<ArtistNewItem/>}/>
      </Routes>
    </>
  )
}


export default App
