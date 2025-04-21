import { Database, DollarSign, Loader, MoveLeft, User } from "lucide-react";
import { GrOrderedList } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import LazyImage from "../../components/LazyImage";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useGetUserOrdersQuery } from "../../store/api/orderApiSlice";
import formatDate from "../../utils/formateDate";
import { formatPrice } from "../../utils/helpers";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data: orders, isLoading: ordersLoading } = useGetUserOrdersQuery();

  if (ordersLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader className="size-5 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-[700px]">
        <header className="text-center mt-40 mb-10 space-y-5">
          <h1 className="font-semibold text-3xl text-base-900">
            <button className="btn mr-3" onClick={() => navigate(-1)}>
              <MoveLeft className="size-5 text-primary" />
            </button>
            Thank you for your purchase!
          </h1>
          <p className="text-base-900">
            You will receive a confirmation email shortly.
          </p>
        </header>

        {orders?.data?.map((order) => (
          <section key={order._id} className="mb-10">
            <article className="shadow p-10 rounded-lg shadow-base-300">
              <ul className="flex flex-col space-y-10">
                <li className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <Database className="size-5 text-primary" /> Date
                  </p>
                  <p>{formatDate(order?.createdAt)}</p>
                </li>
                <li className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <User className="size-5 text-primary" /> Customer
                  </p>
                  <p className="ml-4">{user?.fullName}</p>
                </li>
                <li className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <MdPayment className="size-5 text-primary" /> Payment Method
                  </p>
                  <p>{order.paymentStatus}</p>
                </li>
                <div className="divider"></div>
                <li className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <GrOrderedList className="size-5 text-primary" /> Order
                    Number
                  </p>
                  <p>{order.orderNumber}</p>
                </li>
                <li className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <DollarSign className="size-5 text-primary" /> Total
                  </p>
                  <p>{formatPrice(order.totalPrice)}</p>
                </li>
              </ul>
            </article>
            <article>
              <header>
                <h1 className="text-2xl font-bold mt-5">Order Details</h1>
              </header>
              <div className="shadow shadow-black rounded-md p-10 my-5">
                {order.items.map((item) => (
                  <div key={item.product._id}>
                    <div className="flex justify-around px-2 items-center flex-wrap">
                      <LazyImage
                        src={item.product.thumbnail}
                        className="size-20"
                      />
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">{item.product.title}</h2>
                        <p>Size: {item.product.size}</p>
                        <p className="max-w-14 inline bg-base-200 p-2 text-[10px] rounded-lg">
                          {item.quantity} items
                        </p>
                      </div>
                      <p className="font-bold">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <div className="divider"></div>
                  </div>
                ))}
              </div>
            </article>
          </section>
        ))}
      </div>
    </div>
  );
}
