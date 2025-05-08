import type { Metadata } from "next";
import {Poppins ,Volkhov} from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // kies wat je nodig hebt
  variable: '--font-poppins',
  display: 'swap',
})

 export const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: '--font-volkhov',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jadoo",
  description: "jadoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${poppins.variable} ${volkhov.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
