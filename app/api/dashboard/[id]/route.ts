import { prisma } from "@/lib/prisma"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const data = await prisma.dashboard.findUnique({
        where: {
            id: params.id
        }
    })

    return Response.json(data)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const res = await req.json()
    const data = await prisma.dashboard.update({
        where: {
            id: params.id
        },
        data: {
            name: res.name,
            layouts: res.layouts
        }
    })

    return Response.json(data)
}