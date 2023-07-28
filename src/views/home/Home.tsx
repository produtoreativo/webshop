import { Box } from "@mui/material";
import Search from "./Search";
import Products from "./Products";

function HomeScreen() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Search />
            <Products />
        </Box>
    );
}

export default HomeScreen;