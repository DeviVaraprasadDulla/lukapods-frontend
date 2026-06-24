import { useCart } from "@/context/CartContext";

const Test = () => {
  const { cartCount, cartItems, cartTotal } = useCart();

  return (
    <div className="p-10">
      <h1>Cart Count: {cartCount}</h1>

      <h2 className="mt-4">Total: ₹{cartTotal}</h2>

      <pre className="mt-6">{JSON.stringify(cartItems, null, 2)}</pre>
    </div>
  );
};

export default Test;
