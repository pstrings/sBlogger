import Head from "next/head";
import Header from "../components/header";
import Banner from "@/components/banner";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link.js";
import Image from "next/image";

// server side rendering the page and quering data from sanity cms
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: { posts: Post }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>sBlogger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main>{/* Posts */}</main>
      {/* have to wrap the posts in fragment otherwise we'll get type error */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
              <Image
                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                height={1000}
                width={1000}
                src={urlFor(post.mainImage).url()!}
                alt={`${post.title} image`}
              />
              <div className="flex justify-between p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description}{" "}
                    <span className="italic font-semibold">
                      -by {post.author.name}
                    </span>
                  </p>
                </div>
                <Image
                  className="rounded-full h-12 w-12"
                  src={urlFor(post.author.image).url()!}
                  alt={`${post.author.name}'s image`}
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
