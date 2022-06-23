export const currentPageSelector = (state) => state.products.currentPage;
export const productsPerPageSelector = (state) => state.products.productsPerPage;
export const productsSelector = (state) => {
  const currentCategory = state.products.currentCategory;
  const currentPage = currentPageSelector(state);
  const productsPerPage = productsPerPageSelector(state);
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const tempProducts =
    currentCategory === 'Все'
      ? state.products.products
      : state.products.products.filter((p) => p.category === currentCategory);
  const resultProducts = tempProducts.slice(firstProduct, lastProduct);
  return {
    products: resultProducts,
    pagesCount: Math.ceil(tempProducts.length / productsPerPage),
  };
};
