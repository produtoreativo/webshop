import { Box, Button } from "@mui/material";
import { Product } from './redux/models/ProductModel';
import { useDispatch } from "react-redux";
import { productActions } from "./redux/actions/productsAction";

type PropsWithProduct = {
    product: Product
}

export default function ProductAddToCartBar(props: PropsWithProduct) {
    const dispatch = useDispatch();
    const actions = productActions(dispatch);
    const onClick = () => actions.createOrder(props.product);
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Button 
                    onClick={onClick}
                    fullWidth
                    variant="contained">
                        Comprar 1 item
                </Button>
            </Box>
        </div>
    )
}
