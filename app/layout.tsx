import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Lawrence Caulker's Portfolio",
  description:
    "Web developer Portfolio using Next.js 16, Tailwind CSS, React 19, and TypeScript"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  )
}
