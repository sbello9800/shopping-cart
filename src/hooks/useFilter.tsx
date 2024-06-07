import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import { products } from '../data/items.json';

type products = {
    id:number
    price:number
    imgUrl:string
    category:string
    collection:string
}

export function useFilters() {
const { filters, setFilters } = useContext(FiltersContext);

const filterProducts = (products: products[]) => {
return products.filter((product) => {
    return (
    product.price >= filters.minPrice &&
    (filters.category === 'all' || product.category === filters.category)
    );
});
};

return { filters, filterProducts, setFilters };
}

