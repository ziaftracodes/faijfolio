import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { RequestWork } from "@/components/RequestWork";
import { SectionTransition } from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      
      <SectionTransition />
      
      <div id="about">
        <About />
      </div>
      
      <SectionTransition />
      
      <div id="skills">
        <Skills />
      </div>
      
      <SectionTransition />
      
      <div id="work">
        <WorkSection />
      </div>
      
      <SectionTransition />
      
      <RequestWork />
      
      <SectionTransition />
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
