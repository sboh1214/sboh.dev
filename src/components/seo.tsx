import Head from "next/head";
import React from "react";

type Props = {
  description?: string;
  meta?: any;
  image?: any;
  title: string;
};

export default function SEO({
  description = "",
  meta = [],
  image = null,
  title,
}: Props): JSX.Element {
  const metaTitle = `${title} | 오승빈(Seungbin Oh)`;
  const metaDescription = description || "오승빈(Seungbin Oh)의 개인 사이트";
  const ogImageUrl = image || "https://sboh.dev/og-default.png";

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta property="charSet" content="utf-8" />
      <meta property="description" content={metaDescription} />
      <meta property="image" content={ogImageUrl} />
      <meta property="og:title" content="오승빈(Seungbin Oh)" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="오승빈(Seungbin Oh)" />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImageUrl} />
    </Head>
  );
}
