import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

// Экспорт конфигурации для Vite
export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js',
      ],
    }),
  ],
  server: {
    // Конфигурация сервера, если нужна для разработки
  },
  build: {
    outDir: 'public/build', // Папка, куда будет собираться проект
  },
});
