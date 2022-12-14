import "@assets/fonts.scss";
import "@assets/main.scss";
import "@assets/chrome-bug.scss";

import { FC, useEffect } from "react";

import type { AppProps } from "next/app";
import { Head } from "@components/common";

const Noop: FC = ({ children }) => <>{children}</>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
