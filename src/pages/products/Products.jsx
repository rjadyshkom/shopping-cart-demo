import React, { useContext, useState, useEffect } from 'react';
import classes from './Products.module.css';
import { ProductCard } from '../../components/UI/product-card/ProductCard';
import { AppContext } from '../../context/appContext';
import { Filter } from '../../components/UI/filter/Filter';
import { motion, AnimatePresence } from 'framer-motion';
import { useFetching } from '../../hooks/useFetching';
import { ProductsService } from '../../services/ProductsService';
import { Pagination } from '../../components/UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import * as productsActions from './../../services/actions/products';

export const Products = () => {
  const { cartItems, onAdd, onRemove } = useContext(AppContext);

  // redux
  const productsPerPage = useSelector((state) => state.products.productsPerPage);
  const currentPage = useSelector((state) => state.products.currentPage);

  const dispatch = useDispatch();

  // начальные стейты
  const [products, setProducts] = useState([]);
  const [productsToFilter, setProductsToFilter] = useState(products);
  const [activeCategory, setActiveCategory] = useState('все');

  // данные для пагинации
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProducts = productsToFilter.slice(firstProduct, lastProduct);

  const paginate = (pageNumber) => dispatch(productsActions.setPage(pageNumber));

  // запрос к серверу
  const [fetchProducts, isProductsLoading, isProductsLoadingError] = useFetching(async () => {
    return await ProductsService.getAll().then((response) => {
      setProducts(response.data);
    });
  });

  // рендер продукции
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  // noinspection JSValidateTypes
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Filter
          products={products}
          setProductsToFilter={setProductsToFilter}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          paginate={paginate}
        />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productsToFilter.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <motion.div layout className={classes.products}>
        <AnimatePresence>
          {isProductsLoadingError && <h2>Не удалось загрузить информацию о тренажёрах с сервера</h2>}
          {isProductsLoading && <h2>Загружаю тренажёры...</h2>}
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              description={product.description}
              price={product.price}
              product={product}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
