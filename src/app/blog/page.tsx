
export default function AboutUs() {
    return (
        <>
            <section className="flex flex-col justify-start items-start h-screen w-full  gap-10 p-25">
                <div className="flex flex-col gap-10 mt-20">
                    <h1 className="font-bold text-5xl">Whats On Gojek</h1>
                    <p className="text-xl">
                        Our stories, latest updates, and exclusive promos. Find
                        anything you want to know about us.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-10">
                    <div className="card bg-base-100 w-96 shadow-sm">
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
                    <div className="card bg-base-100 w-96 shadow-sm">
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
                    <div className="card bg-base-100 w-96 shadow-sm">
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
