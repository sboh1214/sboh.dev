import { GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Libs(): JSX.Element {
  return <Layout title="nav.libs">Under construction</Layout>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "ko", ["common"])),
    },
  };
}
