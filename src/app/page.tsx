import Image from "next/image";
import { FaBox } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";

export default function HomePage() {
    return (
        <>
            {/* {Hero Section} */}
            <section className="relative flex flex-col items-center justify-center h-screen w-full bg-black gap-10">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/home.m4v"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    Your browser does not support the video tag.
                </video>
            </section>

            {/* {Company Overview} */}
            <section className="flex flex-col items-center h-screen w-full bg-gray-800 gap-20 p-20">
                <h1 className="text-white font-bold text-5xl tracking-wide">
                    One Solution For Every Need.
                </h1>
                <div className="flex gap-10">
                    <IoFastFood size={40} className="text-white" />
                    <RiEBikeFill size={40} className="text-white" />
                    <FaCarRear size={40} className="text-white" />
                    <FaBox size={40} className="text-white" />
                </div>
                <div className="grid grid-cols-3 gap-25 h-100 mt-10">
                    <div className="relative card bg-green-300 text-primary-content w-60">
                        <div className="card-body">
                            <Image
                                className="absolute right-[20px] -translate-y-1/2"
                                src="/area.png"
                                width={313}
                                height={216}
                                layout="intrinsic"
                                alt="Logo Gojek"
                            />
                            <p></p>
                            <h1 className="text-center text-black font-bold block w-full text-3xl">
                                Operational Area
                            </h1>
                            <h1 className="text-center text-black font-medium block w-full text-md mb-15">
                                Operations in Indonesia and Singapore
                            </h1>
                        </div>
                    </div>
                    <div className="relative card bg-purple-300 text-primary-content w-60">
                        <div className="card-body">
                            <Image
                                className="absolute right-[20px] -translate-y-1/2"
                                src="/driver.png"
                                width={313}
                                height={216}
                                layout="intrinsic"
                                alt="Logo Gojek"
                            />
                            <p></p>
                            <h1 className="text-center text-black font-bold block w-full text-3xl">
                                3.1 million+
                            </h1>
                            <h1 className="text-center text-black font-medium block w-full text-md mb-15">
                                driver-partners
                            </h1>
                        </div>
                    </div>
                    <div className="relative card bg-orange-300 text-primary-content w-60">
                        <div className="card-body">
                            <Image
                                className="absolute right-[20px] -translate-y-1/2"
                                src="/merchant.png"
                                width={313}
                                height={216}
                                layout="intrinsic"
                                alt="Logo Gojek"
                            />
                            <p></p>
                            <h1 className="text-center text-black font-bold block w-full text-3xl">
                                20.1 million+
                            </h1>
                            <h1 className="text-center text-black font-medium block w-full text-md mb-15">
                                Merchants within the GoTo ecosystem
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* {Product} */}
            <section className="flex flex-col items-center  h-screen w-full bg-black gap-10 p-50">
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-bold text-3xl tracking-wide text-center">
                        We have 20+ products serving millions of customers
                        across{" "}
                        <a className="text-green-400">Transport & Logistics</a>,
                        Food & Shopping, Payments, Daily needs, Business, News &
                        Entertainment.
                    </h1>
                    <div className="grid grid-cols-3 gap-10 h-100 mt-10">
                        <div className="card bg-green-600 text-primary-content w-96">
                            <div className="card-body">
                                <Image
                                    className="text-white"
                                    src="/goride_horizontal_logo_white_a2b9d20d84.svg"
                                    width={130}
                                    height={32}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <Image
                                    className="text-white"
                                    src="/gocar.svg"
                                    width={123}
                                    height={30}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <Image
                                    className="text-white"
                                    src="/gosend.svg"
                                    width={149}
                                    height={32}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <Image
                                    className="text-white"
                                    src="/gotransit.svg"
                                    width={162}
                                    height={29}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <p></p>
                                <h1 className="text-center text-white font-bold block w-full text-xl">
                                    Transport & Logistics
                                </h1>
                            </div>
                        </div>
                        <div className="card bg-red-600 text-primary-content w-96">
                            <div className="card-body">
                                <Image
                                    className="text-white"
                                    src="/gofood.svg"
                                    width={140}
                                    height={32}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <Image
                                    className="text-white"
                                    src="/gomart.svg"
                                    width={143}
                                    height={32}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <Image
                                    className="text-white"
                                    src="/goshop.svg"
                                    width={151}
                                    height={32}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <p></p>
                                <h1 className="text-center text-white font-bold block w-full text-xl">
                                    Food and Groceries
                                </h1>
                            </div>
                        </div>
                        <div className="card bg-purple-600 text-primary-content w-96">
                            <div className="card-body">
                                <Image
                                    className="text-white"
                                    src="/gobiz.svg"
                                    width={130}
                                    height={30}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <Image
                                    className="text-white"
                                    src="/gocorp.svg"
                                    width={142}
                                    height={31}
                                    layout="intrinsic"
                                    alt="Logo Gojek"
                                />
                                <p></p>
                                <h1 className="text-center text-white font-bold block w-full text-xl">
                                    Business Solution
                                </h1>
                            </div>
                        </div>
                    </div>
                    <a
                        href="/product"
                        className="btn bg-green-600 mt-10 text-white border-none rounded-full px-10"
                    >
                        View More
                    </a>
                </div>
            </section>
            <section className="relative flex flex-col items-start justify-center h-screen w-full bg-gray-800 gap-20 p-20">
                {/* Background Image */}
                <div className="absolute inset-0"> {/* Menggunakan inset-0 untuk top-0, left-0, bottom-0, right-0 */}
                    <Image
                        src="https://cdn-site.gojek.com/uploads/ui_web_6c5eca8ca5/ui_web_6c5eca8ca5.png"
                        alt="Gojek UI Mobile Background"
                        layout="fill" // Menggunakan layout="fill" untuk mengisi parent
                        objectFit="cover" // Menskalakan gambar agar menutupi seluruh area tanpa distorsi
                        objectPosition="center" // Memastikan gambar terpusat
                        quality={100} // Opsional: untuk kualitas gambar yang lebih baik (perhatikan ukuran file)
                        priority // Opsional: Untuk memuat gambar ini lebih awal karena ini adalah background utama
                    />
                </div>

                {/* Content Overlay */}
                <h1 className="relative z-10 text-white font-bold text-5xl tracking-wide text-start"> {/* Tambahkan relative z-10 dan text-center */}
                   Good to Go? Download the<br/> Gojek app today!
                </h1>
                <div className="flex flex-row gap-10">
                    <button className="btn rounded-full">App Store</button>
                    <button className="btn rounded-full">Play Store</button>
                </div>
                {/* Tambahkan div lain jika Anda memiliki konten lain di atas gambar */}
            </section>
        </>
    );
}
