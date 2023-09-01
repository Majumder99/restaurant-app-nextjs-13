import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// fettch all products
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    });
    console.log("products", products);
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log("err", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
