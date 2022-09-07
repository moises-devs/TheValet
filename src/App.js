import {Fragment } from "react"
import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Navigation/Hero/Hero";
import DetailNumbers from "./Components/DetailSec/DetailNumbers";
import Menu from "./Components/Menu/Menu";
import DailySpecial from "./Components/Dailysec/DailySpecial";
import Booking from "./Components/Bookings/Booking";
import Chefs from "./Components/Chef/Chef";
import Gallery from "./Components/Gallery/Gallery";
function App() {
  return (
    <Fragment>
    <Navigation/>
    <Hero /> 
    <DetailNumbers/>
    <Menu/>
    <DailySpecial/>
    <Booking/>
    <Chefs/>
    <Gallery />
    </Fragment>
  );
}

export default App;
