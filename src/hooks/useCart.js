import { useNavigate } from "react-router-dom";
import {
  useAddToCartMutation,
  useDeleteCartItemMutation,
  useGetCartItemQuery,
} from "../store/api/cartApiSlice";
import toast from "react-hot-toast";
import { useCheckQuery } from "../store/api/authApiSlice";

export default function useCart() {
  const navigate = useNavigate();
  const { data: user } = useCheckQuery();
  const { data, isLoading: getCartItemLoading } = useGetCartItemQuery();
  const cartItems = data?.data?.items || [];
  const totalPrices = data?.data?.totalPrice;
  const [addToCart, { isLoading: addToCartLoading }] = useAddToCartMutation();
  const [deleteCartItem, { isLoading: deleteCartItemLoading }] =
    useDeleteCartItemMutation();
  // handle add to cart
  const handleAddToCart = async (productId) => {
    if (user) {
      await addToCart({ productId, quantity: 1 });
      toast.success("Product added to cart");
    } else {
      toast.error("Please login to add product to cart");
      navigate("/login");
    }
  };

  // handle remove item form cart
  const handleDeleteItem = async (productId) => {
    await deleteCartItem(productId);
  };
  return {
    handleAddToCart,
    addToCartLoading,
    cartItems,
    handleDeleteItem,
    deleteCartItemLoading,
    totalPrices,
    getCartItemLoading
  };
}
