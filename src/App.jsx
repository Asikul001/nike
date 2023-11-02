//import { CustomerReview,footer,hero,Nav,ProductsName,Services
//,SpecialOffer,Subscribe } from "./sections";
import React from 'react';
import Hero from './sections/Hero';
import CustomerReview from './sections/CustomerReview';
import Footer from './sections/Footer';
//import Nav from './sections/Nav';
import ProductsName from './sections/ProductsName';
import SpecialOffer from './sections/SpecialOffer';
import Services from './sections/Services';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import Nav from './components/Nav';
//import Button from './components/Button';


const App=()=>(
<main className="relative">
<Nav/>
<section className="x1:padding-1 wide:padding-r padding-b">
  <Hero/>
</section>
<section className="padding">
   < ProductsName/>
</section>
<section className="padding">
  <SuperQuality/>
</section>
<section className="padding-x py-10">
    <  Services/>
</section>
<section className="padding">
    <SpecialOffer/>
</section>
<section className="bg-pale-blue padding">
    <CustomerReview/>
</section>
<section className="padding-x sm:py-32 py-16 w-full">
   < Subscribe/>
</section>
<section className="padding-x bg-black text-white padding-t pb-8">
   <Footer/>
</section>
</main>
);
export default App;