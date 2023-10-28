import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Hero from "@/components/sections/Hero";
import Membership from "@/components/sections/Memebership";
import Offering from "@/components/sections/Offering";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Offering />
      <Benefits />
      <Membership />
      <Footer />
    </main>
  );
}
