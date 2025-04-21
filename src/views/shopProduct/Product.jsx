import { ShoppingCart } from "lucide-react";
import MainButtonLoader from "../../components/MainButtonLoader";
import useCart from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../components/LazyImage";
import { formatPrice } from "../../utils/helpers";

export default function Product({
  productId,
  thumbnail,
  title,
  description,
  price,
  discount,
}) {
  const { handleAddToCart, addToCartLoading } = useCart();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 w-[200px] mx-10">
      <div className="w-full" onClick={() => navigate(`/shop/${productId}`)}>
        <LazyImage
          className="w-full object-cover"
          src={thumbnail}
          alt={title}
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-base-content my-3 line-clamp-2">
          {title}
        </h2>
        <p className="text-base-content/60 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between gap-5 p-4 flex-wrap">
          {discount && (
            <del className="font-semibold text-2xl text-base-800">
              {formatPrice(price)}
            </del>
          )}
          <p className="font-semibold text-2xl">
            {formatPrice(price - discount)}
          </p>
          <button
            onClick={() => handleAddToCart(productId)}
            className="btn btn-outline text-primary border-primary rounded-full"
          >
            {addToCartLoading ? <MainButtonLoader /> : <ShoppingCart />}
          </button>
        </div>
      </div>
    </div>
  );
}
