import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./Search";

function HomeScreen(props: any) {
    // const navigate = useNavigate();
    console.log(props)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Search />
            <div>
                <div>Home</div>
                <Link to="/checkout">Checkout</Link>
            </div>

        </Box>
    );
}

export default HomeScreen;