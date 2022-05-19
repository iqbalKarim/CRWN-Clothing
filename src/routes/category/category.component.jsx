import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react/cjs/react.development';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
