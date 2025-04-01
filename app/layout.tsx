import type React from "react"
import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import "./globals.css"

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
})

// Update the metadata
export const metadata: Metadata = {
  title: "Carlos Fernández | Developer Portfolio",
  description: "Interactive developer portfolio for Carlos Fernández",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body className="bg-background text-white font-mono min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  )
}



import './globals.css'