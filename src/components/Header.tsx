'use client'
import { FaUser } from "react-icons/fa";
import { authStore } from "@/store/auth.store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const { auth, isLoading } = authStore();
    const [menuOpen, setMenuOpen] = useState(false);

    if (isLoading && !auth.username) {
        return <div>Loading...</div>;
    }

    return (
        <section className="fixed flex items-center justify-between w-full h-20 bg-gray-800 shadow-sm px-5 md:px-[50px] z-50">
            
            {/* Logo */}
            <div>
                <Image
                    className="text-white"
                    src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg"
                    width={100}
                    height={100}
                    alt="Logo"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10">
                <Link href="/" className="link link-hover text-white font-bold">Home</Link>
                <Link href="/about" className="link link-hover text-white font-bold">About Us</Link>
                <Link href="/product" className="link link-hover text-white font-bold">Product</Link>
                <Link href="/team" className="link link-hover text-white font-bold">Teams</Link>
                <Link href="/blog" className="link link-hover text-white font-bold">Blog</Link>
            </div>

            {/* User Section */}
            <div className="hidden md:flex items-center gap-5">
                {auth?.username ? (
                    <>
                        <span className="text-white font-bold">Welcome, {auth.username}</span>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
                            <FaUser size={24} />
                        </div>
                    </>
                ) : (
                    <Link href={"/auth/login"}>
                        <button className="btn">Login</button>
                    </Link>
                )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-gray-900 flex flex-col items-center gap-5 py-5 z-50">
                    <Link href="/" className="text-white font-bold" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="text-white font-bold" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link href="/product" className="text-white font-bold" onClick={() => setMenuOpen(false)}>Product</Link>
                    <Link href="/team" className="text-white font-bold" onClick={() => setMenuOpen(false)}>Teams</Link>
                    <Link href="/blog" className="text-white font-bold" onClick={() => setMenuOpen(false)}>Blog</Link>

                    {auth?.username ? (
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-white font-bold">Welcome, {auth.username}</span>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
                                <FaUser size={24} />
                            </div>
                        </div>
                    ) : (
                        <Link href={"/auth/login"}>
                            <button className="btn w-[100px]" onClick={() => setMenuOpen(false)}>Login</button>
                        </Link>
                    )}
                </div>
            )}
        </section>
    );
}
