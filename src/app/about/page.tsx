import Image from "next/image";
export default function AboutUs() {
    return (
        <>
            {/* {Landing} */}
            <section className="flex flex-col justify-center items-start h-screen w-full bg-gray-800 gap-6 p-25">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src="https://cdn-site.gojek.com/uploads/07a20af54b341e264544a11bcc2513f8_ad9622e979.webp"
                        width={313}
                        height={216}
                        layout="responsive"
                        alt="Logo Gojek"
                    />
                </div>
                <h1 className="text-white font-extrabold text-5xl tracking-tight z-10 mx-30 mt-15">
                    Been quite a ride
                </h1>
                <div className="text-white font-medium text-xl tracking-tight z-10 mx-30">
                    Know our journey, and the people behind it.
                </div>
            </section>
            {/* {Journey} */}
            <section>
                <div className="carousel rounded-box h-screen w-full">
                    <div
                        id="slide1"
                        className="relative carousel-item  w-full bg-[#73946B]"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    In 2010
                                </h1>
                                <p>
                                    Gojek started with a mission to improve the
                                    livelihoods of local ojeks (motorcycle
                                    taxis). Every customer was 'matched'
                                    manually with a driver via a call center.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2010.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide2"
                        className="relative carousel-item w-full bg-blue-300"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    In 2015
                                </h1>
                                <p>
                                    A version of the app was launched to
                                    automate matchmaking between customers and
                                    driver partners. Orders scaled from 3,000 to
                                    100,000 a day.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2015.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide3"
                        className="relative carousel-item w-full bg-red-300"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    End of 2015
                                </h1>
                                <p>
                                    Systems were crashing because of a major
                                    spike in volumes. <br /> We rewrote a key
                                    piece of technology in Golang in under 3
                                    days.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-end-of-2015.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide4"
                        className="relative carousel-item w-full bg-[#73946B]"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    In 2016
                                </h1>
                                <p>
                                    Orders climbed to 300,000+ a day. Driver
                                    incomes increased by 150%. In April, with
                                    the launch of GoPay, cashless transactions
                                    were introduced. 18 million monthly
                                    bookings. 🤯
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2016.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide5" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide5"
                        className="relative carousel-item w-full bg-orange-300"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-the-big-rewrite.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    The Big Rewrite
                                </h1>
                                <p>
                                    Downtimes were a routine affair and leaky
                                    faucets needed to be fixed. <br /> "No
                                    project has a budget and impact as big as
                                    this in Gojek's history"
                                    <br /> - From Nadiem’s internal mail.
                                </p>
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide6" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide6"
                        className="relative carousel-item w-full bg-[#73946B]"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    In 2017
                                </h1>
                                <p>
                                    Reach 30 million monthly bookings.
                                    <br />
                                    Gojek Employeed more than 30,00 people with
                                    disabilities.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2017.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide5" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide7" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide7"
                        className="relative carousel-item w-full bg-blue-300"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2018.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    In 2018
                                </h1>
                                <p>
                                    Gojek did 100+ milion prders across 18+
                                    <br />
                                    products. Total order volume growth: 1100x
                                </p>
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide6" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide8" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide8"
                        className="relative carousel-item w-full bg-red-300"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    Going <br /> international
                                </h1>
                                <p>
                                    Gojek went live in Vietnam, Singapore,
                                    <br />
                                    and Thailand in 2018
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-going-international.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide7" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide9" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide9"
                        className="relative carousel-item w-full bg-blue-400"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2019.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    In 2019
                                </h1>
                                <p>
                                    Gojek became Indonesia"s first decacorn. We
                                    also underwent a massive rebranding and had
                                    a new identity: Solv.
                                </p>
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide8" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide10" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        id="slide10"
                        className="relative carousel-item w-full bg-orange-300"
                    >
                        <div className="flex justify-center items-center w-full h-full gap-70">
                            <div className="flex flex-col w-[300px] gap-10">
                                <h1 className="font-extrabold text-4xl">
                                    Uplifting the economy
                                </h1>
                                <p>
                                    Gojek contributed $7.1 billion to the
                                    Indonesian economy in 2019 (that's more than
                                    twice of 2018!)
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-uplifting-the-economy.svg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>

                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide9" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-2 justify-center items-center h-screen w-full bg-[#7C4585] gap-10 p-25 ">
                <div className="flex flex-col gap-10">
                    <h1 className="text-white font-extrabold text-5xl tracking-tight z-10 mx-30 mt-15">
                        Culture
                    </h1>
                    <div className="text-white font-bold text-2xl tracking-tight  mx-30">
                        We ardently believe failing is
                        <br /> learning. If were not failing,
                        <br /> were not doing it right.
                    </div>
                </div>
                <div className="flex rounded-lg overflow-hidden">
                    <img
                        src="https://www.gojek.io/img/blog-cta.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                    />
                </div>
            </section>

            {/* {Culture} */}
            <section className="flex flex-col justify-start items-center h-screen w-full bg-white-300 gap-10 p-25">
                <div>
                    <h1 className="font-extrabold text-4xl">
                        The three pillars of Gojek
                    </h1>
                </div>
                <div className="grid grid-cols-3 gap-20 mt-30">
                    <div className="flex flex-col w-[275px] h-[300px] bg-[#5D8736] rounded-lg">
                        <div className="p-10">
                            <h1 className="font-bold text-2xl">Speed</h1>
                            <p>Move fast, push boundaries</p>
                        </div>
                        <img
                            src="https://cdn-site.gojek.com/uploads/about_us_Speed_cd09100b66.svg"
                            className="w-full"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                    <div className="flex flex-col w-[275px] h-[300px] bg-red-300 rounded-lg">
                        <div className="p-10">
                            <h1 className="font-bold text-2xl">Inovation</h1>
                            <p>Solve problems at scale</p>
                        </div>
                        <img
                            src="https://cdn-site.gojek.com/uploads/about_us_innovation_d06b721043.svg"
                            className="w-full"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                    <div className="flex flex-col w-[275px] h-[300px] bg-orange-300 rounded-lg">
                        <div className="p-10">
                            <h1 className="font-bold text-2xl">
                                Sosial Impact
                            </h1>
                            <p>Transform lives, inspire change</p>
                        </div>
                        <img
                            src="https://cdn-site.gojek.com/uploads/about_us_social_impact_b41f18caf1.svg"
                            className="w-full"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                </div>
            </section>

           
        </>
    );
}
