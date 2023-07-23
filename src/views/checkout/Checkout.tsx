import { Link } from "react-router-dom";

function CheckoutScreen(props: any) {
  console.log(props)
  return (
    <div>
      <div>Checkout</div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default CheckoutScreen;