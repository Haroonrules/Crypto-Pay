import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Media from "../components/Media.jsx";
import Faqs from "../components/Faqs.jsx";
import Footer from "../components/Footer.jsx";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <Media />
        <Faqs />
        <Footer />
      </div>
    </main>
  );
}
