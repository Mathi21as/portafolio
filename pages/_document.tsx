import { Html, Head, NextScript, Main } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-0 bg-neutral-900 text-white">
				<Main />
        <NextScript />
      </body>
    </Html>
  )
}
