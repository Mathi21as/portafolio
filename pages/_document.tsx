import { Html, Head, NextScript, Main } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-0 bg-[url('/resources/bg4.jpg')] 
					bg-bottom bg-cover bg-fixed font-caslon">
				<Main />
        <NextScript />
      </body>
    </Html>
  )
}
