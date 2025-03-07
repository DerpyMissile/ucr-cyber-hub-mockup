import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [displayedPosts, setDisplayedPosts] = useState<MDXFrontMatter[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Update displayed posts when start index changes
  useEffect(() => {
    const endIndex = Math.min(startIndex + 9, posts.length);
    setDisplayedPosts(posts.slice(startIndex, endIndex));
    setActiveIndex(0);
  }, [startIndex, posts]);

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const activeProfessor = displayedPosts[displayIndex];

  const handlePrevious = () => {
    // Move to previous batch of 9 professors
    setStartIndex((prev) => Math.max(0, prev - 9));
  };

  const handleNext = () => {
    // Move to next batch of 9 professors
    if (startIndex + 9 < posts.length) {
      setStartIndex((prev) => prev + 9);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
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
                disabled={startIndex === 0}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  startIndex === 0
                    ? "bg-gray-300 text-gray-500"
                    : "bg-blue-500 text-white"
                }`}
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={startIndex + 9 >= posts.length}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  startIndex + 9 >= posts.length
                    ? "bg-gray-300 text-gray-500"
                    : "bg-blue-500 text-white"
                }`}
              >
                &gt;
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {displayedPosts.map((post, index) => (
              <li
                key={slugify(post.title)}
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
                  {/* <Link href={post.website}>{post.title}</Link> */}
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
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
                    {/* <span className="font-semibold">
                      Most Recent Publication:
                    </span> */}
                    {/* <br />
                    {activeProfessor.publication} */}
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
