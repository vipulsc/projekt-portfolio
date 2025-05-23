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
  title: "Vipul Singh",
  description:
    "I'm Vipul Singh, a passionate full-stack developer who loves building beautiful, fast, and user-friendly web apps.",
  keywords: [
    "Vipul Singh",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Vipul Singh", url: "https://vipulsc.vercel.app" }],
  creator: "Vipul Singh",
  metadataBase: new URL("https://vipulsc.vercel.app"), // ✅ MODIFY if your domain changes
  openGraph: {
    title: "Vipul Singh | Portfolio",
    description:
      "Explore my portfolio showcasing web development projects, skills, and contact information.",
    url: "https://vipulsc.vercel.app", // ✅ MODIFY to your deployed site URL
    siteName: "Vipul's Portfolio",
    images: [
      {
        url: "https://vipulsc.vercel.app/og-image.png", // ✅ MODIFY with actual hosted OG image
        width: 1200,
        height: 630,
        alt: "Vipul Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipul Singh | Portfolio",
    description:
      "Explore my portfolio showcasing web development projects, skills, and contact information.",
    creator: "@vipulsc1", // ✅ MODIFY with your Twitter handle
    images: ["https://vipulsc.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "portfolio",
};
export const viewport = {
  themeColor: "#800080", // Purple color
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboSlab.variable} antialiased`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
