import AdoptionProcess from "@/components/AdoptionProcess";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HappyClients from "@/components/HappyClients";
import PetCareTips from "@/components/PetCareTips";
import { ScrollReveal } from "@/components/ScrollReveal";
import SuccessStories from "@/components/SuccessStories";
import WhyAdoptPets from "@/components/WhyAdoptPets";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ScrollReveal direction="up" delay={0.2}>
        <WhyAdoptPets></WhyAdoptPets>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <SuccessStories></SuccessStories>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <PetCareTips></PetCareTips>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <AdoptionProcess></AdoptionProcess>
      </ScrollReveal>
        <HappyClients></HappyClients>
      <Footer></Footer>
    </div>
  );
}
