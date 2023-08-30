import Providers from "@modules/providers"
import "styles/globals.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Little Goose',
    default: 'Little Goose', // a default is required when creating a template
  },
  description: "Discover top-quality toddler products at our store. From training cups to educational toys - we're here to make parenting a joyful journey.",
  keywords: ['baby products', 'sippy cup', 'toddler cups', 'cups', 'kids cups'],
  metadataBase: new URL('https://thislittlegoose.vercel.app'),
  openGraph: {
    title: 'Little Goose',
    description: 'Top-quality baby and toddler products.',
    url: 'https://thislittlegoose.vercel.app',
    siteName: 'Little Goose',
    images: [
      {
        url: '/little_goose_logo.png',
        width: 500,
        height: 500,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Goose',
    description: 'Top-quality baby and toddler products.',
    creator: 'Harper Foley',
    images: [
      {
        url: '/little_goose_logo.png',
      },
    ],
  },
  robots: {
    index: false,
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/little_goose_logo.png',
    apple: '/little_goose_logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: 'https://thislittlegoose.vercel.app',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
