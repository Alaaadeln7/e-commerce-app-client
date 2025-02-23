import { Trash2 } from "lucide-react";
import useCart from "../../hooks/useCart";
import MainButtonLoader from "../../components/MainButtonLoader";
export default function CartItem({
  productId,
  thumbnail,
  title,
  price,
  quantity,
}) {
  const { handleDeleteItem, deleteCartItemLoading } = useCart();
  return (
    <tr>
      <td>
        <img
          src={thumbnail}
          alt={title}
          className="w-16 h-16 object-cover rounded"
        />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>${price * quantity}</td>
      <td>
        <button onClick={() => handleDeleteItem(productId)}>
          {deleteCartItemLoading ? (
            <MainButtonLoader />
          ) : (
            <Trash2 className="cursor-pointer w-5 h-5 text-red-600" />
          )}
        </button>
      </td>
    </tr>
  );
}
