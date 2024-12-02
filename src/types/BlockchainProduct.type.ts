export type BlockchainProduct = {
    id: number,
    owner: string,
    name: string,
    description: string,
    price: bigint,
    stocks: bigint,
    image: string,
    buyers: string[],
    amountBought: bigint[]
}