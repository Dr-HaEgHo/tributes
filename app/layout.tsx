import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/context/context'

const rubik = Rubik({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <GlobalContextProvider >
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
