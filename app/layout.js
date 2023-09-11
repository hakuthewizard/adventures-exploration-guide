import React from 'react';
import Head from 'next/head';
export const metadata = {
  title: 'Next.js 13 with Clerk',
};

export default function RootLayout({ children }) {
  return (

      <html lang="en">

        <body>
        <head><title>Adventures and Exploration Guide</title></head>
          {children}
      
        </body>
      </html>

  );
}
