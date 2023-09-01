import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

// fettch all categories
export const GET = async () => {
  try {
    const categries = await prisma.category.findMany();
    console.log("categries", categries);
    return new NextResponse(JSON.stringify(categries), { status: 200 });
  } catch (err) {
    console.log("err", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
