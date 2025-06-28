import Image from "next/image";
import { FaBox } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { RiEBikeFill } from "react-icons/ri";

export default function HomePage() {
    return (
        <>
            {/* {Hero Section} */}
            <section className="flex flex-col items-center justify-center h-screen w-full bg-black gap-10">
                <div>
                    <Image
                        className="text-white"
                        src="/GojekLogo-white.svg"
                        width={200}
                        height={112}
                        alt="Logo Gojek"
                    />
                </div>
                <h1 className="text-white font-bold text-5xl tracking-wide">
                    One Solution For Every Need.
                </h1>
                <div className="flex gap-10">
                    <IoFastFood size={40} className="text-white" />
                    <RiEBikeFill size={40} className="text-white" />
                    <FaCarRear size={40} className="text-white" />
                    <FaBox size={40} className="text-white" />
                </div>
            </section>

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
                    <a href="#" className="btn bg-green-600 mt-10 text-white border-none rounded-full px-10">View More</a>
                </div>
            </section>
        </>
    );
}
