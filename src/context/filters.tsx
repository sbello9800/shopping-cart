import { createContext, useState, ReactNode } from 'react';

// This is the one we need to consume
export const FiltersContext = createContext<{
filters: {
category: string;
minPrice: number;
};
setFilters: React.Dispatch<React.SetStateAction<{
category: string;
minPrice: number;
}>>;
}>({
filters: {
category: 'all',
minPrice: 250,
},
setFilters: () => {},
});

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }: { children: ReactNode }) {
const [filters, setFilters] = useState({
category: 'all',
minPrice: 250,
});

return (
<FiltersContext.Provider value={{
    filters,
    setFilters,
}}>
    {children}
</FiltersContext.Provider>
);
}

