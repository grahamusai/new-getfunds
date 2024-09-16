import React from "react";
import { createClient } from "@sanity/client";
import { simpleBlogCard } from "../lib/interface";
import Navbar from "../components/Navbar";
import { Card } from "@/components/ui/card";

const Blog = async () => {
  const client = createClient({
    projectId: "j6zjk2ed",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2024-04-01", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  });

  // uses GROQ to query content: https://www.sanity.io/docs/groq
  async function getPosts() {
    const posts = await client.fetch(
      '*[_type == "post"]{mainImage,title,slug}'
    );
    return posts;
  }
  const data: simpleBlogCard[] = await getPosts();
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="md:px-24 py-24">
        
      </div>
    </div>
  );
};
export default Blog;
