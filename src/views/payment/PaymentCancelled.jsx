import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentCancelled() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <XCircle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-3xl font-bold text-red-600">Payment Cancelled</h1>
      <p className="mt-2 text-gray-600">
        You have cancelled the payment. No money has been deducted.
      </p>
      <Link to="/cart" className="btn btn-primary mt-6">
        Back to Cart
      </Link>
    </div>
  );
}
