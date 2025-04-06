import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'From Code to Profitable Business',
  description: 'From code to profitable business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
