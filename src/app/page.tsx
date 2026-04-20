import { HeroSlider } from "@/components/features/hero-slider";
import { ModulGrid } from "@/components/features/modul-grid";
import { StatBand } from "@/components/features/stat-band";
import { ReferansGrid } from "@/components/features/referans-grid";
import { CtaAlt } from "@/components/features/cta-alt";
import { PosEntegrasyon } from "@/components/features/pos-entegrasyon";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatBand />
      <ModulGrid />
      <PosEntegrasyon />
      <ReferansGrid />
      <CtaAlt />
    </>
  );
}
