import Header from "../src/components/1. header/Header";
import Hero from "../src/components/2. hero/Hero";
import Features from "../src/components/3. body/Features";
import Section from "../src/components/3. body/Section";
import Testimonials from "../src/components/3. body/Testimonials";
import CTA from "../src/components/4. CTA/CTA";
import Footer from "../src/components/5. Footer/Footer";
import "../src/sass/_base.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Section />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
