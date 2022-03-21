import { Heading, Text, Divider, VStack } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export default function Index(): JSX.Element {
  return (
    <Layout title="nav.home">
      <VStack>
        <Heading>Hello</Heading>
        <Divider />
        <Text>I&apos;m Seungbin Oh</Text>
        <Text>2019 Null 회장</Text>
        <Text>2022 SPARCS 회장</Text>
      </VStack>
    </Layout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "ko", ["common"])),
    },
  };
}
