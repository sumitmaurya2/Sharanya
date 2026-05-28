import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharanya — Portfolio" },
    //   { name: "description", content: "Award-worthy UGC creator portfolio. Beauty, fashion, lifestyle and wellness short-form content that converts." },
      { property: "og:title", content: "Sharanya — Portfolio" },
      { property: "og:description", content: "Scroll-stopping UGC for beauty, fashion, lifestyle and wellness brands." },
    ],
  }),
  component: PortfolioPage,
});
