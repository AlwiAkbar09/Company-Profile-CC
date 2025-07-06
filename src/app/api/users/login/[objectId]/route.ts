import Backendless from "@/lib/backendlessClient";
import { NextRequest, NextResponse } from "next/server";
import { IUsers } from "@/app/auth/register/type";

export async function GET(req: NextRequest, context: { params: { objectId: string } }) {
  const { objectId } = context.params;

  try {
    const user = await Backendless.Data.of('Users_CP').findById(objectId) as IUsers;

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        objectId: user.objectId,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Error in API route /api/users/login/[objectId]:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
