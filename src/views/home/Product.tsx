import cocaLogo from '../../assets/78912939_01.png';
import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,  
} from '@mui/material';

import { Product } from './redux/models/ProductModel';
import ProductAddToCartBar from './ProductAddToCartBar';

type PropsWithProduct = {
  product: Product
}

export default function ProductView(props: PropsWithProduct) {
  const { name, price } = props.product;

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography 
            component="div" 
            variant="h5"
            sx={{
              '&': {
                '& .highlight': {
                  color: '#ffeb3b'
                }
              }
            }}
            dangerouslySetInnerHTML={{
              __html: name  
            }}
          />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            R$ {price}
          </Typography>
        </CardContent>
        <ProductAddToCartBar product={props.product} />
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={cocaLogo}
        alt="Live from space album cover"
      />
    </Card>
  );
}