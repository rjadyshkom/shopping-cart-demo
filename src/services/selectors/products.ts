export const currentPageSelector = (state: any) => state.products.currentPage;
export const productsPerPageSelector = (state: any) => state.products.productsPerPage;
export const productsSelector = (state: any) => {
  const activeFilter = state.products.activeFilter;
  const currentPage = currentPageSelector(state);
  const productsPerPage = productsPerPageSelector(state);
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const tempProducts =
    activeFilter === 'Все'
      ? state.products.products
      : state.products.products.filter((p: any) => p.filters.includes(activeFilter));
  const resultProducts = tempProducts.slice(firstProduct, lastProduct);
  return {
    products: resultProducts,
    pagesCount: Math.ceil(tempProducts.length / productsPerPage),
  };
};
