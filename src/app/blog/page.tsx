"use client";

import BlogCard from "@/components/Blog";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export interface IDisplayBlog {
    title: string;
    content: string;
    author: string;
    created: string;
    objectId: string;
}

export default function AboutUs() {
    const [blogs, setBlog] = useState<IDisplayBlog[]>([]);

    const onGetBlog = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/users/blog`);
            setBlog(response?.data?.blogPost);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        onGetBlog();
    }, []);

    return (
        <>
            <section className="flex flex-col items-center w-full min-h-screen py-10 px-4 sm:px-6 md:px-8 gap-10 mx-auto">
                <div className="flex flex-col gap-10 mt-20">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
                        Whats On Gojek
                    </h1>
                    <p className="text-md md:text-xl">
                        Our stories, latest updates, and exclusive promos. Find
                        anything you want to know about us.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {blogs.map((item, index) => {
                        return (
                            <Link href={item.objectId} key={index}>
                                <BlogCard {...item} />
                            </Link>
                        );
                    })}
                </div>
                <Link href={"/blog/createBlog"}>
                    <button className="btn rounded-full px-6 py-3 text-sm md:text-lg">
                        Create New Blog +
                    </button>
                </Link>
            </section>
        </>
    );
}
