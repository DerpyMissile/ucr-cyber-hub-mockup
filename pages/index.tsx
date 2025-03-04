import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx, getAllMdxR } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ResourcesList } from "@/components/ResourcesList";
import { ArrowRight } from "react-feather";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
  resources: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts, resources }) => {
  return (
    <>
      <Page
        title="Cybersecurity at UC Riverside"
        description={
          <>
            <p>
              A hub of resources for any and all that are interested in any and
              all aspects of cybersecurity at UCR!
            </p>
          </>
        }
      >
        <p className="text-center">
          Cybersecurity at UC Riverside focuses on a wide range of topics,
          including System Security, Network Security, ML/AI Security, Software
          Security, Hardware Security, Cryptography, and Privacy.
        </p>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

        <h2 className="text-2xl font-bold mb-8 text-center">Faculty</h2>
        <PostList posts={posts} />
        <div className="mt-8">
          <Link
            passHref
            href="/posts"
            className="group inline-flex items-center gap-2 text-pink-600"
          >
            View all professors{" "}
            <ArrowRight
              className="group-hover:translate-x-0.5 transition-transform"
              width={".9em"}
            />
          </Link>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>

        <h2 className="text-2xl font-bold mb-8 text-center">Students</h2>
        <p className="text-2x1 text-center">To be updated.</p>

        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
        <h2 className="text-2xl font-bold mb-8 text-center">Resources</h2>
        <p className="text-center">
          We are always looking for talented and motivated students,
          researchers, and faculty to join our group. If you&apos;re interested
          in working with us, please contact us.
        </p>
        <ResourcesList resources={resources} />
        <div className="mt-8">
          <Link
            passHref
            href="/resources"
            className="group inline-flex items-center gap-2 text-pink-600"
          >
            View all resources{" "}
            <ArrowRight
              className="group-hover:translate-x-0.5 transition-transform"
              width={".9em"}
            />
          </Link>
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  const mdxFiles2 = getAllMdxR().map((resources) => resources["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
      resources: mdxFiles2.slice(0, 4),
    },
  };
};

export default Home;
