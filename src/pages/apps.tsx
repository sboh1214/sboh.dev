import React from "react";
import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function Apps(): JSX.Element {
  return <Layout title="nav.apps">Under construction</Layout>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "ko", ["common"])),
    },
  };
}
