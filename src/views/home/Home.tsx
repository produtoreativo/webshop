import { Box, Alert, Snackbar } from "@mui/material";
import Search from "./Search";
import Products from "./Products";
import { useSelector } from "react-redux";
import { GlobalState } from "../../store/state";
import { useState, useEffect } from "react";

function HomeScreen() {
    const currentOrderId = useSelector((state: GlobalState) => state.order?.currentOrderId);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (currentOrderId) {
            setOpen(true);
        }
    }, [currentOrderId]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Search />
            <Products />
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    Pedido criado! ID: {currentOrderId}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default HomeScreen;
