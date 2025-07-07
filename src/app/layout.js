import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  siteName: "99HealthTips",
  metadataBase: new URL("https://99healthtips.com"),
  title: {
    default: "99 Health Tips | Trusted Wellness Advice",
    template: "%s | 99 Health Tips",
  },
  description:
    "Expert-curated health tips and wellness advice for better living. Discover nutrition guides, fitness routines, and preventive care strategies.",
  keywords: [
    "health tips",
    "wellness advice",
    "nutrition guides",
    "fitness routines",
    "preventive care",
    "healthy living",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "99 Health Tips | Your Trusted Wellness Resource",
    description:
      "Daily health tips and expert advice for optimal wellness and preventive care.",
    url: "https://99healthtips.com",
    siteName: "99HealthTips",
    images: [
      {
        url: "/images/health-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "99 Health Tips - Wellness and Healthy Living",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "99 Health Tips | Daily Wellness Advice",
    description: "Subscribe for daily health tips and expert wellness guidance",
    images: ["/images/health-twitter-card.jpg"],
    site: "@99HealthTips",
    creator: "@99HealthTips",
  },
  verification: {
    google: "_0lYtLaeSXatfFgLo4mJddEV-h2llG82tlAB7MphkmY",
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "99HealthTips",
    url: "https://99healthtips.com",
    logo: "https://99healthtips.com/logo/logo2.png",
    description:
      "Providing expert health tips and wellness advice for better living",
    address: {
      "@type": "PostalAddress",
      streetAddress: "119 Park Avenue",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10166",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-212-555-0100",
      contactType: "customer service",
      email: "info@99healthtips.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/99HealthTips",
      "https://twitter.com/99HealthTips",
      "https://www.instagram.com/99healthtips",
      "https://www.pinterest.com/99healthtips",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Health Resources",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Nutrition Guides",
          itemListElement: [
            { "@type": "Offer", name: "Diet Plans" },
            { "@type": "Offer", name: "Superfoods" },
            { "@type": "Offer", name: "Supplement Advice" },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Fitness Programs",
          itemListElement: [
            { "@type": "Offer", name: "Home Workouts" },
            { "@type": "Offer", name: "Yoga Routines" },
            { "@type": "Offer", name: "Strength Training" },
          ],
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#047857" />
        <meta name="author" content="99 Health Tips" />
        <meta name="geo.region" content="US-NY" />
        <meta name="geo.placename" content="New York" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white text-gray-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <CookieBanner />
        <Footer />

        <Toaster
          position="top-right"
          gutter={8}
          toastOptions={{
            duration: 5000,
            style: {
              background: "#ffffff",
              color: "#1a1a1a",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "0.875rem",
              maxWidth: "100%",
            },
            success: {
              iconTheme: {
                primary: "#10B981",
                secondary: "#ffffff",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444",
                secondary: "#ffffff",
              },
            },
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
