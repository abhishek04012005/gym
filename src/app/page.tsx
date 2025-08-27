import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import Classes from "../components/classes/classes";
import Trainers from "../components/trainers/trainers";
import Schedule from "@/components/schedule/schedule";
import Pricing from "@/components/pricing/pricing";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
       <Navbar />
        <Hero />
        <Classes />
        <Trainers />
        <Schedule />
        <Pricing />
        <Contact />
        <Footer />
    </div>
  );
}
