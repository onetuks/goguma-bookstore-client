export const formatPrice = (price: number): string => {
    return price.toLocaleString();
};

export const formatDiscountedPrice = (price: number, salesRate: number): string => {
    return (price * (1 - salesRate / 100)).toLocaleString();
};