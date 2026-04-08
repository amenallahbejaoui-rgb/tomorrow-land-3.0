import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import OurProgram from "./components/ourprogram/OurProgram";
import Footer from "./components/footer/Footer";
import AboutTommorowland from "./components/abouttommorowland/abouttommorowland";
import Ambassadors from "./components/ambassadors/Ambassadors";
import Planning from "./components/planning/Planning";
import Speakers from "./components/speakers/Speakers";

const Reel = lazy(() => import("./components/reel/Reel"));
const Concept = lazy(() => import("./components/concept/Concept"));

function SectionFallback({ minHeight }) {
  return (
    <div
      aria-hidden="true"
      style={{
        minHeight,
        width: "100%",
        background: "linear-gradient(180deg, #111827 0%, #1a1f3a 100%)",
      }}
    />
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      once: true,
      mirror: false,
      offset: 120,
      anchorPlacement: "top-bottom",
    });

    const onLoad = () => AOS.refreshHard();
    const onResize = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <AboutTommorowland />
      <Suspense fallback={<SectionFallback minHeight={560} />}>
        <Reel />
      </Suspense>
      <Ambassadors />
      <Planning />
      <About />
      <Speakers />
      <Suspense fallback={<SectionFallback minHeight={1500} />}>
        <Concept />
      </Suspense>
      <OurProgram />
      <Footer />
    </>
  );
}