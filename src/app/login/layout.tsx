import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={inter.className} style={{ margin: 0, padding: 0, backgroundColor: '#f9fbfd' }}>
        {children}
      </body>
    </html>
  );
}

