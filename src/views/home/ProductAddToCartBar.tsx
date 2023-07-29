import { Add, RemoveOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { Product } from './redux/models/ProductModel';
import { useDispatch } from "react-redux";
import { productActions } from "./redux/actions/productsAction";

type PropsWithProduct = {
    product: Product
}

export default function ProductAddToCartBar(props: PropsWithProduct) {
    const dispatch = useDispatch();
    const actions = productActions(dispatch);

    const { qty, addedToCart } = props.product;
    const labelText = addedToCart? 'Remover': 'Adicionar';
    const quantity = qty || 1;
    const buttonText = quantity > 1 ? `${labelText} ${quantity} itens`: `${labelText} ${quantity} item`;

    const onClick = () => {
        if (addedToCart) {
            actions.removeFromCart(props.product);
        } else {
            actions.addToCart(props.product)
        }
    };
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
                <IconButton 
                    aria-label="addMore">
                    <Add />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Button 
                    fullWidth
                    color={ addedToCart? "secondary": "primary"}
                    onClick={onClick}  
                    variant="contained">
                        {buttonText}
                </Button>
            </Box>
        </div>
    )
}
