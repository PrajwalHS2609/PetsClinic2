import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";
import Image from "next/image";
import "@/components/BlogPage/Blog.css";
export const revalidate = 0;

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...100]{
  _id,
  title,
  slug,
  description,
  mainImage{
    ...,
    asset->{
      _id,
      url
    }
  }
}`;
export default async function BlogMain() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <div className="homeBlogMain-container">
      {posts.map((post) => (
        <div className="homeBlogMain-content" key={post._id}>
          <div className="homeBlogMain-item">
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={550}
                height={310}
                className="rounded-md object-cover aspect-video"
              />
            )}
          </div>
          <div className="homeBlogMain-item">
            <h3>
              <Link href={`/${post.slug.current}`}>{post.title}</Link>
            </h3>
            <p>{post.description}</p>
            <Button text="Read More" link={`/${post.slug.current}`} />
          </div>
        </div>
      ))}
    </div>
  );
}
