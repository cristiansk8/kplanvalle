import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kaplan Valle - Estudia en el Extranjero",
  description: "Programas de idiomas en el extranjero. Aprende inglés, francés o alemán en destinos como USA, Canadá, Reino Unido, Irlanda y más. Vive una experiencia internacional única.",
  keywords: "cursos de idiomas, estudiar en el extranjero, Kaplan Valle, aprender inglés, programas internacionales, intercambio cultural, estudiar idiomas, inmersión lingüística",
  authors: [{ name: "Kaplan Valle" }],
  creator: "Kaplan Valle",
  publisher: "Kaplan Valle",
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://kaplanvalle.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://kaplanvalle.com',
    siteName: 'Kaplan Valle',
    title: 'Kaplan Valle - Estudia en el Extranjero',
    description: 'Programas de idiomas en el extranjero. Aprende inglés, francés o alemán en destinos como USA, Canadá, Reino Unido, Irlanda y más. Vive una experiencia internacional única.',
    images: [
      {
        url: '/banner-kaplan-valle-web.webp',
        width: 1200,
        height: 630,
        alt: 'Kaplan Valle - Estudia en el Extranjero',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaplan Valle - Estudia en el Extranjero',
    description: 'Programas de idiomas en el extranjero. Aprende inglés, francés o alemán en destinos internacionales. Vive una experiencia única.',
    images: ['/banner-kaplan-valle-web.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui', // Agregar tu código de Google Search Console
  },
};

export default function RootLayout({
  children,
}) {
  // IDs de tracking
  const GTM_ID = 'GTM-W97K97W6';
  const GA4_ID = 'G-3BD6YQSPMH';

  // JSON-LD para datos estructurados (SEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Kaplan Valle',
    description: 'Programas de idiomas en el extranjero. Aprende inglés, francés o alemán en destinos internacionales.',
    url: 'https://kaplanvalle.com',
    logo: 'https://kaplanvalle.com/logo.png',
    image: 'https://kaplanvalle.com/banner-kaplan-valle-web.webp',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CO',
      addressRegion: 'Valle del Cauca',
    },
    sameAs: [
      'https://www.facebook.com/kaplanvalle',
      'https://www.instagram.com/kaplanvalle',
    ],
    offers: {
      '@type': 'Offer',
      category: 'Programas de idiomas internacionales',
    },
  };

  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Google Analytics 4 - Directo */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>

        {/* JSON-LD datos estructurados */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}

// ============================================
// ✅ AHORA TIENES:
// ============================================
// 1. Google Tag Manager (GTM-W97K97W6)
// 2. Google Analytics 4 (G-3BD6YQSPMH)
// 
// Ambos funcionan juntos sin problema
// ============================================