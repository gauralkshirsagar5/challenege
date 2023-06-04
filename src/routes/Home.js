import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        Heroimg="https://thehawaiivacationguide.com/wp-content/uploads/2022/01/hawaii-cost-for-family-hawaii-trip-cost-estimate-2022.jpg"
        title="Your Dream's Our Effort's"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </>
  );
}
export default Home;
