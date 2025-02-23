const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px] animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="w-full h-64 bg-gray-300 rounded-lg"></div>

      {/* Content Skeleton */}
      <div>
        <div className="h-8 bg-gray-300 rounded w-3/4 my-3"></div>
        <div className="h-5 bg-gray-300 rounded w-full"></div>
        <div className="h-5 bg-gray-300 rounded w-5/6 mt-2"></div>

        {/* Price & Button Skeleton */}
        <div className="flex items-center justify-between p-4">
          <div className="h-10 bg-gray-300 rounded w-16"></div>
          <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const ListPorductsSkeleton = ({ count = 6 }) => {
  return (
    <div className="flex justify-around items-center gap-5 px-10 flex-wrap mt-10">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default ListPorductsSkeleton;
