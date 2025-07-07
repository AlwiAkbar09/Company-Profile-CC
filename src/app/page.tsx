import Image from "next/image";
import { FaBox } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";

export default function HomePage() {
    return (
        <>
            {/* {Hero Section} */}
            <section className="relative flex flex-col items-center justify-center h-screen w-full bg-black gap-5 md:gap-10">
                <div className="absolute inset-0 flex flex block md:hidden">
                    <Image
                    src="https://cdn-site.gojek.com/uploads/multiservice_mobile_v2_a57833d7eb/multiservice_mobile_v2_a57833d7eb.png"
                    alt="Gojek UI Mobile Background"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    quality={100}
                    priority
                />
                <h1 className="text-white text-center font-extrabold text-xl tracking-tight z-10 mx-auto mt-50">
                    Beragam Kebutuhan, Satu Solusi #PastiAdaJalan
                </h1>

                </div>
                <video
                    className="absolute top-0 left-0 w-full max-h-screen object-cover  hidden md:block"
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
            <section className="flex flex-col items-center min-h-screen w-full bg-gray-800 gap-5 md:gap-10 py-10 px-4 md:py-20">
                <h1 className="text-white font-bold text-3xl md:text-5xl tracking-wide text-center">
                    One Solution For Every Need
                </h1>
                <div className="flex gap-5 md:gap-10">
                    <IoFastFood className="text-white w-6 h-6 md:w-10 md:h-10" />
                    <RiEBikeFill className="text-white w-6 h-6 md:w-10 md:h-10" />
                    <FaCarRear className="text-white w-6 h-6 md:w-10 md:h-10" />
                    <FaBox className="text-white w-6 h-6 md:w-10 md:h-10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-auto mt-10">
                    <div className="relative bg-green-300 text-primary-content w-60 rounded-xl shadow-md p-4 flex flex-col items-center">
                        <Image
                            className="w-28 md:w-36 mb-5 mt-5"
                            src="/area.png"
                            width={313}
                            height={216}
                            alt="Operational Area"
                        />
                        <h1 className="text-center text-black font-bold text-xl md:text-2xl">
                            Operational Area
                        </h1>
                        <p className="text-center text-black font-medium text-sm md:text-base mt-2">
                            Operations in Indonesia and Singapore
                        </p>
                    </div>

                    <div className="relative card bg-purple-300 text-primary-content w-60 rounded-xl shadow-md p-4 flex flex-col items-center">
                        <div className="card-body">
                            <Image
                                className="w-28 md:w-36 mb-5"
                                src="/driver.png"
                                width={313}
                                height={216}
                                alt="Logo Gojek"
                            />

                            <h1 className="text-center text-black font-bold text-xl md:text-2xl">
                                3.1 million+
                            </h1>
                            <h1 className="text-center text-black font-medium text-sm md:text-base mt-2">
                                driver-partners
                            </h1>
                        </div>
                    </div>
                    <div className="relative card bg-orange-300 text-primary-content w-60 rounded-xl shadow-md p-4 flex flex-col items-center">
                        <div className="card-body">
                            <Image
                                className="w-28 md:w-36 mb-5"
                                src="/merchant.png"
                                width={313}
                                height={216}
                                alt="Logo Gojek"
                            />

                            <h1 className="text-center text-black font-bold text-xl md:text-2xl">
                                20.1 million+
                            </h1>
                            <h1 className="text-center text-black font-medium text-sm md:text-base mt-2">
                                Merchants within the GoTo ecosystem
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* {Product} */}
            <section className="flex flex-col items-center  min-h-screen w-full bg-black gap-10 py-10 px-4 md:py-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-bold text-xl md:text-3xl tracking-wide text-center my-5">
                        We have 20+ products serving millions of customers
                        across{" "}
                        <a className="text-green-400">Transport & Logistics</a>,
                        Food & Shopping, Payments, Daily needs, Business, News &
                        Entertainment.
                    </h1>
                    <div className="grid grid-cols-1  md:grid-cols-3 gap-6 md:gap-10 mt-10 w-full max-w-5xl">
                        <div className="card bg-green-600 text-primary-content w-full mx-auto flex flex-col justify-between p-4 rounded-xl">
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
                        <div className="card bg-red-600 text-primary-content w-full mx-auto flex flex-col justify-between p-4 rounded-xl">
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
                        <div className="card bg-purple-600 text-primary-content w-full mx-auto flex flex-col justify-between p-4 rounded-xl">
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
            <section className="relative flex flex-col items-start justify-center h-screen w-full bg-gray-800 gap-10 mx-auto p-20">
                {/* Background Image */}
                <div className="absolute inset-0 block md:hidden">
                    {" "}
                    <Image
                        src="https://cdn-site.gojek.com/uploads/ui_mobile_9ee9b277ac/ui_mobile_9ee9b277ac.png"
                        alt="Gojek UI Mobile Background"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        priority
                    />
                </div>
                <div className="absolute inset-0 hidden md:block">
                    {" "}
                    <Image
                        src="https://cdn-site.gojek.com/uploads/ui_web_6c5eca8ca5/ui_web_6c5eca8ca5.png"
                        alt="Gojek UI Mobile Background"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        priority
                    />
                </div>

                <h1 className="relative z-10 text-white font-bold text-xl md:text-5xl tracking-wide text-start mt-15">
                    Good to Go? Download <br />
                    the Gojek app today!
                </h1>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 z-10">
                    <button className="btn rounded-full px-6 py-3 text-sm md:text-lg">
                        App Store
                    </button>
                    <button className="btn rounded-full px-6 py-3 test-sm md:text-lg">
                        Play Store
                    </button>
                </div>
            </section>
        </>
    );
}
