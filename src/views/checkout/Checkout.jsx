import { Database, DollarSign, MoveLeft, User } from "lucide-react";
import { GrOrderedList } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import LazyImage from "../../components/LazyImage";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function Checkout() {
  const navigate = useNavigate();
  const {cartItems, totalPrices} = useCart();
  

  const printProducts = cartItems.map((item) => (
    <>
      <div className="flex justify-around px-2 items-center">
        <LazyImage src={item.product.thumbnail} className={"size-20"} />
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold">{item.product.title}</h2>
          <p>size: {item.product.size}</p>
          <p className="max-w-14 inline bg-base-200 p-2 text-[10px] rounded-lg">
            {item.quantity} items
          </p>
        </div>
        <p className="font-bold">{item.product.price}$</p>
      </div>
      <div className="divider"></div>
    </>
  ));
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[700px]">
        <header className="text-center mt-40 mb-10 space-y-5">
          <button onClick={() => navigate(-1)}><MoveLeft className="size-5 text-primary" /></button>
          <h1 className="font-semibold text-3xl text-black">
            thank you for purchase!
          </h1>
          <p className="text-base-300">
            you will receive an confirmation letter throuth your email
          </p>
        </header>
        <section>
          <article className="shadow p-10 rounded-lg shadow-base-300">
            <ul className="flex flex-col space-y-10">
              <li>
                <div className="flex justify-between px-3 items-center ">
                  <p className="flex gap-5 items-center">
                    <Database className="size-5 text-primary" /> Date
                  </p>
                  <p>27/04/2022</p>
                </div>
              </li>
              <li>
                <div className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <User className="size-5 text-primary" /> Customer
                  </p>
                  <p>user name</p>
                </div>
              </li>
              <li>
                <div className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <MdPayment className="size-5 text-primary" /> payment Method
                  </p>
                  <p>cash on delivery</p>
                </div>
              </li>
              <div className="divider"></div>
              <li>
                <div className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <GrOrderedList className="size-5 text-primary" /> Order
                    Number
                  </p>
                  <p>23-345-562</p>
                </div>
              </li>
              <li>
                <div className="flex justify-between px-3 items-center">
                  <p className="flex gap-5 items-center">
                    <DollarSign className="size-5 text-primary" /> Total
                  </p>
                  <p>{totalPrices}$</p>
                </div>
              </li>
            </ul>
          </article>
          <article>
            <header>
              <h1 className="text-2xl font-bold ">order line</h1>
            </header>
            <div className="shadow shadow-black rounded-md  p-10 my-5">
              {printProducts}
            </div>
              <div className="flex justify-center items-center gap-5">
              <button className="btn w-5/12 text-white bg-primary  rounded-sm hover:bg-primary/80">
                update something
              </button>
              <button onClick={() => navigate("/order-success")} className="btn w-5/12 text-white bg-primary  rounded-sm hover:bg-primary/80">
                make order
              </button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
