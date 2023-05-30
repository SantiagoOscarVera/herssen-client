import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";
import ArtistDashboard from "./components/Artist/Dashboard/ArtistDashboard";
import ArtistDashNavBar from "./components/Artist/Dashboard/ArtistDashNavBar";
import ArtistNewItem from "./components/Artist/Dashboard/ArtistNewItem";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/artist" element={<PricingArtist />} />
        <Route path="/artist/dashboard" element={<LayoutArtistDashboard />} />
      </Routes>
    </>
  )
}

function LayoutArtistDashboard() {
  return (
    <>
      <ArtistDashNavBar />
      <Routes>
        {/* <Route exact path="/" element={<ArtistDashboard />} /> */}
        <Route path="/" element={<ArtistNewItem/>} />
      </Routes>
    </>
  )
}

export default App
