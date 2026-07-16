import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Group from "./components/Group";
import About from "./components/About";
import Ventures from "./components/Ventures";
import QuoteBand from "./components/QuoteBand";
import Journey from "./components/Journey";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Group />
        <About />
        <Ventures />
        <QuoteBand />
      <Journey />
        <Recognition />
        <Contact />
      </main>
    </>
  );
}
