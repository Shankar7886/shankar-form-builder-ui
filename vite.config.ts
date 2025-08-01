import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'lib') {
    // Library build - SIMPLE VERSION
    return {
      plugins: [react(), tailwindcss()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'ShankarUIFormBuilder',
          formats: ['es', 'umd'],
          fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`
        },
        rollupOptions: {
          // Externalize all peer dependencies
          external: [
            'react', 
            'react-dom', 
            'react/jsx-runtime',
            '@radix-ui/react-accordion',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-popover',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
            '@reduxjs/toolkit',
            '@syncfusion/ej2-react-grids',
            'axios',
            'class-variance-authority',
            'clsx',
            'cmdk',
            'date-fns',
            'embla-carousel-autoplay',
            'embla-carousel-react',
            'lottie-react',
            'lucide-react',
            'next-themes',
            'react-day-picker',
            'react-dnd',
            'react-dnd-html5-backend',
            'react-organizational-chart',
            'react-redux',
            'react-router',
            'recharts',
            'sonner',
            'tailwind-merge'
          ],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'jsxRuntime'
            },
            exports: 'named'
          }
        },
        outDir: 'dist',
        emptyOutDir: true
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    };
  }

  // Regular development mode
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});