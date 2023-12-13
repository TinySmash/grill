import Hero from "@/components/Home/Hero/Hero";
import Location from "@/components/Home/Location/Location";
import Menu from "@/components/Home/Menu/Menu";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Menu />
      <Location />
      <Testimonials />
    </main>
  );
}
