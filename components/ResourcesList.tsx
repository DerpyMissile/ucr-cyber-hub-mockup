import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";
import Image from "next/image";
import React, { useState } from "react";

interface ResourcesListProps {
  resources: Array<MDXFrontMatter>;
}

export const ResourcesList: React.FC<ResourcesListProps> = ({ resources }) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resources, index) => (
          <a
            key={index}
            href={`/resources/${resources.slug}`}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="space-y-2">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="text-2xl">{resources.emoji}</div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {resources.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {resources.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
