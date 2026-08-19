import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Product } from './redux/models/ProductModel';
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "./redux/actions/productsAction";
import { GlobalState } from "../../store/state";

type PropsWithProduct = {
    product: Product
}

export default function ProductAddToCartBar(props: PropsWithProduct) {
    const dispatch = useDispatch();
    const actions = productActions(dispatch);
    const [isLoading, setIsLoading] = useState(false);
    const currentOrderId = useSelector((state: GlobalState) => state.order?.currentOrderId);

    useEffect(() => {
        if (currentOrderId) {
            setIsLoading(false);
        }
    }, [currentOrderId]);

    const onClick = () => {
        setIsLoading(true);
        actions.createOrder(props.product);
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <Button
                    onClick={onClick}
                    disabled={isLoading}
                    fullWidth
                    variant="contained">
                    {isLoading ? 'Processando...' : 'Comprar 1 item'}
                </Button>
            </Box>
        </div>
    )
}
