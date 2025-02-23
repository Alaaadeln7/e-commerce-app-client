export default function SingleProductSkeleton() {
  return (
    <div className="w-full flex justify-around items-start space-x-10 max-w-5xl mx-auto p-4 animate-pulse">
      <div className="w-6/12 bg-gray-300 h-96 rounded-md"></div>
      <div className="w-6/12 flex justify-around flex-col items-start flex-wrap space-y-4">
        <div className="w-3/4 h-10 bg-gray-300 rounded"></div>
        <div className="w-full h-20 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-10 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-10 bg-gray-300 rounded"></div>
        <div className="w-full flex space-x-3 mt-10">
          <div className="w-1/2 h-12 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-12 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
