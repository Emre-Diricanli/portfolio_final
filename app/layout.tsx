
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import ScrollToTop from "@/components/ui/ScrollToTop";

// Dynamically import non-critical components
// const ScrollToTop = dynamic(() => import("@/components/ui/ScrollToTop"), { ssr: false });
const Dock = dynamic(() => import("@/components/Dock"), { ssr: true });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap", // Better font loading
    preload: true,   // Ensure fonts are preloaded
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "Emre Diricanli | Software Engineer & DevOps Specialist",
    description: "Software engineer specializing in DevOps, cloud computing, and web development with experience in JavaScript, TypeScript, and modern web technologies.",
    keywords: ["Software Engineer", "DevOps", "Cloud Computing", "Web Development", "JavaScript", "TypeScript"],
    openGraph: {
        type: "website",
        url: "https://ediricanli.com/",
        title: "Emre Diricanli | Software Engineer",
        description: "Software engineer specializing in DevOps, cloud computing, and web development.",
        siteName: "Emre Diricanli Portfolio",
    },
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ScrollToTop/>
        <GoogleAnalytics gaId="G-W9G8NWNXWY" strategy="afterInteractive" />
        {children}
      <Dock />
      </body>
    </html>
  );
}
