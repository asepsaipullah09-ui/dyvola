import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { BrandStatement } from '@/sections/BrandStatement';
import { ChooseMoment } from '@/sections/ChooseMoment';
import { DyvolaWedding } from '@/sections/DyvolaWedding';
import { TemplateShowcase } from '@/sections/TemplateShowcase';
import { HowItWorks } from '@/sections/HowItWorks';
import { ExperienceStory } from '@/sections/ExperienceStory';
import { PricingPreview } from '@/sections/PricingPreview';
import { FinalCTA } from '@/sections/FinalCTA';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#242326] relative font-sans overflow-x-hidden">
      {/* 01. Navigation Bar */}
      <Navigation />

      {/* 02. Hero Section */}
      <Hero />

      {/* 03. Brand Statement */}
      <BrandStatement />

      {/* 04. Choose Your Moment (Platform Vision) */}
      <ChooseMoment />

      {/* 05. DYVOLA Wedding (Flagship Product) */}
      <DyvolaWedding />

      {/* 06. Template Showcase */}
      <TemplateShowcase />

      {/* 07. How It Works */}
      <HowItWorks />

      {/* 08. Experience / Story */}
      <ExperienceStory />

      {/* 09. Pricing Preview */}
      <PricingPreview />

      {/* 10. Final CTA */}
      <FinalCTA />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
