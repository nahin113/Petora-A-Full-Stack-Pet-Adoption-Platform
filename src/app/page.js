import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import SuccessStories from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <Footer></Footer>
    </div>
  );
}
