import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const data = await prisma.data.findMany({
        include: {
            DataFormat: true
        }
    })

    return Response.json(data)
}