import { GetResponseProduct } from '@/types';
import { NextResponse } from 'next/server';
import dbRequest from '../../../../database';
import { product as Product } from '@prisma/client';

const fieldCount = 4;

export async function GET(req: Request): Promise<NextResponse<GetResponseProduct>> {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') ?? '0');

    if (!page) {
        const count = await dbRequest(async prisma => await prisma.product.count()) as number
        return NextResponse.json({ count: count / fieldCount - 1, message: 'OK' })
    }
    const data = await dbRequest(async prisma => await prisma.product.findMany({
        take: fieldCount,
        skip: (page - 1) * fieldCount
    })) as Product[]

    return NextResponse.json({ data, message: 'OK' });
}

