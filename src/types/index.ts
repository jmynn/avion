import type { product as Product } from '@prisma/client'
export type ServerResponse = {
    message: 'OK' | `ERROR: ${string}`
}

export type GetResponseProduct = {
    data?: Product[] | [] | null,
    count?: number
} & ServerResponse