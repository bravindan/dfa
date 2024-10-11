import About from "@/components/About";
import Blog from "@/components/Blog";
import Classes from "@/components/Class";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
// import Merchandise from "@/components/Merchandise";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonials />
      <Blog />
      {/* <Merchandise /> */}
      <Contact />

      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  );
}
