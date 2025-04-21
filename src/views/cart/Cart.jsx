import { Loader, ShoppingCart } from "lucide-react";
import useCart from "../../hooks/useCart";
import CartItem from "./CartItem";
import PaymentSection from "./PaymentSection";
export default function Cart() {
  const { cartItems, getCartItemLoading } = useCart();

  const printCartItems = cartItems?.map((item) => (
    <CartItem
      key={item._id}
      productId={item.product?._id}
      thumbnail={item.product?.thumbnail}
      title={item.product?.title}
      price={item.product?.price}
      quantity={item.quantity}
    />
  ));
  if (!cartItems.length) {
    return (
      <div className="mt-20 text-center container px-4">
        <h1 className="text-3xl font-semibold">
          My Shopping Bag ({cartItems.length} Items)
        </h1>
        <div className="flex items-center justify-center mt-4">
          <div className="flex items-center flex-col">
            <ShoppingCart className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-3xl font-semibold ml-2">
              Your Shopping Bag is Empty
            </h1>
          </div>
        </div>
      </div>
    );
  }

  if (getCartItemLoading) {
    return (
      <div className="mt-20 text-center container px-4">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }
  return (
    <div className="mt-20 text-center container px-4">
      <h1 className="text-3xl font-semibold">
        My Shopping Bag ({cartItems.length} Items)
      </h1>
      <div className="flex flex-col lg:flex-row justify-between w-full mt-10">
        <div className="lg:w-7/12 w-full">
          <h1 className="text-2xl flex items-center space-x-2 my-2">
            <ShoppingCart /> <span>Order Summary</span>
          </h1>
          <div className="overflow-x-auto lg:w-12/12">
            <table className="table table-zebra min-w-full">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{printCartItems}</tbody>
            </table>
          </div>
        </div>
        <PaymentSection />
      </div>
    </div>
  );
}
