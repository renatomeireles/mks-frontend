import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Layout teste mks-frontend-challenge',
  authors: {
    name: 'Renato Meireles',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
