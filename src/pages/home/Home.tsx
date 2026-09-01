import { ContactCallout } from "../../components/ContactCallout/ContactCallout";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { FeaturedProjects } from "../../components/FeaturedProjects/FeaturedProjects";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { WhyWorkWithMe } from "../../components/WhyWorkWithMe/WhyWorkWithMe";
import "./Home.css";

export function Home() {
  return (
    <div>
      <HeroSection />
      <ContactCallout />
      <FeaturedProjects />
      <WhyWorkWithMe />
      <ContactCallout />
      <ContactForm />
    </div>
  )
}
