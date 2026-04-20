import { Container } from "@/components/shared/container";

const stats = [
  { value: "500+", label: "İşletme" },
  { value: "10.000+", label: "Aktif kullanıcı" },
  { value: "3M+", label: "Aylık adisyon" },
  { value: "7/24", label: "AI destek" },
];

export function StatBand() {
  return (
    <section className="border-y border-border bg-surface-2">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-mono text-4xl font-bold tracking-tight tabular-nums md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
