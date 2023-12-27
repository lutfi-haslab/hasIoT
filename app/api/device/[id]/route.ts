import { prisma } from "@/lib/prisma"

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const res = await req.json()
    const data = await prisma.device.update({
        where: {
            id: params.id
        },
        data: {
            name: res.name,
            deviceType: res.deviceType,
            altitude: res.altitude,
            latitude: res.latitude,
            location: res.location,
            parser: res.parser
        }
    })

    return Response.json(data)
}