import { ITeams } from "./type";
export default function Teams(props: ITeams) {
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={props.picture}
                        alt="Teams"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {props.name.title}
                        {"."}
                        {props.name.first} {props.name.last}
                    </h2>
                    <h3 className="text-gray-500 font-semibold">
                        {" "}
                        Software Engineer
                    </h3>
                    <p>{props.bio}</p>
                </div>
            </div>
        </>
    );
}
