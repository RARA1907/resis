"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  ad: z.string().min(2, "Adınızı girin").max(60),
  isletmeAdi: z.string().min(2, "İşletme adı zorunludur").max(80),
  telefon: z
    .string()
    .min(10, "Telefon numarası geçersiz")
    .regex(/^[0-9 +()-]+$/, "Sadece rakam ve +()- karakterleri"),
  email: z.string().email("Geçerli bir e-posta girin"),
  tip: z.enum(["restoran", "fastfood", "kafe", "zincir", "diger"]),
  subeSayisi: z.enum(["1", "2-5", "6-20", "20+"]),
  moduller: z.array(z.string()).min(1, "En az bir modül seçin"),
  mesaj: z.string().max(600).optional(),
  kvkk: z.literal(true, {
    errorMap: () => ({ message: "KVKK onayı zorunludur" }),
  }),
});

type FormValues = z.infer<typeof schema>;

const modulOpsiyonlari = [
  { id: "epos", label: "EPOS" },
  { id: "stok-maliyet", label: "Stok & Maliyet" },
  { id: "crm-sadakat", label: "CRM & Sadakat" },
  { id: "analiz-raporlama", label: "Analiz & Raporlama" },
];

export function TeklifForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      tip: "restoran",
      subeSayisi: "1",
      moduller: ["epos"],
    },
  });

  const secilenModuller = watch("moduller") ?? [];

  const toggleModul = (id: string) => {
    const current = secilenModuller;
    if (current.includes(id)) {
      setValue(
        "moduller",
        current.filter((x) => x !== id),
        { shouldValidate: true },
      );
    } else {
      setValue("moduller", [...current, id], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: FormValues) => {
    setError(null);
    try {
      const res = await fetch("/api/teklif-iste", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Gönderim başarısız");
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Beklenmeyen bir hata oluştu",
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight">
          Teklif talebiniz alındı.
        </h3>
        <p className="mt-3 max-w-md text-muted">
          24 saat içinde uzman ekibimiz belirttiğiniz iletişim bilgilerinden
          size dönüş yapacak. Acil durumda{" "}
          <a
            href="https://wa.me/908501234567"
            className="text-primary hover:underline"
          >
            WhatsApp destek hattından
          </a>{" "}
          ulaşabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ad">Ad Soyad *</Label>
          <Input id="ad" {...register("ad")} placeholder="Örn. Ahmet Yılmaz" />
          {errors.ad && <FieldError>{errors.ad.message}</FieldError>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="isletmeAdi">İşletme Adı *</Label>
          <Input
            id="isletmeAdi"
            {...register("isletmeAdi")}
            placeholder="Örn. İsos Döner"
          />
          {errors.isletmeAdi && (
            <FieldError>{errors.isletmeAdi.message}</FieldError>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefon">Telefon *</Label>
          <Input
            id="telefon"
            {...register("telefon")}
            placeholder="+90 5__ ___ __ __"
            inputMode="tel"
          />
          {errors.telefon && <FieldError>{errors.telefon.message}</FieldError>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-posta *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="ornek@isletme.com"
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="tip">İşletme Tipi</Label>
          <select
            id="tip"
            {...register("tip")}
            className="h-11 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <option value="restoran">Restoran</option>
            <option value="fastfood">Fast-food</option>
            <option value="kafe">Kafe / Bar</option>
            <option value="zincir">Zincir / Franchise</option>
            <option value="diger">Diğer</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subeSayisi">Şube Sayısı</Label>
          <select
            id="subeSayisi"
            {...register("subeSayisi")}
            className="h-11 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <option value="1">1 şube</option>
            <option value="2-5">2-5 şube</option>
            <option value="6-20">6-20 şube</option>
            <option value="20+">20+ şube</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <Label>İlgilendiğiniz modüller *</Label>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {modulOpsiyonlari.map((m) => {
            const active = secilenModuller.includes(m.id);
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => toggleModul(m.id)}
                aria-pressed={active}
                className={
                  active
                    ? "rounded-lg border-2 border-primary bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors"
                    : "rounded-lg border-2 border-border bg-surface px-3 py-2 text-sm text-muted transition-colors hover:border-primary/30 hover:text-foreground"
                }
              >
                {m.label}
              </button>
            );
          })}
        </div>
        {errors.moduller && <FieldError>{errors.moduller.message}</FieldError>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mesaj">Mesajınız</Label>
        <Textarea
          id="mesaj"
          {...register("mesaj")}
          rows={4}
          placeholder="İhtiyaçlarınızı ya da özel sorularınızı yazabilirsiniz"
        />
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-border bg-surface-2 p-4">
        <input
          type="checkbox"
          {...register("kvkk")}
          className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary/40"
        />
        <span className="text-sm leading-relaxed text-muted">
          <a href="/kvkk" className="font-medium text-foreground underline-offset-2 hover:underline">
            KVKK aydınlatma metnini
          </a>{" "}
          okudum, kişisel verilerimin teklif hazırlanması amacıyla işlenmesine
          onay veriyorum.
        </span>
      </label>
      {errors.kvkk && <FieldError>{errors.kvkk.message}</FieldError>}

      {error && (
        <div className="rounded-lg border border-error/30 bg-danger/10 p-4 text-sm text-error">
          {error}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Gönderiliyor…
          </>
        ) : (
          "Teklif iste"
        )}
      </Button>
    </form>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-error">{children}</p>;
}
