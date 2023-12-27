import { prisma } from "@/lib/prisma"
import { nanoid } from 'nanoid'

export async function GET() {
    const data = await prisma.dashboard.findMany();

    return Response.json(data)
}

export async function POST(req: Request) {
    const res = await req.json()
    const data = await prisma.dashboard.create({
        data: {
            name: res.name,
            id: nanoid(5),
            userId: res.userId,
        }
    })

    return Response.json(data)
}

