import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/common/Header";
import { Analytics } from "@vercel/analytics/next";

// Fonts setup
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vipul Singh - Full Stack Developer | Web Developer Portfolio",
  description:
    "Vipul Singh is a passionate full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio of web development projects, skills, and professional experience.",
  keywords: [
    "Vipul Singh",
    "Vipul Singh Developer",
    "Vipul Singh Portfolio",
    "Vipul Singh Full Stack Developer",
    "Vipul Singh Web Developer",
    "Vipul Singh React Developer",
    "Vipul Singh Next.js Developer",
    "Vipul Singh KIIT",
    "Vipul Singh Kalinga Institute",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio Website",
    "Web Development Services",
  ],
  authors: [{ name: "Vipul Singh", url: "https://vipulsc.com" }],
  creator: "Vipul Singh",
  publisher: "Vipul Singh",
  metadataBase: new URL("https://vipulsc.com"),
  alternates: {
    canonical: "https://vipulsc.com",
  },
  openGraph: {
    title: "Vipul Singh | Full Stack Developer Portfolio",
    description:
      "Vipul Singh is a full-stack developer with expertise in React, Next.js, and modern web technologies. Explore my portfolio showcasing web development projects and professional experience.",
    url: "https://vipulsc.com",
    siteName: "Vipul Singh Portfolio",
    images: [
      {
        url: "https://vipulsc.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vipul Singh - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipul Singh | Full Stack Developer Portfolio",
    description:
      "Vipul Singh is a full-stack developer specializing in React, Next.js, and modern web technologies. View my portfolio of web development projects and professional experience.",
    creator: "@vipulsc1",
    images: ["https://vipulsc.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "portfolio",
  classification: "Personal Portfolio Website",
};

export const viewport = {
  themeColor: "#800080", // Purple color
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vipul Singh",
  jobTitle: "Full Stack Developer",
  description:
    "Vipul Singh is a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Building beautiful, fast, and user-friendly web applications.",
  url: "https://vipulsc.com",
  image: "https://vipulsc.com/og-image.png",
  sameAs: [
    "https://github.com/vipulsc",
    "https://linkedin.com/in/vipulsingh14",
    "https://twitter.com/vipulsc1",
  ],
  knowsAbout: [
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Responsive Web Design",
    "API Development",
    "Database Management",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Kalinga Institute of Industrial Technology",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Full Stack Developer",
  },
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Web Development",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Vipul Singh" />
        <meta name="copyright" content="Vipul Singh" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${roboto.variable} ${roboSlab.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1" role="main">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
