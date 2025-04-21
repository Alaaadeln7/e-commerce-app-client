import { Loader } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader className="animate-spin size-10 text-primary" />
    </div>
  );
}
