import { Inter } from 'next/font/google'
import './globals.css'
import AuthContext from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'Netflix Clone, why not ',
}

export const dynamic = "force-dynamic"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          {children}
        </AuthContext>
        </body>
    </html>
  )
}
