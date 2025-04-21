export default function OrderItemSkeleton() {
  return [1, 2, 3, 4].map(() => (
    <>
      <div className="flex justify-around px-2 items-center flex-wrap animate-pulse">
        <div className="bg-base-300 rounded-md size-20"></div>

        <div className="flex flex-col gap-2 flex-1 px-2">
          <div className="h-4 bg-base-300 rounded w-32"></div>
          <div className="h-3 bg-base-300 rounded w-20"></div>
          <div className="h-4 bg-base-300 rounded w-16"></div>
        </div>

        <div className="h-5 bg-base-300 rounded w-12"></div>
      </div>

      <div className="divider"></div>
    </>
  ));
}
