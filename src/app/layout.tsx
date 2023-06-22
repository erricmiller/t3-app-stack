import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/Toaster';
import { siteConfig } from '@/config/siteConfig';
import '@/styles/globals.css';
import { ClientProvider } from '@/utils/trpc-provider';
import { cn } from '@/utils/utils';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.name,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  category: siteConfig.category,
  generator: siteConfig.generator,
  applicationName: siteConfig.name,
  creator: siteConfig.creator,
  referrer: 'origin-when-cross-origin',
  authors: siteConfig.authors,
  colorScheme: 'normal', // 'normal' | 'light' | 'dark' | 'light dark' | 'dark light' | 'only light'
  themeColor: siteConfig.themeColor,
  publisher: siteConfig.publisher,
  formatDetection: siteConfig.formatDetection,
  metadataBase: siteConfig.metadataBase,
  alternates: siteConfig.alternates,
  manifest: siteConfig.manifest,
  openGraph: {
    title: siteConfig.openGraph.title,
    description: siteConfig.openGraph.description,
    url: siteConfig.openGraph.url,
    siteName: siteConfig.openGraph.siteName,
    locale: siteConfig.openGraph.locale,
    type: 'website',
    images: siteConfig.openGraph.images,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: siteConfig.icons,
  // twitter: siteConfig.twitter,
  viewport: siteConfig.viewport,
  verification: siteConfig.verification,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('mx-auto max-w-[1920px]', poppins.className)}>
      <body className="mx-auto min-h-screen bg-slate-50 pt-12 antialiased">
        <Navbar />
        <ClientProvider session={undefined}>{children}</ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
