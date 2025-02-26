import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";
import Image from "next/image";
import React, { useState } from "react";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  // return (
  //   <ul
  //     className={cx(
  //       "divide-y -my-8",
  //       "divide-gray-200",
  //       "dark:divide-gray-700"
  //     )}
  //   >
  //     {posts.map((post, index) => {
  //       return (
  //         <li className="py-8" key={index}>
  //           <article>
  //             {/* <h2 className="font-bold text-xl">
  //               <Link href={`/posts/${post.slug}`}>{post.title}</Link>
  //             </h2>
  //             {post.description ? (
  //               <div className="mt-3">
  //                 <Prose>
  //                   <p>{post.description}</p>
  //                 </Prose>
  //               </div>
  //             ) : null}
  //             {post.tags ? (
  //               <ul className="mt-4 flex flex-wrap space-x-2">
  //                 {post.tags.map((tag, index) => {
  //                   return (
  //                     <li key={index}>
  //                       <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
  //                     </li>
  //                   );
  //                 })}
  //               </ul>
  //             ) : null} */}
  //             <div className="border border-blue-600 rounded-lg p-4 flex flex-col">
  //               <div className="flex items-start mb-4">
  //                 <div className="w-16 h-16 rounded-full border-2 border-blue-600 flex-shrink-0 mr-4 flex items-center justify-center">
  //                   {/* Placeholder for professor image/icon */}
  //                   <div className="w-12 h-6 border-2 border-blue-500 rounded-md flex items-center justify-center">
  //                     <div className="text-xs text-blue-600">👀</div>
  //                   </div>
  //                 </div>
  //                 <div>
  //                   <h3 className="font-bold text-lg border-b border-blue-600">
  //                     <Link href={`/posts/${post.slug}`}>{post.title}</Link>
  //                   </h3>
  //                   <p className="text-gray-700">{post.description}</p>
  //                 </div>
  //               </div>
  //               <div className="mt-auto pt-4 border-t border-blue-600 flex gap-2">
  //                 {/* {professor.tags.map((tag) => (
  //                   <span
  //                     key={tag}
  //                     className="px-3 py-1 bg-white border border-blue-600 rounded-full text-sm"
  //                   >
  //                     #{tag}
  //                   </span>
  //                 ))} */}
  //                 {post.tags ? (
  //                   <ul className="mt-4 flex flex-wrap space-x-2">
  //                     {post.tags.map((tag, index) => {
  //                       return (
  //                         <li key={index}>
  //                           <Tag href={`/posts/tagged/${slugify(tag)}`}>
  //                             {tag}
  //                           </Tag>
  //                         </li>
  //                       );
  //                     })}
  //                   </ul>
  //                 ) : null}
  //               </div>
  //             </div>
  //           </article>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const activeProfessor = posts[displayIndex];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Faculty</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Professor List (Left Side) */}
        <div
          className={cx(
            "divide-y -my-8",
            "divide-gray-200",
            "dark:divide-gray-700"
          )}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Our Professors</h3>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevious}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white"
              >
                &gt;
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {posts.map((posts, index) => (
              <li
                key={slugify(posts.title)}
                className={`p-3 cursor-pointer border-l-4 transition-colors duration-200 ${
                  index === activeIndex
                    ? "border-blue-500 divide-gray-200"
                    : "border-transparent hover:dark:divide-gray-100"
                }`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="text-lg font-medium underline">
                  {posts.title}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Professor Detail (Right Side) */}
        {activeProfessor && (
          <div className="bg-gray-800 text-white rounded-lg p-6 border border-blue-500">
            <div className="flex items-start mb-6">
              <div className="w-24 h-24 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center flex-shrink-0 mr-4">
                <div className="w-16 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="text-2xl">👀</div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold border-b border-blue-500 pb-1 mb-2">
                  {activeProfessor.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-semibold">Classes:</span>{" "}
                    {activeProfessor.classes.join(", ")}
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">
                      Most Recent Publication:
                    </span>
                    <br />
                    {activeProfessor.publication}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-500 pt-4 flex flex-wrap gap-2">
              {activeProfessor.tags ? (
                <ul className="mt-4 flex flex-wrap space-x-2">
                  {activeProfessor.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
