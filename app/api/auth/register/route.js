import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await dbConnect();

  const newUser = {
    name,
    email,
    password,
  };

  try {
    await userModel.create(newUser);
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
