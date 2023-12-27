import { prisma } from "@/lib/prisma";
import { DataFormat, Widget } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const searchParams = req.nextUrl.searchParams;
    const dashboardId = searchParams.get('dashboardId');
    const periode = searchParams.get('periode');
    const sort = searchParams.get('sort');
    const last = searchParams.get('last');
    let data: any = [];

    const currentDate = new Date();
    const lastWeekStart = new Date(currentDate);
    lastWeekStart.setDate(currentDate.getDate() - 7);
    const lastMonthStart = new Date(currentDate);
    lastMonthStart.setMonth(currentDate.getMonth() - 1);


    const widget = await prisma.widget.findFirst({
        where: {
            id: params.id,
            dashboardId: dashboardId
        }
    }) as Widget

    const andArray = (widget.source as { key: string; deviceId: string }[]).map(obj => ({
        AND: {
            ...obj
        }
    }))

    if (!periode && last) {
        data = await prisma.dataFormat.findFirst({
            where: {
                OR: andArray
            },
            orderBy: {
                createdAt: sort === 'desc' ? 'desc' : 'asc'
            },
            select: {
                key: true,
                value: true,
                createdAt: true
            }
        });
    } else if (periode && !last) {
        data = await prisma.dataFormat.findMany({
            where: {
                OR: andArray,
                createdAt: {
                    gte: periode === 'week' ? lastWeekStart : lastMonthStart,
                    lt: currentDate,
                }
            },
            orderBy: {
                createdAt: sort === 'desc' ? 'desc' : 'asc'
            },
            select: {
                key: true,
                value: true,
                createdAt: true
            }
        });
    } else {
        data = await prisma.dataFormat.findMany({
            where: {
                OR: andArray
            },
            orderBy: {
                createdAt: sort === 'desc' ? 'desc' : 'asc'
            },
            select: {
                key: true,
                value: true,
                createdAt: true
            }
        });
    }

    if (last) {
        return Response.json({
            name: data.key,
            data: {
                x: data.createdAt,
                y: data.value
            }
        })
    } else {
        const groupedData = data.reduce((result: any, item: any) => {
            const existingItem = result.find((group: any) => group.name === item.key);
            if (existingItem) {
                existingItem.data.push({ x: item.createdAt, y: item.value });
            } else {
                result.push({
                    name: item.key,
                    data: [{ x: item.createdAt, y: item.value }]
                });
            }
            return result;
        }, []);

        return Response.json(groupedData)
    }
}