import React, { useRef } from "react";
import Link from "next/link";
import Card from "./card";
import useInfiniteScroll from "./useInfiniteScroll";
import { SimpleGrid } from "@chakra-ui/react";

type Props = {
  posts: IPost[];
};

interface IPost {
  id: any;
  excerpt: string;
  slug: string;
  title: string;
  date: any;
  category: ICategory;
}

interface ICategory {
  fieldValue: string;
  totalCount: number;
}

export default function PostGrid({ posts }: Props): JSX.Element {
  const scrollEdgeRef = useRef(null);
  const currentList = useInfiniteScroll({
    posts,
    scrollEdgeRef,
    maxPostNum: 10,
    offsetY: 200,
  });

  return (
    <SimpleGrid minChildWidth="360px" spacing="24px" role="list">
      {currentList.map((data: IPost) => {
        const { id, excerpt, slug, title, date, category } = data;
        const ariaLabel = `${title} - ${category} - Posted on ${date}`;
        return (
          <Link href={slug} aria-label={ariaLabel} key={id} passHref>
            <Card
              category={category.fieldValue}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          </Link>
        );
      })}
      <div ref={scrollEdgeRef} />
    </SimpleGrid>
  );
}
