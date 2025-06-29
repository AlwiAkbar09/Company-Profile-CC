import Image from "next/image";

export default function Products() {
    return (
        <>
            {/* {Landing} */}
            <section className="flex flex-col justify-center items-start h-screen w-full bg-gray-800 gap-6 p-25">
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                        src="https://cdn-site.gojek.com/uploads/products_hero1_17ab91e19f.webp"
                        width={313}
                        height={216}
                        layout="responsive"
                        alt="Logo Gojek"
                    />
                    
                </div>
                <h1 className="text-white font-extrabold text-5xl tracking-tight z-10 mx-60">
                    We build products that
                    <br /> nations run on
                </h1>
            </section>

            {/* {Product} */}
            <section className="flex flex-col items-center  h-screen w-full bg-black">
                <div className="flex flex-col h-[606px] w-full bg-[#7CCC6C] rounded-4xl p-20 gap-10 mt-30 ">
                    <h1 className="font-extrabold text-3xl">
                        Transport & Logistics
                    </h1>
                    <p>
                        With 2 million+ driver partners, we’ve kinda done 13,000
                        trips between the earth and the moon.
                    </p>
                    <div className="grid grid-cols-4 gap-25 mx-auto mb-30">
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/goride_horizontal_logo_solid_9b44c7a0ad.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Your two-wheeler taxi, aka Ojek.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gocar_horizontal_logo_solid_77d72ba886.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Sit back. Sleep. Snore. Be comfortable.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gosend_horizontal_logo_solid_ff3d70a1f3.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Get your package delivered within hours.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gobox_horizontal_logo_solid_84ac91235a.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Moving out? We’ll do the weights.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[606px] w-full bg-[#74D2E7] rounded-4xl p-20 gap-10 -mt-30 ">
                    <h1 className="font-extrabold text-3xl">Payments</h1>
                    <p>
                        One of the largest fintech companies in Southeast Asia,
                        we make transactions reliable and cashless.
                    </p>
                    <div className="grid grid-cols-4 gap-25 mx-auto mb-30">
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gopay_horizontal_logo_solid_8a3e0f1837.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Drop the wallet, go cashless.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gotagihan_horizontal_logo_solid_13c87e6e44.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Pay bills - quick & simple.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gopaylater_horizontal_logo_solid_e55f2856e2.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Exactly. Buy now, PayLater.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gogive_horizontal_logo_solid_2596e88ee1.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Make donations, touch lives.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[606px] w-full bg-[#FF808B] rounded-4xl p-20 gap-10 -mt-30 ">
                    <h1 className="font-extrabold text-3xl">Food & Shopping</h1>
                    <p>
                        Fill your cart with food, groceries, medicines,
                        electronics and more. Without stepping out.
                    </p>
                    <div className="grid grid-cols-4 gap-25 mx-auto mb-30">
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gofood_horizontal_logo_solid_d946d76f5a.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Hungry? Buy & dine at home.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gomart_horizontal_logo_solid_f8712e4e6c.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Groceries delivered from stores nearby.</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/goshop_horizontal_logo_solid_0ee51c6850.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Buy anything from anywhere</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-[606px] w-full bg-[#D48BC8] rounded-4xl p-20 gap-10 -mt-30 ">
                    <h1 className="font-extrabold text-3xl">Business</h1>
                    <p>
                        Manage your restaurants, run ads, create promos, and do more.
                    </p>
                    <div className="grid grid-cols-4 gap-25 mx-auto mb-30">
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/gobizmerchant_logo_a47c179953.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>A Gojek app to run and grow your business</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        <div className="flex flex-col h-[225px] w-[225px] bg-white text-sm rounded-3xl gap-7 p-5 mr-[20px]">
                            <img
                                src="https://cdn-site.gojek.com/uploads/midtrans_color_84a4dbb037.svg"
                                className="w-full"
                                alt="Tailwind CSS Carousel component"
                            />
                            <p>Accept payment and make payouts easily</p>
                            <a href="#" className="font-bold text-gray-700">
                                Know More
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}
