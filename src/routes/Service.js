import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        Heroimg="https://i.pinimg.com/originals/d3/53/1e/d3531e69050b444012ad3a077513a437.jpg"
        title="Service"
        text="Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
    </>
  );
}
export default Service;
