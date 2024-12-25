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
      refresh: true, // Обновление при изменении файлов
    }),
  ],
  server: {
    host: '0.0.0.0', // Нужно для Render, чтобы приложение было доступно снаружи
    port: 3000, // Порт для запуска приложения (можно настроить по необходимости)
  },
  build: {
    outDir: 'public/build', // Папка, куда будет собираться проект (это важно для Render)
  },
});
