import React from "react";
import "./cart.css";

export interface CartProps {}

export interface CartState {}

class Cart extends React.Component<CartProps, CartState> {
  render() {
    return (
      <div className="container center-hv">
        <h3 className="title">Add to Cart Page</h3>

        <div className="add-item-container center-h">
          <input
            type="text"
            placeholder="Item name"
            className="form-control custom-inp-default"
          />
          &nbsp;
          <button className="btn btn-primary">Add Item</button>
        </div>

        <div className="list-items-container">
          <ul className="list-group">
            <li className="card list-group-item">
              <div className="center-v">
                <span className="text-muted">Item Name</span>
                <span className="text-active">Phillips Hair Dryer</span>
              </div>

              <div className="center-v">
                <span className="text-muted">Quantity</span>
                <div>
                  <button className="btn btn-warning">-</button>
                  <span className="text-active"> 21 </span>
                  <button className="btn btn-success">+</button>
                </div>
              </div>

              <div className="center-v">
                <span className="text-muted">Price</span>
                <span className="text-active">Rs. 400</span>
              </div>

              <div className="center-v">
                <button className="btn btn-danger">Remove</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="divider" />
        <div className="cart-info-container center-v ml-auto">
          <div className="cart-info-row">
            <span className="text-muted center-v">Total Items: </span>
            <span className="text-active"> 1 </span>
          </div>

          <div className="cart-info-row">
            <span className="text-muted center-v">Total Price: </span>
            <span className="text-active"> Rs. 400 </span>
          </div>

          <div className="cart-info-row">
            <span className="text-muted center-v">Discount Availed: </span>
            <span className="text-active success"> - Rs. 100 </span>
          </div>

          <div className="cart-info-row">
            <span className="text-muted center-v">Final Price: </span>
            <span className="text-active bold"> Rs. 300 </span>
          </div>

          <button className="btn btn-primary">Proceed to checkout</button>
        </div>
      </div>
    );
  }
}

export default Cart;
