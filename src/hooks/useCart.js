import { useGetCartItemQuery } from "../store/api/cartApiSlice";
// import CartItem from "../views/cart/CartItem";

export default function useCart() {
  const { data , isLoading} = useGetCartItemQuery();
  if(isLoading){
    return {
      data: null,
    }
  }
  const cartItems = data?.items || [];

  // const subTotal = Array.isArray(cartItems)
  //   ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  //   : 0;

  // const printCartItems = cartItems?.map((item) => (
  //       <CartItem
  //         key={item._id}
  //         thumbnail={item.thumbnail}
  //         title={item.title}
  //         price={item.price}
  //         quantity={item.quantity}
  //       />
  //   ));
  return { cartItems };
}
