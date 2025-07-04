import Backendless from "@/lib/backendless";
import { NextRequest,NextResponse } from "next/server";


   export async function POST(req:NextRequest) {
    try {
        const {username, email, password, role} = await req.json();
        await Backendless.Data.of('Users_CP').save({username, email, password, role});

        return NextResponse.json({
        message: 'User Register Successfully',
        status : 201
    })
    } catch (error) {
        console.log(error)
    }
}
