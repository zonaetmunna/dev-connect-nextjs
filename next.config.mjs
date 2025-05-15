/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // List of supported locales
    locales: ['en', 'es', 'fr', 'ar', 'de', 'ja'],
    // Default locale
    defaultLocale: 'en',
    // Automatic locale detection
    localeDetection: true,
  },
  // Add support for RTL languages
  experimental: {
    // This enables the built-in RTL support
    reactRoot: true,
  }
};

export default nextConfig;

