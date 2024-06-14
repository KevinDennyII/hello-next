import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  // for creating timestamp exercise to only read and use from server.
  const timestamp = new Date().toLocaleString();

  return (
    <html lang="en">
      <body>
        {children}
      <footer>Page rendered on {timestamp}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
