import { ClerkProvider } from '@clerk/nextjs'
import localFont from "next/font/local";

import '../styles/index.css';

const SatoshiFont = localFont({
  src: "../../public/fonts/Satoshi.ttf",
  variable: "--font-satoshi",
});

export default function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={SatoshiFont.className}>{props.children}</body>
      </html>
    </ClerkProvider>
  )
}
