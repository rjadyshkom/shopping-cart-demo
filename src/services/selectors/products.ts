export const currentPageSelector = (state: any) => state.products.currentPage;
export const productsPerPageSelector = (state: any) => state.products.productsPerPage;
export const productsSelector = (state: any) => {
  const activeFilter = state.products.activeFilter;
  const activeCategory = state.products.activeCategory;

  const currentPage = currentPageSelector(state);
  const productsPerPage = productsPerPageSelector(state);
  const lastProduct = currentPage * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;

  const resultCategory = state.products.products.filter((c: any) => c.category.includes(activeCategory));
  const tempProducts =
    activeFilter === 'Все' ? resultCategory : resultCategory.filter((p: any) => p.filters.includes(activeFilter));

  const resultProducts = tempProducts.slice(firstProduct, lastProduct);
  const resultFilters = [
    'Все',
    ...new Set(
      resultCategory
        .map((filter: any) => filter.filters)
        .join()
        .split(',')
        .sort(),
    ),
  ];
  return {
    products: resultProducts,
    filters: resultFilters,
    pagesCount: Math.ceil(tempProducts.length / productsPerPage),
  };
};
