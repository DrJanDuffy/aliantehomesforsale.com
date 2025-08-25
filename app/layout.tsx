import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import PerformanceMonitor from './components/PerformanceMonitor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Aliante Homes For Sale - Las Vegas Real Estate',
  description:
    'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
  keywords:
    'Aliante homes for sale, Las Vegas real estate, Aliante real estate, homes in Aliante, Las Vegas homes',
  authors: [{ name: 'Aliante Homes For Sale' }],
  creator: 'Aliante Homes For Sale',
  publisher: 'Aliante Homes For Sale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aliantehomesforsale.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aliante Homes For Sale - Las Vegas Real Estate',
    description:
      'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
    url: 'https://aliantehomesforsale.com',
    siteName: 'Aliante Homes For Sale',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aliante Homes For Sale - Las Vegas Real Estate',
    description:
      'Discover beautiful homes for sale in Aliante, Las Vegas. Find your dream home with our comprehensive real estate listings and expert guidance.',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
