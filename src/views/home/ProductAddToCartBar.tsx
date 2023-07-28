import { Add, RemoveOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { Product } from './redux/models/ProductModel';

type PropsWithProduct = {
    product: Product
}

export default function ProductAddToCartBar(props: PropsWithProduct) {
    const { qty } = props.product;
    const quantity = qty || 1;
    const buttonText = quantity > 1 ? `${quantity} itens`: `${quantity} item`;
    return (
        <div>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                    <RemoveOutlined />
                </IconButton>
                <TextField
                    value={quantity}
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
        </div>
    )
}
