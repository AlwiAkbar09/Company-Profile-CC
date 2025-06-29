import Image from "next/image";
export default function Header() {
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
                    <a href="/" className="link link-hover text-white font-bold">Home</a>
                    <a href="/about" className="link link-hover text-white font-bold">About Us</a>
                    <a href="/product" className="link link-hover text-white font-bold">Product</a>
                    <a href="/teams" className="link link-hover text-white font-bold">Teams</a>
                    <a href="/blog" className="link link-hover text-white font-bold">Blog</a>
                </div>
                <div className="">
                    <button className="btn">Login</button>
                </div>
            </section>
        </>
    );
}
