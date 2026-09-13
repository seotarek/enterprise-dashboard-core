import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Enterprise Multi-Tenant Dashboard',
  description: 'Next.js 15 enterprise SaaS boilerplate with native RTL/LTR support',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
