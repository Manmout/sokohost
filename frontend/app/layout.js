import './globals.css';

export const metadata = {
  title: 'SokoHost - Digital Products Marketplace',
  description: 'Buy and sell digital products online',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <nav className='navbar'>
          <div className='container'>
            <h1>SokoHost</h1>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/products'>Products</a></li>
              <li><a href='/dashboard'>Dashboard</a></li>
              <li><a href='/login'>Login</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className='footer'>
          <p>&copy; 2026 SokoHost. All rights reserved. MIT License</p>
        </footer>
      </body>
    </html>
  );
}
