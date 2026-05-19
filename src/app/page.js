import AdoptionProcess from "@/components/AdoptionProcess";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import PetCareTips from "@/components/PetCareTips";
import SuccessStories from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <PetCareTips></PetCareTips>
      <AdoptionProcess></AdoptionProcess>
      <Footer></Footer>
    </div>
  );
}
