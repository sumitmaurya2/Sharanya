import { Cursor } from "./Cursor";
import { SmoothScroll } from "./SmoothScroll";
import { ScrollProgress } from "./ScrollProgress";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
// import { SocialProof } from "./SocialProof";
import { Work } from "./Work";
import { Services } from "./Services";
import { About } from "./About";
// import { Testimonials } from "./Testimonials";
import { Workflow } from "./Workflow";
import { FAQ } from "./FAQ";
import { Contact } from "./Contact";

export function PortfolioPage() {
  return (
    <main className="grain relative">
      <SmoothScroll />
      <Cursor />
      <ScrollProgress />
      <Nav />
      <Hero />
      {/* <SocialProof /> */}
      <Work />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <Workflow />
      <FAQ />
      <Contact />
    </main>
  );
}
