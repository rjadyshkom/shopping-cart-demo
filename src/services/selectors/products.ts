export const currentPageSelector = (state: any) => state.products.currentPage;
export const productsPerPageSelector = (state: any) => state.products.productsPerPage;
export const productsSelector = (state: any) => {
  const currentCategory = state.products.currentCategory;
  const currentPage = currentPageSelector(state);
  const productsPerPage = productsPerPageSelector(state);
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const tempProducts =
    currentCategory === 'Все'
      ? state.products.products
      : state.products.products.filter((p: any) => p.category === currentCategory);
  const resultProducts = tempProducts.slice(firstProduct, lastProduct);
  return {
    products: resultProducts,
    pagesCount: Math.ceil(tempProducts.length / productsPerPage),
  };
};
