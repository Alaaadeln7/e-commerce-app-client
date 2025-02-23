import { useGetProductsQuery } from "../../store/api/productApiSlice";
import Product from "./Product";
import ListProductsSkeleton from "../../components/skeleton/ListPorductsSkeleton";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
export default function RelatedProducts({ category }) {
  const { data, isLoading: productsLoading } = useGetProductsQuery();
  const scrollRef = useRef(null);
  if (productsLoading) {
    return <ListProductsSkeleton count={8} />;
  }
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  const products =
    data?.data?.filter((item) => !category || item.category === category) || [];
  const printProducts = products.map((product) => (
    <Product
      key={product._id}
      productId={product._id}
      title={product.title}
      thumbnail={product.thumbnail}
      description={product.description}
      price={product.price}
      discount={product.discount}
    />
  ));
  return (
    <div className="overflow-hidden  relative max-w-5xl mx-auto p-4">
      <div>
        <h1 className="text-2xl my-4">Related products</h1>
      </div>
      <div>
        <button
          className="btn btn-primary absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={scrollLeft}
        >
          <ArrowLeft />
        </button>
        <button
          className="btn btn-primary absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={scrollRight}
        >
          <ArrowRight />
        </button>
      </div>
      <div
        ref={scrollRef}
        className=" w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide "
      >
        {printProducts}
      </div>
    </div>
  );
}
