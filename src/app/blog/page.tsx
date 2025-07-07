
export default function AboutUs() {
    return (
        <>
            <section className="flex flex-col items-center w-full min-h-screen py-10 px-4 sm:px-6 md:px-8 gap-10 mx-auto">
                <div className="flex flex-col gap-10 mt-20">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">Whats On Gojek</h1>
                    <p className="text-md md:text-xl">
                        Our stories, latest updates, and exclusive promos. Find
                        anything you want to know about us.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="card bg-base-100 w-60 md:w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://cdn-site.gojek.com/uploads/2017_milestones_bb4454975f.svg"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Blog Title</h2>
                            <p>
                                This is the summary This is the summary This is the summary This is the summary This is the summary
                            </p>
                            <div className="flex gap-5">
                                <h1 className="font-bold">Author</h1>
                                <p>20/05/2025</p>

                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-60 md:w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://cdn-site.gojek.com/uploads/2017_milestones_bb4454975f.svg"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Blog Title</h2>
                            <p>
                                This is the summary This is the summary This is the summary This is the summary This is the summary
                            </p>
                            <div className="flex gap-5">
                                <h1 className="font-bold">Author</h1>
                                <p>20/05/2025</p>

                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-60 md:w-96 shadow-sm">
                        <figure>
                            <img
                                src="https://cdn-site.gojek.com/uploads/2017_milestones_bb4454975f.svg"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Blog Title</h2>
                            <p>
                                This is the summary This is the summary This is the summary This is the summary This is the summary
                            </p>
                            <div className="flex gap-5">
                                <h1 className="font-bold">Author</h1>
                                <p>20/05/2025</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
