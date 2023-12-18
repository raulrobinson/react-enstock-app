import React from "react";

export const metadata = {
  title: 'Categorias | EnStock',
  description: 'Una aplicacion que administra sus compras en malls y almacenes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
            {children}
      </div>     
  )
}
