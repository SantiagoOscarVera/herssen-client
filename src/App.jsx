import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";
import ArtistDashboard from "./components/Artist/Dashboard/ArtistDashboard";
import ArtistDashNavBar from "./components/Artist/Dashboard/ArtistDashNavBar";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/artist" element={<PricingArtist />} />
        <Route exact path="/artist/dashboard" element={<LayoutArtistDashboard/>} />
      </Routes>
    </>
  )
}

function LayoutArtistDashboard() {
  return (
    <Routes>
      <Route path="/" element={<ArtistDashNavBar/>}/>
      <Route exact path="/" element={<ArtistDashboard/>}/>
    </Routes>
  )
}

export default App
