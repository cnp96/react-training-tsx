import * as React from "react";
import { ItemSchema } from "../Cart";

export interface CartItemProps {
  item: ItemSchema;
  onRemoveClick: (id: string) => void;
  onIncrementClick: (id: string) => void;
  onDecrementClick: (id: string) => void;
}

const CartItem: React.SFC<CartItemProps> = props => {
  const { item, onRemoveClick, onDecrementClick, onIncrementClick } = props;
  return (
    <li className="card list-group-item">
      <div className="center-v" style={{ width: "40%" }}>
        <span className="text-muted">Item Name</span>
        <span className="text-active">{item.name}</span>
      </div>

      <div className="center-v">
        <span className="text-muted">Quantity</span>
        <div>
          <button
            className="btn btn-sm btn-warning m-0"
            onClick={() => onDecrementClick(item.id)}
          >
            -
          </button>
          <span className="text-active mr-1 ml-1"> {item.quantity} </span>
          <button
            className="btn btn-sm btn-success m-0"
            onClick={() => onIncrementClick(item.id)}
          >
            +
          </button>
        </div>
      </div>

      <div className="center-v">
        <span className="text-muted">Price</span>
        <span className="text-active">Rs. {item.price}</span>
      </div>

      <div className="center-v">
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onRemoveClick(item.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
