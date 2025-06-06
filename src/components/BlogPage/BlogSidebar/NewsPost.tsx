import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Image from "next/image";
import "@/components/BlogPage/Blog.css";

export const revalidate = 0;


const NEWS_QUERY = `*[_type == "news"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
    author,
  publishedAt,
  description,
  mainImage {
    asset->{ _id, url }
  }
}`;
export default async function NewsPost() {
  const posts = await client.fetch<SanityDocument[]>(NEWS_QUERY, {});

  return (
    <div className="blogPost-container">
      <ul>
        <h2>Latest News</h2>
        {posts.map((post) => (
          <Link href={`/${post.slug.current}`} key={post.id}>
            <ul>
              <li>
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={550}
                    height={310}
                    className="rounded-md object-cover aspect-video"
                  />
                )}
                <div className="blog-news">
                  <h6>{post.title}</h6>
                  <p>
                    {post.author} |{" "}
                    {new Date(post.publishedAt)
                      .toLocaleDateString("en-GB")
                      .replaceAll("/", "-")}
                  </p>
                </div>
              </li>
            </ul>
          </Link>
        ))}
      </ul>
    </div>
  );
}
