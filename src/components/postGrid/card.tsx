import React from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

interface ICard {
  category: string;
  title: string;
  date: any;
  excerpt: string;
}

export default function Card({
  category,
  title,
  date,
  excerpt,
}: ICard): JSX.Element {
  return (
    <Box borderWidth="1px" borderRadius="xl" overflow="hidden">
      <VStack>
        <Text>{category}</Text>
        <Heading>{title}</Heading>
        <Text>{date}</Text>
        <Text>{excerpt}</Text>
      </VStack>
    </Box>
  );
}
