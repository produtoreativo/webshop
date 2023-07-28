
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './Product';
import { Product as ProductModel, ProductList } from './redux/models/ProductModel';
import { productsSelector } from './redux/actions/productsAction';
import { useSelector } from 'react-redux';
import { clearProducts } from './redux/state';

export default function ResponsiveGrid() {
  const products: ProductList = useSelector(productsSelector) || clearProducts;

  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.data.map((product: ProductModel, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}