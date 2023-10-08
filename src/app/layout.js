import { Menu } from '../../components/molecules/menu/menu';
import './globals.css';
import { Pacifico } from 'next/font/google';
import { CurrentProvider } from './store/CurrentProvider';
import ProviderBooking from './store/ProviderBooking';

const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Book It',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <ProviderBooking>
        <CurrentProvider>
        <body className={pacifico.className}>
          <Menu />
          {children}
        </body>
        </CurrentProvider>
        </ProviderBooking>
      </html>
    </>
  )
}
