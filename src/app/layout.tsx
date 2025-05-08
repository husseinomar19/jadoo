import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // kies wat je nodig hebt
  variable: '--font-poppins',
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
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
