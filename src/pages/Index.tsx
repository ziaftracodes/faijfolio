import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { RequestWork } from "@/components/RequestWork";
import { SectionTransition } from "@/components/SectionTransition";
import { Scene3D } from "@/components/Scene3D";
import { Suspense } from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      
      <Navigation />
      <Hero />
      
      <SectionTransition />
      
      <div id="work">
        <WorkSection />
      </div>
      
      <SectionTransition />
      
      <div id="about">
        <About />
      </div>
      
      <SectionTransition />
      
      <div id="skills">
        <Skills />
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
