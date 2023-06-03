import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";
import FormArtist from "./components/Artist/FormArtist/FormArtist";
import ArtistDashboard from "./components/Artist/Dashboard/ArtistDashboard";
import ArtistNewItem from "./components/Artist/Dashboard/NewItem/ArtistNewItem"
import MyCollection from "./components/Artist/Dashboard/MyCollection/MyCollection";
import Sales from "./components/Artist/Dashboard/Sales/Sales";
import LoginArtist from "./components/Artist/Login/LoginArtist";
import BuyerCode from "./components/Buyer/Code";

function App() {
  return (
    <><Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/artist" element={<PricingArtist />} />
      <Route exact path="/artist/form" element={<FormArtist />} />
      <Route exact path="/artist/login" element={<LoginArtist />} />
      <Route exact path="/artist/dashboard" element={<ArtistDashboard />} />
      <Route exact path="/artist/dashboard/item" element={<ArtistNewItem />} />
      <Route exact path="/artist/dashboard/collection" element={<MyCollection />} />
      <Route exact path="/artist/dashboard/sales" element={<Sales />} />
      <Route exact path="/buyer/code" element={<BuyerCode />} />
    </Routes>
    </>
  )
}


export default App
