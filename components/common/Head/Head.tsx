import { DefaultSeo } from "next-seo";
import { FC } from "react";
import NextHead from "next/head";
import config from "@config/seo.json";

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </NextHead>
    </>
  );
};

export default Head;
