import Image from "next/image";
export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between w-full h-25 bg-gray-800 shadow-sm px-[50px]">
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
                    <a href="#" className="link link-hover text-white font-bold">Home</a>
                    <a href="#" className="link link-hover text-white font-bold">About Us</a>
                    <a href="#" className="link link-hover text-white font-bold">Product</a>
                    <a href="#" className="link link-hover text-white font-bold">Teams</a>
                    <a href="#" className="link link-hover text-white font-bold">Blog</a>
                </div>
                <div className="">
                    <button className="btn">Login</button>
                </div>
            </div>
        </>
    );
}
