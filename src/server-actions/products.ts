"use server"

import { LIMIT } from "@/data/constant"

//server action which fetches all the product data
export const getProducts: (page: number) => Promise<IProductsResponse | null> = async (page) => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/product/latest/?page=${page}&limit=${LIMIT}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error fetching data:", error)
        return null
    }
}

//server action which will fetch a product from product slug
export const getProduct: (slug: string) => Promise<IProductResponse> = async (slug) => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/product/for-public/${slug}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error fetching data: ", error)
    }
}