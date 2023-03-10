import "@/assets/main.css"
import "@/assets/chrome-bug.css"

import { useRouter } from "next/router"
import { SiteContextProvider } from "@/lib/context"
import { useEffect } from "react"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  return (
    <>
      <SiteContextProvider>
        <Component {...pageProps} key={router.asPath} />
      </SiteContextProvider>
    </>
  )
}
