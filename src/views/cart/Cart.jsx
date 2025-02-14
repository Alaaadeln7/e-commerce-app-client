import { ShoppingCart, TicketPercent } from "lucide-react";
import useCoupon from "../../hooks/useCoupon";
import useCart from "../../hooks/useCart";

export default function Cart() {
  const { formik, checkCouponLoading } = useCoupon();
  const { cartItems  } = useCart();

  const discount = 20;
  const delivery = 20;
  // const total = subTotal - discount + delivery;

  if (!cartItems.length) {
    return (
      <div className="mt-20 text-center container px-4">
        {cartItems.length !== 0 && (
          <h1 className="text-3xl font-semibold">
            My Shopping Bag ({!cartItems.length} Items)
          </h1>
        )}
        <div className="flex items-center justify-center mt-4">
         <div className="flex items-center flex-col" >
         <ShoppingCart className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-3xl font-semibold ml-2">
            Your Shopping Bag is Empty
          </h1>
         </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 text-center container px-4">
      <h1 className="text-3xl font-semibold">
        My Shopping Bag ({cartItems.length} Items)
      </h1>

      <div className="flex flex-col lg:flex-row justify-between w-full mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="lg:w-2/3 w-full">
          <h1 className="text-2xl flex items-center space-x-2 my-2">
            <ShoppingCart /> <span>Order Summary</span>
          </h1>
          <div className="overflow-x-auto">
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
              <tbody>
                {/* {printCartItems} */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:w-1/3 w-full p-4 border border-primary rounded-xl">
          <h1 className="text-2xl text-start py-4">Payment Method</h1>
          <div className="flex gap-4">
            <button className="btn btn-primary w-full">Cash on Delivery</button>
          </div>

          <div className="flex flex-col gap-2 items-start mt-4 w-full">
            <h2>Discount Code</h2>
            <form className="flex space-x-2 items-center w-full" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="Discount code here"
                className="input input-bordered flex-1"
                {...formik.getFieldProps("coupon")}
              />
              <button
                type="submit"
                disabled={checkCouponLoading}
                className="btn btn-primary rounded-full btn-outline"
              >
                {checkCouponLoading ? <span className="loading loading-dots loading-md"></span> : "Apply"}
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <h1 className="self-start">
              <TicketPercent className="w-5 h-5 text-primary inline-block mr-2" />
              Order Summary
            </h1>
            <div>
              <div className="flex justify-between items-center py-2">
                <p>Sub Total</p> <span>${40}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <p>Discount</p> <span> - ${discount}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <p>Delivery</p> <span>${delivery}</span>
              </div>
              <hr />
              <div className="flex justify-between items-center py-2">
                <p className="text-lg font-semibold">Total</p>
                <span className="text-2xl font-semibold text-primary">${120}</span>
              </div>
              <button className="w-full mt-4 btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
