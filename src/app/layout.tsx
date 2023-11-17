import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'



export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className='relative overflow-hidden'>
      {children}
        </main>
      <Footer/>
      </body>
    </html>

        
  )
}
