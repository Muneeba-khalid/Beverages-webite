// // import React from 'react'
// // import HeroSection from '../components/HeroSection'
// // import BestSellers from '../components/BestSellers'
// // import FeaturedBrands from '../components/FeaturedBrands';
// // import PopularProducts from '../components/PopularProducts';



// // const Home = () => {
// //   return (
// //     <div>
// //       <HeroSection/>

// //       <FeaturedBrands/>
      
// // <PopularProducts/>
// // <BestSellers/>
// //     </div>
// //   )
// // }

// // export default Home

// // src/pages/Home.jsx


import React from 'react';
import HeroSection from '../components/HeroSection';
// import FeaturedBrands from '../components/FeaturedBrands';
// import PopularProducts from '../components/PopularProducts';
// import BestSellers from '../components/BestSellers';
import FeaturedCategories from '../components/FeaturedCategories';
import SpecialDrinks from '../components/SpecialDrinks';
import AchievementsSection from '../components/AchievementsSection';
import Testimonials from '../components/Testimonials';
const Home = () => {
  return (
    <div >
      <HeroSection />

       <FeaturedCategories />
       <SpecialDrinks/>
       <AchievementsSection/>
      <Testimonials/>



    </div>
  );
};

export default Home;
