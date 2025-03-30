/** @type {import('next').NextConfig} */
module.exports = {
  // Optimiza el output para producción
  output: 'standalone',
  
  // Por defecto, no hay redirecciones
  async redirects() {
    return [];
  },
  
  // Desactiva el modo estricto en desarrollo
  reactStrictMode: false,
} 