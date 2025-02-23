import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function PaginationProducts({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button
        className="px-3 py-1 btn  text-white rounded disabled:opacity-50"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <MoveLeft />
      </button>
      <span className="px-4 py-1 bg-gray-200 rounded">
        Page {data?.currentPage} of {data?.totalPages}
      </span>
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage >= data?.totalPages}
      >
        <MoveRight />
      </button>
    </div>
  );
}
