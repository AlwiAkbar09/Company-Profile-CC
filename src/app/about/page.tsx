import Image from "next/image";
export default function AboutUs() {
    return (
        <>
            {/* {Landing} */}
            <section className="flex flex-col justify-center items-start h-screen w-full bg-gray-800 gap-6 p-25">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src="https://cdn-site.gojek.com/uploads/07a20af54b341e264544a11bcc2513f8_ad9622e979.webp"
                        alt="Logo Gojek"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        quality={100}
                        priority
                    />
                </div>
                <h1 className="text-white font-extrabold text-center md:text-start text-2xl md:text-5xl tracking-tight z-10 mx-auto md:mx-30 mt-15">
                    Been quite a ride
                </h1>
                <div className="text-white font-medium text-md text-center md:text-start md:text-xl tracking-tight z-10 mx-auto md:mx-30">
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    In 2010
                                </h1>
                                <p>
                                    Gojek started with a mission to improve the
                                    livelihoods of local ojeks (motorcycle
                                    taxis). Every customer was &apos;matched&apos;
                                    manually with a driver via a call center.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2010.svg"
                                    className="w-full h-auto"
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    In 2015
                                </h1>
                                <p>
                                    A version of the app was launched to
                                    automate matchmaking between customers and
                                    driver partners. Orders scaled from 3,000 to
                                    100,000 a day.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2015.svg"
                                    className="w-full h-auto"
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    End of 2015
                                </h1>
                                <p>
                                    Systems were crashing because of a major
                                    spike in volumes. <br /> We rewrote a key
                                    piece of technology in Golang in under 3
                                    days.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-end-of-2015.svg"
                                    className="w-full h-auto"
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
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
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2016.svg"
                                    className="w-full h-auto"
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-the-big-rewrite.svg"
                                    className="w-full h-auto"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    The Big Rewrite
                                </h1>
                                <p>
                                    Downtimes were a routine affair and leaky
                                    faucets needed to be fixed. <br /> &quot;No
                                    project has a budget and impact as big as
                                    this in Gojek&apos;s history&quot;
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    In 2017
                                </h1>
                                <p>
                                    Reach 30 million monthly bookings.
                                    <br />
                                    Gojek Employeed more than 30,00 people with
                                    disabilities.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2017.svg"
                                    className="w-full h-auto"
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2018.svg"
                                    className="w-full h-auto"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    Going <br /> international
                                </h1>
                                <p>
                                    Gojek went live in Vietnam, Singapore,
                                    <br />
                                    and Thailand in 2018
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-going-international.svg"
                                    className="w-full h-auto"
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-2019.svg"
                                    className="w-full h-auto"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    In 2019
                                </h1>
                                <p>
                                    Gojek became Indonesia&apos;s first decacorn. We
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
                        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-8 p-4 md:p-8">
                            <div className="flex flex-col w-full md:w-1/2 max-w-md gap-4 text-center md:text-left">
                                <h1 className="font-extrabold text-4xl md:text-5xl">
                                    Uplifting the economy
                                </h1>
                                <p>
                                    Gojek contributed $7.1 billion to the
                                    Indonesian economy in 2019 (that&apos;s more than
                                    twice of 2018!)
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 max-w-lg">
                                <img
                                    src="https://www.gojek.io/img/about-us/about-gojek-uplifting-the-economy.svg"
                                    className="w-full h-auto"
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

            <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-screen w-full bg-[#7C4585] gap-10 p-25 mx-auto ">
                <div className="flex flex-col gap-10">
                    <h1 className="text-white text-center md:text-start font-extrabold text-2xl md:text-5xl tracking-tight z-10 mx-auto mt-15">
                        Culture
                    </h1>
                    <div className="text-white text-center md:text-start font-bold text-xl md:text-2xl tracking-tight  mx-auto">
                        We ardently believe failing is
                        <br /> learning. If were not failing,
                        <br /> were not doing it right.
                    </div>
                </div >
                <div className="flex rounded-lg overflow-hidden">
                    <img
                        src="https://www.gojek.io/img/blog-cta.jpg"
                        className="w-full"
                        alt="Tailwind CSS Carousel component"
                    />
                </div>
            </section>

            {/* {Culture} */}
            <section className="flex flex-col justify-start items-center min-h-screen w-full bg-white-300 gap-10 p-25 mx-auto">
                <div>
                    <h1 className="font-extrabold text-center text-2xl md:text-4xl md:text-5xl">
                        The three pillars of Gojek
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20 max-w-7xl mx-auto px-4 md:px-0 mt-10 md:mt-30">
                    <div className="flex flex-col w-[275px] h-[300px] bg-[#5D8736] rounded-lg">
                        <div className="p-6 md:p-10 flex-grow">
                            <h1 className="font-bold text-2xl">Speed</h1>
                            <p>Move fast, push boundaries</p>
                        </div>
                        <img
                            src="https://cdn-site.gojek.com/uploads/about_us_Speed_cd09100b66.svg"
                            className="w-full h-auto object-cover"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                    <div className="flex flex-col w-[275px] h-[300px] bg-red-300 rounded-lg">
                        <div className="p-6 md:p-10 flex-grow">
                            <h1 className="font-bold text-2xl">Inovation</h1>
                            <p>Solve problems at scale</p>
                        </div>
                        <img
                            src="https://cdn-site.gojek.com/uploads/about_us_innovation_d06b721043.svg"
                            className="w-full h-auto object-cover"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                    <div className="flex flex-col w-[275px] h-[300px] bg-orange-300 rounded-lg">
                        <div className="p-6 md:p-10 flex-grow">
                            <h1 className="font-bold text-2xl">
                                Sosial Impact
                            </h1>
                            <p>Transform lives, inspire change</p>
                        </div>
                        <img
                            src="https://cdn-site.gojek.com/uploads/about_us_social_impact_b41f18caf1.svg"
                            className="w-full h-auto object-cover"
                            alt="Tailwind CSS Carousel component"
                        />
                    </div>
                </div>
            </section>

           
        </>
    );
}
