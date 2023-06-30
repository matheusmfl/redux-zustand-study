'use client'
import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React + Zustand + Redux',
  description: 'Developed by Matheus Fonteles',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ReduxProvider store={store}>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  )
}
