import manifest from "../../public/ekranlar/manifest.json";

export interface EkranItem {
  file: string;
  name: string;
}

export interface EkranManifest {
  arkaYuz: EkranItem[];
  onYuz: EkranItem[];
  total: number;
}

export const ekranlar = manifest as EkranManifest;
