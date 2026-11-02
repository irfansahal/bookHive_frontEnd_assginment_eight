import HeroSection from "./home/HeroSection";
import NewArrival from "./home/NewArrival";
import AboutOurLibrary from "./shared/AboutOurLibrary";
import DigitalResources from "./shared/DigitalResources";

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
