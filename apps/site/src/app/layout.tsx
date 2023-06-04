import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes';
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
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      <html lang="en">
        <body className={SatoshiFont.className}>{props.children}</body>
      </html>
    </ClerkProvider>
  )
}
