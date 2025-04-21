import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-2 text-gray-600">
        Thank you for your order. We’ve received your payment.
      </p>
      <Link to="/" className="btn btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}
