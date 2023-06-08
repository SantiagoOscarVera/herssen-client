import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import PricingArtist from "./components/Artist/Pricing/PricingArtist";
import FormArtist from "./components/Artist/FormArtist/FormArtist";
import ArtistDashboard from "./components/Artist/Dashboard/ArtistDashboard";
import ArtistNewItem from "./components/Artist/Dashboard/NewItem/ArtistNewItem"
import MyCollection from "./components/Artist/Dashboard/MyCollection/MyCollection";
import Sales from "./components/Artist/Dashboard/Sales/Sales";
import LoginArtist from "./components/Artist/Login/LoginArtist";
import BuyerCode from "./components/Buyer/CodeBuyer/Code";
import SignUpBuyer from "./components/Buyer/FormBuyer/FormBuyer";
import LogInBuyer from "./components/Buyer/Login/LoginBuyer";
import BuyerDashboard from "./components/Buyer/Dashboard/BuyerDashboard";
import Purchased from "./components/Buyer/Dashboard/Purchased/Purchased";
import Favourites from "./components/Buyer/Dashboard/MyFavourites/MyFavourites";
import MarketPlace from "./components/Marketplace/Marketplace";
import PricingJewelry from "./components/Jewelry/Pricing/PricingJewelry";
import SignUp from "./components/Jewelry/FormJewelry/FormJewelry";
import LogIn from "./components/Jewelry/Login/LoginJewelry"; 
import PricingCollector from "./components/Collector/Pricing/PricingCollector";
import FormCollector from "./components/Collector/FormCollector/FormCollector";
import LoginCollector from "./components/Collector/Login/LoginCollector";
import ShoppingCart from "./components/Marketplace/ShoppingCart/ShoppingCart";
import JewelryDashboard from "./components/Jewelry/Dashboard/JewelryDashboard";
import JewelryNewItem from "./components/Jewelry/Dashboard/NewItem/JewelryNewItem";
import MyCollectionJewelry from "./components/Jewelry/Dashboard/MyCollection/MyCollectionJewelry";
import SalesJewelry from "./components/Jewelry/Dashboard/Sales/SalesJewelry";


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
      <Route exact path="/buyer/form" element={<SignUpBuyer />} />
      <Route exact path="/buyer/login" element={<LogInBuyer />} />
      <Route exact path="/buyer/dashboard" element={<BuyerDashboard />} />
      <Route exact path="/buyer/dashboard/purchased" element={<Purchased />} />
      <Route exact path="/buyer/dashboard/favourites" element={<Favourites />} />
      <Route exact path="/jewelry" element={<PricingJewelry />} />
      <Route exact path="/jewelry/form" element={<SignUp />} />
      <Route exact path="/jewelry/login" element={<LogIn />} />
      <Route exact path="/jewelry/dashboard" element={<JewelryDashboard />} />
      <Route exact path="/jewelry/dashboard/item" element={<JewelryNewItem />} />
      <Route exact path="/jewelry/dashboard/collection" element={<MyCollectionJewelry />} />
      <Route exact path="/jewelry/dashboard/sales" element={<SalesJewelry />} />
      <Route exact path="/collector" element={<PricingCollector />} />
      <Route exact path="/collector/form" element={<FormCollector />} />
      <Route exact path="/collector/login" element={<LoginCollector />} />
      <Route exact path="/marketplace" element={<MarketPlace />} />
      <Route exact path="/marketplace/shopping" element={<ShoppingCart />} />
    </Routes>
    </>
  )
}


export default App
