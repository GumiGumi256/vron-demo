import Benefits from "@/components/shared/benefits";
import Company from "@/components/shared/company";
import Hero from "@/components/shared/hero-section";
import Products from "@/components/shared/products";
import Testimonials from "@/components/shared/testimonials";
import Image from "next/image";

export default function Home() {
  return (
     <main>
      <Hero />
      <Benefits />
      <Products />
      <Company />
      <Testimonials />
     </main>
  );
}
