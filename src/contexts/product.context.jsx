import { createContext, useState } from 'react';
import PRODUCTS from '../shop-data.json';

//Actual value to access
export const ProductsContext = createContext({
  products: [],
});

//The provider for the data
export const ProductsProvider = ({ children }) => {
  //here is where you set the initial value of the context.
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
