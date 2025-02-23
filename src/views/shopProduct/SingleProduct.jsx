import { useParams } from "react-router-dom";
import SingleProductSkeleton from "../../components/skeleton/SingleProductSkeleton";
import { useGetProductQuery } from "../../store/api/productApiSlice";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";
import useCart from "../../hooks/useCart";
import Faqs from "./Faqs";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";

export default function SingleProduct() {
  const { productId } = useParams();
  const { data, isLoading } = useGetProductQuery(productId);

  const product = data?.data;
  const { handleAddToCart } = useCart();
  console.log(productId);
  return (
    <div className="flex justify-center items-center p-4 mt-20">
      {isLoading ? (
        <SingleProductSkeleton />
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-6 max-w-5xl mx-auto">
            {/* Product Image */}
            <div className="md:w-6/12">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full object-cover rounded-md mt-4"
              />
            </div>

            {/* Product Details */}
            <div className=" w-4/12 p-4 md:w-6/12 flex flex-col text-left space-y-8">
              <h1 className="text-3xl md:text-4xl font-bold">
                {product.title}
              </h1>
              <p className="description-style">{product.description}</p>
              <p className="text-2xl md:text-4xl font-semibold mt-2 text-primary">
                ${product.price}
              </p>
              {/* free return section  */}

              {product?.freeReturn && (
                <p className="flex gap-2 font-semibold">
                  <Check className="border-2 border-primary  rounded-full text-primary" />
                  Free + easy returns
                </p>
              )}
              {/* free return shipping */}
              {product?.freeShipping && (
                <p className="flex gap-2 font-semibold">
                  <Check className="border-2 border-primary  rounded-full text-primary" />
                  Free shipping on orders over $49 USD
                </p>
              )}
              {/* size section  */}
              {product?.sizes?.length > 0 && (
                <>
                  <h1 className="font-bold">Choose Size</h1>
                  <select
                    name="size"
                    id="size-select"
                    className="select mt-0 w-full max-w-xs input-bordered border-2 bg-base-200"
                  >
                    {product.sizes.map((size) => (
                      <option key={size.value} value={size.value}>
                        {size.value + size.unit}
                      </option>
                    ))}
                  </select>
                </>
              )}
              {/* Quantity Selector */}
              <div className="w-full mt-4">
                <h1 className="font-bold mb-2">Quantity</h1>
                <div className="flex justify-center md:justify-start items-center space-x-4">
                  <button className="btn">
                    <Minus className="size-5" />
                  </button>
                  <h1 className="btn w-10 h-10 text-2xl">1</h1>
                  <button className="btn">
                    <Plus className="size-5" />
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mt-6">
                <button
                  onClick={() => handleAddToCart(productId)}
                  className="w-full md:w-1/2 btn border border-primary bg-transparent text-primary rounded-sm"
                >
                  <ShoppingCart size={20} /> add to cart
                </button>
                <button className="w-full md:w-1/2 btn bg-primary text-white rounded-sm">
                  checkout
                </button>
              </div>
            </div>
          </div>
          <RelatedProducts category={product.category} />
          <Reviews productId={productId} />
          <Faqs />
        </div>
      )}
    </div>
  );
}
