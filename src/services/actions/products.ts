export const SET_PRODUCTS = 'SET_PRODUCTS';
export const setProducts = (products: any) => ({ type: SET_PRODUCTS, payload: products });

export const SET_PAGE = 'SET_PAGE';
export const setPage = (page: any) => ({ type: SET_PAGE, payload: page });

export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = (category: any) => ({ type: SET_CATEGORY, payload: category });

export const SET_FILTER = 'SET_FILTER';
export const setFilter = (filter: any) => ({ type: SET_FILTER, payload: filter });

export const SET_ERROR = 'SET_ERROR';
export const setError = (error: any) => ({ type: SET_ERROR, payload: error });

export const SET_LOADING = 'SET_LOADING';
export const setLoading = (loading: any) => ({ type: SET_LOADING, payload: loading });
