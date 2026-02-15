import { defineConfig } from 'unocss';
import presetRemToPx from '@unocss/preset-rem-to-px';
import { presetWind3 } from '@unocss/preset-wind3';

export default defineConfig({
  content: {
    filesystem: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  presets: [presetRemToPx({}), presetWind3({ prefix: 'fairystaroform__' }) as any],
});
