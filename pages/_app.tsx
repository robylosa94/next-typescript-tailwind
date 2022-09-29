import "@assets/fonts.scss"
import "@assets/main.scss"
import "@assets/chrome-bug.scss"

import { useEffect } from "react"

import type { AppProps } from "next/app"
import { Head } from "components/common"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}
