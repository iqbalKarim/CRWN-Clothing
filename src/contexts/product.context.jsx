import { createContext, useState } from 'react';

//Actual value to access
export const ProductsContext = createContext({
  products: [],
});

//The provider for the data
export const ProductsProvider = ({ children }) => {
  //To add data
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  //here is where you set the initial value of the context.
  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
