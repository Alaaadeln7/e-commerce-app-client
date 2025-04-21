import { TicketPercent } from "lucide-react";
import useCart from "../../hooks/useCart";
import useCoupon from "../../hooks/useCoupon";
import { Link } from "react-router-dom";

export default function PaymentSection() {
  const { formik, checkCouponLoading, discount } = useCoupon();
  const { totalPrices, deliveryCost } = useCart();
  const formSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  return (
    <div className="lg:w-4/12 w-full p-4 border border-base-300 rounded-xl mt-10">
      <h1 className="text-2xl text-start py-4">Payment Method</h1>
      <div className="flex gap-4">
        <Link to={"/input-info"} className="btn btn-primary w-full">
          Cash on Delivery
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-start mt-4 w-full">
        <h2>Discount Code</h2>
        <form
          className="flex space-x-2 items-center w-full flex-wrap gap-3"
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Discount code here"
            className={`input input-bordered flex-1 border-base-300`}
            name="coupon"
            value={formik.values.coupon}
            onChange={formik.handleChange}
          />
          <button
            type="submit"
            disabled={checkCouponLoading}
            className="btn btn-primary rounded-full btn-outline"
          >
            {checkCouponLoading ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Apply"
            )}
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
            <p>Total prices</p> <span>${totalPrices}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <p>Delivery</p> <span>{deliveryCost || "Free"}</span>
          </div>
          {discount?.validation && (
            <div className="flex justify-between items-center py-2">
              <p>discount</p> <span>{discount?.discountPercentage}%</span>
            </div>
          )}
          <div className="divider"></div>
          <div className="flex justify-between items-center py-2">
            <p className="text-lg font-semibold">Total</p>
            <span className="text-2xl font-semibold text-primary">
              $
              {totalPrices +
                (deliveryCost || 0) -
                (totalPrices * (discount?.discountPercentage || 0)) / 100}
            </span>
          </div>
          <Link to={"/input-info"} className="w-full mt-4 btn btn-primary">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
