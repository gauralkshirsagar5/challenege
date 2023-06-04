import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        Heroimg="https://w0.peakpx.com/wallpaper/327/959/HD-wallpaper-hawaii-sky-water-wolken.jpg"
        title="Contact"
        text="Choose Your Favourite Destination."
        // buttonText="Travel Plan"
        // url="/"
        btnClass="hide"
      />
    </>
  );
}
export default Contact;
