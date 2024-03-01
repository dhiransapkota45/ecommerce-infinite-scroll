interface IProduct {
    _id: string
    slug: string
    brand: {
        _id: string
        slug: string
        name: string
    }
    title: string
    price: number
    strikePrice: number
    offPercent: number
    ratings: number
    totalRatings: number
    ratedBy: number
    images: string[]
    varientType: string
    wished: boolean
}

interface IProductsResponse {
    title: string
    message: string
    data: {
        pagination: {
            total: number
            page: number
            limit: number
            previousPage: boolean
            nextPage: boolean
        }
        docs: IProduct[]
    }
}

interface IProductSingle extends IProduct {
    category: {

    }
    ingredient: string
    description: string
    minOrder: number
    maxOrder: number
    colorAttributes: {
        [key: string]: string
    }[]
    colorVarients: any[]
    filterOptions: {
        [key: string]: string | boolean
    }
    metaRobots: string
    isOnSale: boolean
    isFeatured: boolean
    isPublished: boolean
    isDeleted: boolean
    sizeVariants: any[]
    createdAt: string
    updatedAt: string
    image: string[]
    breadCrums: {
        title: string
        slug: string
    }[]
}
interface IProductResponse {
    title: string
    message: string
    data: IProductSingle
}
