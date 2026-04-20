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

export const metadata: Metadata = {
  title: "RelWave - Database Visualizer",
  description: "A modern, cross-platform database management and visualization tool. Connect, explore, and visualize PostgreSQL, MySQL, and MariaDB.",
};

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
