import Navbar from "@/components/navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import dynamic from "next/dynamic"
import LiveChat from "@/components/liveChat"

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
})

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LADAMPA",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <LiveChat />
        {children}
        <Footer />
      </body>
    </html>
  )
}
