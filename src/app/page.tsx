import Hero from "../components/showcase/hero";
import Services from "../components/showcase/services";
import Testimonials from "../components/showcase/testimonials";
import NavBar from "../components/UIKIT/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Testimonials />
    </>
  );
}
