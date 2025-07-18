import './globals.css'

export const metadata = {
  title: 'nocturnys',
  description: 'nocturnys',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body 
        className="antialiased bg-cover" 
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}