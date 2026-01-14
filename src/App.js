import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Feature sections */}
      <Feature
        id="feature1" // <-- Added ID for smooth scrolling
        title="Enjoy on your TV"
        text="Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, and more."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />

      <Feature
        title="Download your shows to watch offline"
        text="Save your favorites easily and always have something to watch."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        reverse
      />

      <Feature
        title="Watch everywhere"
        text="Stream on your laptop, tablet, phone, or TV. Anytime, anywhere."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
      />

      <Feature
        title="Create profiles for kids"
        text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/kids.png"
        reverse
      />

      <Footer />
    </>
  );
}

export default App;


