export interface IDisplayBlog {
    title: string;
    content: string;
    author: string;
    created: string;
}

export default function BlogCard(props: IDisplayBlog) {
    const MAX_SUMMARY_LENGTH = 150;

    const getSummary = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    };

    const formatBlogDate = (dateString: string) => {
        const timestamp = parseInt(dateString);
        const date = new Date(timestamp);
        return date.toLocaleDateString("id-ID"); // Atau format(date, 'dd/MM/yyyy') jika pakai date-fns
    };
    return (
        <>
            <div className="card bg-base-100 w-60 md:w-96 shadow-sm">
                <figure>
                    <img
                        src="https://cdn-site.gojek.com/uploads/2017_milestones_bb4454975f.svg"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{getSummary(props.content, MAX_SUMMARY_LENGTH)}</p>
                    <div className="flex gap-5">
                        <h1 className="font-bold">{props.author}</h1>
                        <span>{formatBlogDate(props.created)}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
