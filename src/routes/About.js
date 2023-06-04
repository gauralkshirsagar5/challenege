import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        Heroimg="https://wallpapers.com/images/featured/g73aaa12uq8aguo6.jpg"
        title="About"
        text="Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
    </>
  );
}
export default About;
