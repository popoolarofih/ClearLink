import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import OtherCompanies from "./component/OtherCompanies/OtherCompanies";
import WhyClearLink from "./component/WhyClearLink/WhyClearLink";
import Shopify from "./component/Shopify/Shopify";
import Faqs from "./component/FAQS/Faqs";
import CTA from "./component/CTA/CTA";
import Footer from "./component/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <OtherCompanies />
      <WhyClearLink />
      <Shopify />
      <Faqs />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
