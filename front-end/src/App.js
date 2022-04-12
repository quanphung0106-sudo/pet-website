import "./App.css";
import "./assets/css/NavBar.css";
import "./assets/css/Carousel.css";
import "./assets/css/Bonus.css";
import "./assets/css/Title.css";
import "./assets/css/Cart.css";
import "./assets/css/SeeMore.css";
import "./assets/css/Banner.css";
import "./assets/css/Information.css";
import "./assets/css/Responsive.css";
import "./assets/css/PageProductSingle/Product.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";

function App() {
  return (
    <div>
      <NavBar />
      <SingleProductPage/>
      <Footer />
    </div>
  );
}

export default App;
