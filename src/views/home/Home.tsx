import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./Search";
import Products from "./Products";

function HomeScreen(props: any) {
    // const navigate = useNavigate();
    console.log(props)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Search />
            <Products />
        </Box>
    );
}

export default HomeScreen;