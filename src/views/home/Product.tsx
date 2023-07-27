import cocaLogo from '../../assets/78912939_01.png';
import { 
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  TextField, 
  Typography,  
} from '@mui/material';
import { Add, RemoveOutlined } from '@mui/icons-material';

import { Product } from './redux/models/ProductModel';

type PropsWithProduct = {
  product: Product
}

export default function ProductView(props: PropsWithProduct) {
  // const theme = useTheme();
  const { name, qty, price } = props.product;
  const quantity = qty || 1;
  const buttonText = quantity > 1 ? `${quantity} itens`: `${quantity} item`;

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            R$ {price}
          </Typography>
        </CardContent>
        <Box sx={{ flex: 1 , display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
           <RemoveOutlined />
          </IconButton>
          <TextField 
            value={qty}
            hiddenLabel
            focused
            variant="outlined"
            sx={{
              width: 60,
              '& .MuiInput-underline:after': {
                  borderBottomColor: '#E4E4E5',
              },
              '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                  borderColor: '#E4E4E5',
                  },
                  '&:hover fieldset': {
                  borderColor: '#E4E4E5',
                  },
                  '&.Mui-focused fieldset': {
                  borderColor: '#E4E4E5',
                  },
              },
          }}
          />
          <IconButton aria-label="next">
            <Add />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button fullWidth variant="contained">Adicionar {buttonText}</Button>
        </Box>
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