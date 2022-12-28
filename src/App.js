import Navigation from "./Components/Navigation/Navigation";
import Hero from "./Components/Navigation/Hero/Hero";
import DetailNumbers from "./Components/DetailSec/DetailNumbers";
import Menu from "./Components/Menu/Menu";
import DailySpecial from "./Components/Dailysec/DailySpecial";
import Booking from "./Components/Bookings/Booking";
import Chefs from "./Components/Chef/Chef";
import Gallery from "./Components/Gallery/Gallery";
import MenuContextProvider from "./Context/MenuContext";
import Party from "./Components/PartySec/Party";
import Reviews from "./Components/Reviews/Reviews";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <MenuContextProvider>
      <Navigation />
      <Hero />
      <DetailNumbers />
      <Menu />
      <DailySpecial />
      <Booking />
      <Chefs />
      <Gallery />
      <Party />
      <Reviews />
      <Footer />
    </MenuContextProvider>
  );
}

export default App;
