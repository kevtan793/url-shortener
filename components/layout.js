import React from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Layout({ children }) {
  return (
    <div>
      {/* <header>Header</header> */}
      <main className={inter.className}>{children}</main>
      {/* <footer>Footer</footer> */}
    </div>
  );
}

export default Layout;