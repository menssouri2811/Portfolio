import localFont from "next/font/local";
import "./globals.css";

// Cargar fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Yassine Menssouri | Desarrollador Full Stack",
  description: "Portfolio profesional de Yassine Menssouri, Desarrollador Full Stack con experiencia en tecnologías web modernas.",
  keywords: ["desarrollador", "full stack", "web", "portfolio", "Yassine Menssouri"],
  authors: [{ name: "Yassine Menssouri" }],
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
