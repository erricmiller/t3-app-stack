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
