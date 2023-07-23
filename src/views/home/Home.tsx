import { Link, useNavigate } from "react-router-dom";

function HomeScreen(props: any) {
    // const navigate = useNavigate();
    console.log(props)
    return (
        <div>
            <div>Home</div>
            <Link to="/checkout">Checkout</Link>
        </div>
    );
}

export default HomeScreen;