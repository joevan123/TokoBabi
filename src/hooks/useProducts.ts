import axios from "axios"
import { useQuery } from "react-query"
import { BlockchainProduct } from "../types/BlockchainProduct.type"

const useProductList = () => {
    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ['get-product-list'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000/thirdweb');
            console.log(data);
            return data;
        }
    })

    const products = data as unknown as BlockchainProduct[]

    return { products, isLoading, error }
}

export { useProductList }