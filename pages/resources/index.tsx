import type { GetStaticProps, NextPage } from "next";
import { getAllMdxR } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { ResourcesList } from "@/components/ResourcesList";

interface PostsProps {
  resources: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ resources }) => {
  return (
    <>
      <Page
        title="Resources"
        description="Here is the full comprehensive list of resources in UCR."
      >
        <ResourcesList resources={resources} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdxR().map((resources) => resources["frontMatter"]);
  return {
    props: {
      resources: mdxFiles,
    },
  };
};

export default Posts;
