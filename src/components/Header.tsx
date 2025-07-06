'use client'
import { FaUser } from "react-icons/fa";
import { authStore } from "@/store/auth.store";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    const { auth,isLoading } = authStore();
    if (isLoading && !auth.username) {
    return <div>Loading...</div>;
  }

    return (
        <>
            <section className="fixed flex items-center justify-between w-full h-25 bg-gray-800 shadow-sm px-[50px] z-50">
                <div className="">
                    <Image
                        className="text-white"
                        src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
                        width={112}
                        height={112}
                        alt="Picture of the author"
                    />
                </div>
                <div className="flex gap-10">
                    <Link
                        href="/"
                        className="link link-hover text-white font-bold"
                    >
                        Home
                    </Link>
                    <a
                        href="/about"
                        className="link link-hover text-white font-bold"
                    >
                        About Us
                    </a>
                    <a
                        href="/product"
                        className="link link-hover text-white font-bold"
                    >
                        Product
                    </a>
                    <a
                        href="/team"
                        className="link link-hover text-white font-bold"
                    >
                        Teams
                    </a>
                    <a
                        href="/blog"
                        className="link link-hover text-white font-bold"
                    >
                        Blog
                    </a>
                </div>
                <div className="flex items-center gap-5">
                    {auth?.username ? (
                        <>
                            <span className="text-white font-bold">Welcome, {auth?.username}</span>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white"><FaUser size={24}/></div>
                        </>
                    ) : (
                        <Link href={"/auth/login"}>
                            <button className="btn">Login</button>
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
}
