import { defineConfig, fontProviders } from "astro/config";
import UnoCSS from "unocss/astro";

export default defineConfig({
  integrations: [UnoCSS()],
  fonts: [
    {
      cssVariable: "--font-shippori-antique",
      name: "Shippori Antique",
      provider: fontProviders.fontsource(),
      weights: [400],
    },
    {
      cssVariable: "--font-ia-writer-mono",
      name: "iA Writer Mono",
      provider: fontProviders.fontsource(),
      weights: [400, 500],
    },
  ],
});
