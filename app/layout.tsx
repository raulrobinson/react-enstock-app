import './globals.css'
import { Raleway } from 'next/font/google'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

const inter = Raleway({ subsets: ["latin"]})

export const metadata = {
  title: 'EnStock',
  description: 'Una aplicacion que administra sus compras en malls y almacenes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
            <ToastContainer />
      </body>
    </html>
  )
}
