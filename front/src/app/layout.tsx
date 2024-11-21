import type { Metadata } from "next";
import { Figtree } from 'next/font/google';
import "./globals.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Vibra Oeste",
  description: "Creado para Emprendimiento Personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <AuthProvider>
    <html lang="es" className={figtree.className}>
      <body className={figtree.className}>
      {/* <ToastContainer /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
    // </AuthProvider>
  );
}

