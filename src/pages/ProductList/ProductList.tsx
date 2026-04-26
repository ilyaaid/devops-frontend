import { routerUrls } from '@/App';
import ProductCard from '@/components/features/ProductCard';
import { ProductListSchema } from '@/entities/product/productItem.shema';
import { getProductsList } from '@/mocks/MOCK_products';
import { Box, Container } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import * as v from 'valibot';

const ProductList = () => {
  const {
    isPending,
    isError,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: () => {
      const list = v.parse(ProductListSchema, getProductsList());

      return Promise.resolve(list);
    },
  });

  if (isPending) {
    return 'Loading...';
  }

  if (isError) {
    return 'Error...';
  }

  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          },
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        {products.items.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            to={routerUrls.product.item.create(product.id)}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ProductList;
