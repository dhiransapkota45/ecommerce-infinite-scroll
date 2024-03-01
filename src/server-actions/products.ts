"use server"

//comments
export const getProducts: (page: number) => Promise<IProductResponse | null> = async (page) => {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/api/product/latest`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error fetching data:", error)
        return null
    }
}