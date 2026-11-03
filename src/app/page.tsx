import AboutOurLibrary from "./home/AboutOurLibrary";
import DigitalResources from "./home/DigitalResources";
import HeroSection from "./home/HeroSection";
import NewArrival from "./home/NewArrival";

export default function Home() {
  return (
    <main 
    // className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center"
    >
      <HeroSection/>
      <AboutOurLibrary/>
      <NewArrival/>
      <DigitalResources/>
    </main>
  );
}
