import React from "react";
import styles from "../style";
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="padding-x flex-center">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary flex-start">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>

      <div className="bg-primary padding-x flex-start">
        <div className="boxWidth">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
