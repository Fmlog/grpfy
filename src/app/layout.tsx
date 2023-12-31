import Navbar from '@/components/ui/organisms/navbar/Navbar';
import type { Metadata } from 'next';
import Footer from '@/components/ui/organisms/footer/Footer';

export const metadata: Metadata = {
    title: 'Groupify',
    description: 'Generated by create next app',
    icons: [
        {
            rel: 'shortcut icon',
            url: '/assets/favicon.ico',
            type: 'image/x-icon',
        },
        {
            rel: 'apple-touch-icon',
            url: '/assets/apple-touch-icon.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '57x57',
            url: '/assets/apple-touch-icon-57x57.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '72x72',
            url: '/assets/apple-touch-icon-72x72.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '76x76',
            url: '/assets/apple-touch-icon-76x76.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '114x114',
            url: '/assets/apple-touch-icon-114x114.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '120x120',
            url: '/assets/apple-touch-icon-120x120.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '144x144',
            url: '/assets/apple-touch-icon-144x144.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '152x152',
            url: '/assets/apple-touch-icon-152x152.png',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/assets/apple-touch-icon-180x180',
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
          <head>
            <link rel='shortcut icon' href='/assets/favicon.ico' type='image/x-icon' />
            <link rel='apple-touch-icon' href='/assets/apple-touch-icon.png' />
            <link rel='apple-touch-icon' sizes='57x57' href='/assets/apple-touch-icon-57x57.png' />
            <link rel='apple-touch-icon' sizes='72x72' href='/assets/apple-touch-icon-72x72.png' />
            <link rel='apple-touch-icon' sizes='76x76' href='/assets/apple-touch-icon-76x76.png' />
            <link rel='apple-touch-icon' sizes='114x114' href='/assets/apple-touch-icon-114x114.png' />
            <link rel='apple-touch-icon' sizes='120x120' href='/assets/apple-touch-icon-120x120.png' />
            <link rel='apple-touch-icon' sizes='144x144' href='/assets/apple-touch-icon-144x144.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/assets/apple-touch-icon-152x152.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/assets/apple-touch-icon-180x180.png' />
            </head>
            <Navbar />
            <body>{children}</body>
            <Footer />
        </html>
    );
}
