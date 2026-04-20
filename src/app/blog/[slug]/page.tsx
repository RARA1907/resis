import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogYazilari, getBlogBySlug } from "@/content/blog";

export function generateStaticParams() {
  return blogYazilari.map((y) => ({ slug: y.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const yazi = getBlogBySlug(slug);
  if (!yazi) return { title: "Yazı bulunamadı" };
  return {
    title: `${yazi.baslik} | Resis Blog`,
    description: yazi.ozet,
  };
}

export default async function BlogYaziPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const yazi = getBlogBySlug(slug);
  if (!yazi) notFound();

  const digerYazilar = blogYazilari.filter((y) => y.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="border-b border-border py-16 md:py-20">
        <Container>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Tüm yazılar
          </Link>

          <div className="mx-auto max-w-3xl">
            <Badge variant="outline">{yazi.kategori}</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              {yazi.baslik}
            </h1>
            <p className="mt-4 text-lg text-muted">{yazi.ozet}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-border py-4 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {yazi.yazar}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(yazi.tarih).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {yazi.okumaSuresi}
              </span>
            </div>

            <div className="prose prose-neutral mt-10 max-w-none">
              {yazi.icerik.split("\n\n").map((para, i) => {
                if (para.startsWith("**")) {
                  return (
                    <h3
                      key={i}
                      className="mt-8 text-xl font-semibold tracking-tight md:text-2xl"
                    >
                      {para.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (para.startsWith("- ")) {
                  return (
                    <ul key={i} className="my-4 space-y-2">
                      {para.split("\n").map((item, j) => (
                        <li
                          key={j}
                          className="ml-6 list-disc text-base leading-relaxed text-foreground marker:text-primary"
                        >
                          {item.replace(/^- /, "").replace(/\*\*(.+?)\*\*/g, "$1")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (/^\d+\./.test(para)) {
                  return (
                    <ol key={i} className="my-4 space-y-2">
                      {para.split("\n").map((item, j) => (
                        <li
                          key={j}
                          className="ml-6 list-decimal text-base leading-relaxed text-foreground marker:text-primary"
                        >
                          {item.replace(/^\d+\.\s*/, "").replace(/\*\*(.+?)\*\*/g, "$1")}
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p
                    key={i}
                    className="mt-5 text-base leading-relaxed text-foreground md:text-lg"
                  >
                    {para.split(/(\*\*.+?\*\*)/g).map((chunk, k) =>
                      chunk.startsWith("**") ? (
                        <strong key={k}>{chunk.replace(/\*\*/g, "")}</strong>
                      ) : (
                        chunk
                      ),
                    )}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-surface-2/60 p-8 text-center">
              <h3 className="text-xl font-semibold tracking-tight">
                İşletmenize Resis'i kurmak ister misiniz?
              </h3>
              <p className="mt-2 text-sm text-muted">
                2 dakikada formu doldurun, 24 saat içinde özel teklifiniz hazır olsun.
              </p>
              <Button asChild size="lg" className="mt-5">
                <Link href="/teklif-iste">Ücretsiz teklif iste</Link>
              </Button>
            </div>
          </div>
        </Container>
      </article>

      {digerYazilar.length > 0 && (
        <section className="py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">
              Diğer yazılar
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {digerYazilar.map((y) => (
                <Link
                  key={y.slug}
                  href={`/blog/${y.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/40"
                >
                  <Badge variant="outline" className="w-fit">
                    {y.kategori}
                  </Badge>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    {y.baslik}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{y.ozet}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
