import ListProductsSkeleton from "../../components/skeleton/ListPorductsSkeleton";
import { useGetProductsQuery } from "../../store/api/productApiSlice";
// import PaginationProducts from "./PaginationProducts";
import Product from "./Product";

export default function ProductList({ category }) {
  const { data, isLoading: productsLoading } = useGetProductsQuery();

  if (productsLoading) {
    return <ListProductsSkeleton count={8} />;
  }
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
    <div className="flex flex-col justify-around items-center space-y-4 flex-wrap mb-10">
      <div className="flex justify-around items-center gap-4 flex-wrap mt-10">
        {printProducts}
      </div>
      {/* {data.totalPage <= 2 && <PaginationProducts data={data} />} */}
    </div>
  );
}
