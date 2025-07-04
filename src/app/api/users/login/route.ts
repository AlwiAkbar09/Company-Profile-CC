import Backendless from "@/lib/backendless";
import { NextRequest, NextResponse } from "next/server";
import { IUsers } from "@/app/auth/register/type"; 

export async function POST(req: NextRequest) { 
    try {
        const { email, password } = await req.json();

        const user = await Backendless.Data.of('Users_CP').findFirst({
            where: `email = '${email}'`
        }) as unknown as IUsers;

        if (!user) {
            return NextResponse.json({
                message: "Invalid Email or Password"
            }, { status: 401 });
        }

        if (user.password !== password) {
            return NextResponse.json({
                message: "Invalid Email or Password"
            }, { status: 401 });
        }
        
        return NextResponse.json({
            message: 'User Login Successfully',
            user: {
                username: user.username,
                email: user.email,
                role: user.role
            }
        }, { status: 200 });

    } catch (error) {
        console.log('Login error:', error);
        return NextResponse.json({ 
            message: "Login failed"
        }, { status: 500 });
    }
}
