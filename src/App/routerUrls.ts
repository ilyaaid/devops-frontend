const routerUrls = {
  product: {
    list: {
      mask: '/',
      create: () => '/',
    },

    item: {
      mask: '/products/:id',
      create: (id: number) => `/products/${id}`,
    },
  },
};

export default routerUrls;
