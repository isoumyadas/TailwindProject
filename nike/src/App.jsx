import { useState } from "react";
import {
  Hero,
  PopularProducts,
  Footer,
  CustomerReviews,
  SpecialOffer,
  Services,
  SuperQuality,
  Subscribe,
} from "./sections";

import Nav from "./Components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="sm:py-32 py-16 w-full padding-x">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
