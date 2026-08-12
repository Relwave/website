import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider'
import { Footer } from '@/components/footer'
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});


const BASE_URL = 'https://relwave.tech'

const TITLE = 'RelWave — Database Client for Modern Developers'
const DESCRIPTION = 'A fast, native database client for PostgreSQL, MySQL, MariaDB, and SQLite. Visual ER diagrams, Git integration, AI analysis, and migration management. Free and open source.'
const OG_IMAGE = `${BASE_URL}/og.png`  // 1200x630 proper OG image

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: TITLE,
    template: '%s | RelWave',
  },

  description: DESCRIPTION,

  keywords: [
    // Core product terms
    'database client',
    'database gui',
    'open source database client',
    'database management tool',

    // Alternative searches — high intent
    'dbeaver alternative',
    'tableplus alternative',
    'pgadmin alternative',
    'datagrip alternative',

    // Database-specific
    'postgresql gui',
    'postgresql client',
    'mysql gui',
    'mysql client',
    'sqlite gui',
    'mariadb client',

    // Feature-specific
    'er diagram tool',
    'database schema visualization',
    'database migration tool',
    'git schema versioning',

    // Tech stack — developer searches
    'tauri app',
    'local first database',
  ],

  authors: [{ name: 'Yashh56', url: 'https://github.com/Yashh56' }],
  creator: 'Yashh56',
  publisher: 'Yashh56',

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

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'RelWave',
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'RelWave — Database Client showing ER diagram and SQL workspace',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@RelWaveApp',
    creator: '@RelWaveApp',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },

  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },

  other: {
    'theme-color': '#0a0a0a',
  },
}

// Script to prevent theme flash
const themeScript = `
  (function() {
    try {
      const stored = localStorage.getItem('relwave-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="6e859e8c-177a-4cd4-be7a-6c20ef39579d"></script>
        <script defer src="https://umami.yashh56.me/script.js" data-website-id="9de2a8bb-7f60-4030-a46d-131b2fd525ad"></script>
        <script defer src="https://umami.yashh56.me/recorder.js" data-website-id="9de2a8bb-7f60-4030-a46d-131b2fd525ad"></script>
      </head>
      <body className={`${manrope.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
