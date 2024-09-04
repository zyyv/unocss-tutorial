import { defineConfig } from "./tempimport.ts";
import presetUno from "https://esm.sh/@unocss/preset-uno";
import presetIcons from "https://esm.sh/@unocss/preset-icons/browser";

export default defineConfig({
	presets: [presetUno(), presetIcons({ cdn: "https://esm.sh/" })],
});
