import { Trash2 } from "lucide-react";

export default function CartItem({ key, thumbnail, title, price, quantity }) {
  return (
    <tr key={key}>
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
        <Trash2 className="cursor-pointer w-5 h-5 text-red-600" />
      </td>
    </tr>
  );
}
