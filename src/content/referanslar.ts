export interface Referans {
  ad: string;
  sektor: string;
  sube: number;
  sehir: string;
  logo: string;
  notu?: string;
  ozellikli?: boolean;
}

export const referanslar: Referans[] = [
  {
    ad: "İsos Döner",
    sektor: "Fast-food / Döner",
    sube: 12,
    sehir: "İstanbul",
    logo: "/referanslar/isos.png",
    notu:
      "4 kendi + 8 franchise şubede Resis EPOS + CRM + Stok modülleriyle tam entegre.",
    ozellikli: true,
  },
  {
    ad: "Hipster",
    sektor: "Kafe & Restoran",
    sube: 3,
    sehir: "İzmir",
    logo: "/referanslar/hipster.png",
  },
  {
    ad: "Güvenpark",
    sektor: "Restoran",
    sube: 2,
    sehir: "Ankara",
    logo: "/referanslar/guvenpark.png",
  },
  {
    ad: "Gamalı",
    sektor: "Restoran",
    sube: 1,
    sehir: "İzmir",
    logo: "/referanslar/gamali.png",
  },
  {
    ad: "Etçi Hüsam",
    sektor: "Restoran / Et",
    sube: 4,
    sehir: "İzmir",
    logo: "/referanslar/etcihusam.png",
  },
  {
    ad: "Can Köfte",
    sektor: "Fast-food / Köfte",
    sube: 6,
    sehir: "Denizli",
    logo: "/referanslar/cankofte.png",
  },
  {
    ad: "Bayder",
    sektor: "Dernek / Kurumsal",
    sube: 1,
    sehir: "Ankara",
    logo: "/referanslar/bayder.png",
  },
  {
    ad: "Vera Melisa",
    sektor: "Kafe & Pastane",
    sube: 2,
    sehir: "İzmir",
    logo: "/referanslar/veramelisa.png",
  },
  {
    ad: "Soylu",
    sektor: "Restoran",
    sube: 3,
    sehir: "İzmir",
    logo: "/referanslar/soylu.png",
  },
  {
    ad: "Serko",
    sektor: "Fast-food",
    sube: 2,
    sehir: "İzmir",
    logo: "/referanslar/serko.png",
  },
  {
    ad: "Pissti",
    sektor: "Fast-food / Pizza",
    sube: 5,
    sehir: "İzmir",
    logo: "/referanslar/pissti.png",
  },
  {
    ad: "Passoport",
    sektor: "Restoran & Bar",
    sube: 1,
    sehir: "İzmir",
    logo: "/referanslar/passoport.png",
  },
  {
    ad: "Meru",
    sektor: "Kafe",
    sube: 2,
    sehir: "İzmir",
    logo: "/referanslar/meru.png",
  },
  {
    ad: "Juice",
    sektor: "Smoothie & İçecek",
    sube: 3,
    sehir: "İzmir",
    logo: "/referanslar/juice.png",
  },
];
