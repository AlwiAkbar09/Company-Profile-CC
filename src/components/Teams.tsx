import { ITeam } from "./type";
export default function Teams(props: ITeam) {
    return (
        <>
            <div className="card bg-base-100 w-50 md:w-80 shadow-sm p-6">
                <figure>
                    <img src={props.picture.large} alt="Teams" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.name.title}
                        {"."}
                        {props.name.first} {props.name.last}
                    </h2>
                    <h3 className="text-gray-500 font-semibold">
                        {" "}
                        Software Developer
                    </h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil ab eveniet alias reiciendis praesentium inventore eum necessitatibus molestias ullam nesciunt numquam, voluptatem officia soluta. Laborum?</p>
                </div>
            </div>
        </>
    );
}
