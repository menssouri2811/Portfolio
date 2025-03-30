/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimiza el output para producción
  output: 'standalone',
  
  // Configura el comportamiento de imágenes
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  
  // Por defecto, no hay redirecciones
  async redirects() {
    return [];
  },
  
  // Desactiva el modo estricto en desarrollo
  reactStrictMode: false,
}

export default nextConfig;
