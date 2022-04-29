import { createContext, useEffect, useState } from 'react';
import { getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

//Actual value to access
export const CategoriesContext = createContext({
  categoriesMap: [],
});

//The provider for the data
export const CategoriesProvider = ({ children }) => {
  //here is where you set the initial value of the context.
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoryMap();
  }, []);

  //To add data
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
