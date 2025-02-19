import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emre Diricanli",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-W9G8NWNXWY"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W9G8NWNXWY');
        </script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {/*<ThemeProvider*/}
      {/*    attribute="class"*/}
      {/*    defaultTheme="dark"*/}
      {/*    // enableSystem*/}
      {/*    // disableTransitionOnChange*/}
      {/*> */}
          {children}
      {/*</ThemeProvider>*/}

      </body>
    </html>
  );
}
