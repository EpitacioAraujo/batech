import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// ponytail: single-page SSG — vite-react-ssg reads the entry from main.tsx
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
