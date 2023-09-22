import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newslleter from "@/components/Newslleter";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <Header />
      <Navbar />
      <Hero />
      <Products />
      <Newslleter />
      <Footer />
    </div>
  );
}
