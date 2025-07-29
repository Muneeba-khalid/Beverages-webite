// // src/App.jsx

// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Cart from './pages/Cart';
// import About from './components/About';
// import Careers from './components/Careers';
// import Franchising from './components/Franchising';
// import Contact from './components/Contact';
// import Home from './pages/Home';
// import CoffeePage from './pages/CoffeePage';
// import TeaPage from './pages/TeaPage';
// import JuicePage from './pages/JuicePage';
// import MilkshakePage from './pages/MilkshakePage';
// import Checkout from './components/Checkout';
// import ProductDetails from './pages/ProductDetails';
// import AllPopularProducts from './pages/AllPopularProducts';
// import PopularProducts from './components/PopularProducts';
// import BestSellers from './components/BestSellers';
// import AllBestSellers from './pages/AllBestSellers';

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//     <Route path="/Cart" element={<Cart />} />

//     <Route path="/about" element={<About />} />
//     <Route path="/careers" element={<Careers />} />
//     <Route path="/franchising" element={<Franchising/>} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/" element={<Home />} />
//     <Route path="/coffee" element={<CoffeePage />} />
//         <Route path="/tea" element={<TeaPage />} />
//         <Route path="/milkshake" element={<MilkshakePage />} />
//         <Route path="/juice" element={<JuicePage />} />

//         <Route path="/product/:productId" element={<ProductDetails />} />

//         <Route path="/PopularProducts" element={<PopularProducts />} />
//       <Route path="/AllPopularProducts" element={<AllPopularProducts />} />


//       <Route path="/AllBestSellers" element={<AllBestSellers />} />
//       <Route path="/BestSellers" element={<BestSellers />} />
//       <Route path="/Checkout" element={<Checkout/>} />

//       </Routes>
//     </>
//   );
// }

// export default App;
// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import About from './components/About';
import Careers from './components/Careers';
import Franchising from './components/Franchising';
import Contact from './components/Contact';
import Home from './pages/Home';
import CoffeePage from './pages/CoffeePage';
import TeaPage from './pages/TeaPage';
import JuicePage from './pages/JuicePage';
import MilkshakePage from './pages/MilkshakePage';
import Checkout from './components/Checkout';
import ProductDetails from './pages/ProductDetails';

import FeaturedCategories from './components/FeaturedCategories';
import SpecialDrinks from './components/SpecialDrinks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/franchising" element={<Franchising />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/tea" element={<TeaPage />} />
        <Route path="/milkshake" element={<MilkshakePage />} />
        <Route path="/juice" element={<JuicePage />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/FeaturedCategories" element={<FeaturedCategories />} />
       <Route path="/SpecialDrinks" element={<SpecialDrinks/>} />
       <Route path="/login" element={<Login/>} />
              <Route path="/" element={<Login/>} />


      <Route path="/signup" element={<Signup/>} />




      </Routes>
      
<Footer/>

    </>
  );
}

export default App;