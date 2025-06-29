'use client'
import Teams from "@/components/Teams";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Team() {
    const [teams, setTeams] = useState<[] | any[]>([]);

    const onGetTeam = async () => {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=12");
            setTeams(response?.data?.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        onGetTeam();
    }, []);

    return (
        <>
            {/* {Landing} */}
            <section className="flex flex-col justify-start items-center h-screen w-full  gap-6 p-25">
                <h1 className="text-black font-extrabold text-5xl tracking-tight my-20">
                    Meet Our Teams
                </h1>
                <div className="grid grid-cols-4 gap-10">
                    {teams.map((item, index) => {
                        return (
                            <Link
                                href={`/teams/${item.login.uuid}`}
                                key={index}
                            >
                                <Teams
                                picture ={item?.picture?.large}
                                name={item?.name}
                                role={item?.role}
                                bio={`Age: ${item?.dob?.age}`}
                                 />
                            </Link>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
