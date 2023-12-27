import { prisma } from "@/lib/prisma"

export async function GET() {
    const data = await prisma.dashboard.findMany({
        include: {
            Widget: true
        }
    })

    return Response.json(data)
}