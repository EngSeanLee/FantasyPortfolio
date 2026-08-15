import { Hero } from "@/components/home/Hero";

// Per the interaction pivot: Home is a single viewport. The Meadow is the
// homepage experience — Projects, Architecture, About, and Contact are
// reached through the nav rail, not by scrolling.
export default function Home() {
  return <Hero />;
}
