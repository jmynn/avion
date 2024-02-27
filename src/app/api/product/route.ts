import { serverResponse } from '@/types';
import dbRequest from '../../../../database';
import { NextResponse } from 'next/server';

const fieldCount = 4;
type getResponse = { data: unknown } & serverResponse

export async function GET(req: Request): Promise<NextResponse<getResponse>> {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '0');
    let data = null

    if (!page) data = await dbRequest(async prisma => await prisma.product.findMany())
    else data = await dbRequest(async prisma => await prisma.product.findMany({
        take: fieldCount,
        skip: fieldCount * page
    }))

    return NextResponse.json({ data, message: 'OK' });
}
