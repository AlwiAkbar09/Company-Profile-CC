import Backendless from "@/lib/backendlessClient";
import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try {
        const {title, content, author} = await req.json();
        await Backendless.Data.of('BlogPostCP').save({title, content, author});

        return NextResponse.json({
        message: 'Blog Created Successfully',
        status : 201
    })
    } catch (error) {
        console.log(error)
    }
}

export async function GET() {
    try {
        const blogPost = await Backendless.Data.of('BlogPostCP').find();

        return NextResponse.json({
        message: 'Blog Fetch Successfully',
        blogPost,
        status : 201})
        
    } catch (error) {
        console.log(error)
    }

}


