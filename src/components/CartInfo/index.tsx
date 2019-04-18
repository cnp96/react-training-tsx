import * as React from "react";
import { ItemSchema } from "../Cart";
import "./cartInfo.css";

export interface CartInfoProps {
  items: ItemSchema[];
}

const CartInfo: React.SFC<CartInfoProps> = props => {
  const { items } = props;

  let itemTotals = { price: 0, discount: 0 };
  for(let item of items) {
    itemTotals.price += item.price * item.quantity;
    itemTotals.discount += item.discount * item.quantity;
  }

  return (
    <React.Fragment>
      <div className="divider" />
      <div className="animated slideIn cart-info-container center-v ml-auto">
        <div className="cart-info-row">
          <span className="text-muted center-v">Total Items: </span>
          <span className="text-active"> {items.length} </span>
        </div>

        <div className="cart-info-row">
          <span className="text-muted center-v">Total Price: </span>
          <span className="text-active"> Rs. {itemTotals.price} </span>
        </div>

        <div className="cart-info-row">
          <span className="text-muted center-v">Discount Availed: </span>
          <span className="text-active success">
            {" "}
            - Rs. {itemTotals.discount}{" "}
          </span>
        </div>

        <div className="cart-info-row">
          <span className="text-muted center-v">Final Price: </span>
          <span className="text-active bold">
            {" "}
            Rs. {itemTotals.price - itemTotals.discount}{" "}
          </span>
        </div>

        <button className="btn btn-primary">Proceed to checkout</button>
      </div>
    </React.Fragment>
  );
};

export default CartInfo;
