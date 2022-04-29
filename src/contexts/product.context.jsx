import { createContext, useEffect, useState } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

//Actual value to access
export const ProductsContext = createContext({
  products: [],
});

//The provider for the data
export const ProductsProvider = ({ children }) => {
  //here is where you set the initial value of the context.
  const [products, setProducts] = useState([]);
  const value = { products };

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      console.log(categoryMap);
    };

    getCategoryMap();
  }, []);

  //To add data
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
