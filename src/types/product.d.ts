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

interface IProductResponse {
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