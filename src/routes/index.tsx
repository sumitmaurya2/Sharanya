import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/portfolio/Cursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
// import { SocialProof } from "@/components/portfolio/SocialProof";
import { Work } from "@/components/portfolio/Work";
import { Services } from "@/components/portfolio/Services";
import { About } from "@/components/portfolio/About";
// import { Testimonials } from "@/components/portfolio/Testimonials";
import { Workflow } from "@/components/portfolio/Workflow";
import { FAQ } from "@/components/portfolio/FAQ";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ava — UGC Creator Portfolio" },
      { name: "description", content: "Award-worthy UGC creator portfolio. Beauty, fashion, lifestyle and wellness short-form content that converts." },
      { property: "og:title", content: "Ava — UGC Creator Portfolio" },
      { property: "og:description", content: "Scroll-stopping UGC for beauty, fashion, lifestyle and wellness brands." },
    ],
  }),
  component: Index,
});

function Index() {
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
