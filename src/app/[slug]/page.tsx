import React from "react";
import { PortableText, type SanityDocument } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import "@/components/style.css";
import "@/components/BlogPage/Blog.css";

import { portableTextComponents } from "./../../components/PortableTextComponents";
import { client } from "@/sanity/client";
import HomeFaq from "@/components/HomePage/HomeFaq/HomeFaq";
import HomeDoc from "@/components/HomePage/HomeDoc/HomeDoc";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import BlogSidebar from "@/components/BlogPage/BlogSidebar/BlogSidebar";
import SanityHeader from "@/components/SanityHeader/SanityHeader";

// GROQ Queries
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  },
  youtubeVideoUrl
}`;

const SERVICE_QUERY = `*[_type == "ServiceCategory" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body1,
  body2,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  },
  youtubeVideoUrl
}`;

const NEWS_QUERY = `*[_type == "news" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  author,
  publishedAt,
  description,
  metaTitle,
  metaDescription,
  mainImage {
    asset->{ _id, url }
  }
}`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug });
  const service = !post ? await client.fetch(SERVICE_QUERY, { slug }) : null;
  const news =
    !post && !service ? await client.fetch(NEWS_QUERY, { slug }) : null;

  const content = post || service || news;

  if (!content) {
    return {
      title: "Not Found",
      description: "The page you're looking for doesn't exist.",
    };
  }

  return {
    title: content.metaTitle || content.title || "Default Title",
    description: content.metaDescription || "Default description.",
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(POST_QUERY, { slug });
  let service = null;
  let news = null;

  if (!post || Object.keys(post).length === 0) {
    service = await client.fetch<SanityDocument>(SERVICE_QUERY, { slug });
  }

  if ((!post || Object.keys(post).length === 0) && !service) {
    news = await client.fetch<SanityDocument>(NEWS_QUERY, { slug });
  }

  const content = post || service || news;
  if (!content) return notFound();

  const imageUrl = content?.mainImage?.asset?.url || null;
  const youtubeUrl = content?.youtubeVideoUrl || null;

  const isPost = !!post && Object.keys(post).length > 0;
  const isService = !!service && Object.keys(service).length > 0;
  const isNews = !!news && Object.keys(news).length > 0;

  const body = isService
    ? content?.body1 || content?.body2
    : content?.body || [];
  const videoIndex = 2;

  return (
    <div className={isNews || isPost ? "blog-container" : "main-container"}>
      <div className={isNews || isPost ? "blog-wrapper1" : "service-wrapper1"}>
        {/* SERVICE PAGE HEADER */}
        {isService && <SanityHeader title={content.title} />}

        {/* IMAGE FOR POST/NEWS */}
        {(isPost || isNews) && imageUrl && (
          <Image
            src={imageUrl}
            alt={content.title || "Content Image"}
            width={550}
            height={310}
          />
        )}

        {/* TITLE */}
        <h1
          className={isNews || isPost ? "blogHead-content" : "head-container"}
        >
          {content.title}
        </h1>

        {/* NEWS INFO */}
        {isNews && content.publishedAt && content.author && (
          <b className="published-date">
            Published on: {new Date(content.publishedAt).toLocaleDateString()}{" "}
            by {content.author}
          </b>
        )}

        {/* MAIN BODY (with optional YouTube) */}
        <div
          className={isNews || isPost ? "blogHead-content" : "head-container"}
        >
          {Array.isArray(body) &&
            body.map((block, index) => {
              if (index === videoIndex && youtubeUrl) {
                return (
                  <React.Fragment key={`block-${index}`}>
                    <PortableText
                      value={block}
                      components={portableTextComponents}
                    />
                    <div className="youtube-container">
                      <iframe
                        width="100%"
                        height="500"
                        src={
                          youtubeUrl.includes("youtu.be")
                            ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                            : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
                        }
                        title={content.title || "YouTube Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </React.Fragment>
                );
              }

              return (
                <PortableText
                  key={`block-${index}`}
                  value={block}
                  components={portableTextComponents}
                />
              );
            })}
        </div>

        {/* EXTRA COMPONENTS FOR SERVICES */}
        {isService && (
          <>
            <div className="head-container">
              <HomeFaq />
              <HomeDoc />
              <HomeTestimonial />
              {youtubeUrl && (
                <div className="youtube-container">
                  <iframe
                    width="100%"
                    height="500"
                    src={
                      youtubeUrl.includes("youtu.be")
                        ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                        : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
                    }
                    title={content.title || "YouTube Video"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {Array.isArray(content.body2) && (
              <div className="head-container">
                <PortableText
                  value={content.body2}
                  components={portableTextComponents}
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* SIDEBAR FOR BLOG/NEWS */}
      {(isPost || isNews) && (
        <div className="blog-wrapper2">
          <BlogSidebar />
        </div>
      )}
    </div>
  );
}
