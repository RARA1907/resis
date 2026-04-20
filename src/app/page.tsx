import { HeroDinamik } from "@/components/features/hero-dinamik";
import { ModulGrid } from "@/components/features/modul-grid";
import { StatBand } from "@/components/features/stat-band";
import { ReferansGrid } from "@/components/features/referans-grid";
import { CtaAlt } from "@/components/features/cta-alt";

export default function HomePage() {
  return (
    <>
      <HeroDinamik />
      <StatBand />
      <ModulGrid />
      <ReferansGrid />
      <CtaAlt />
    </>
  );
}
