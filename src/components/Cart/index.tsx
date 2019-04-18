import React from "react";
import "./cart.css";
import AddToCart from "../AddToCart";

export interface CartProps {
  items: ItemSchema[];
}

export interface ItemSchema {
  id: string;
  name: string;
  quantity: number;
  price: number;
  discount: number;
}

export interface CartState {
  allItems: ItemSchema[];
  cartItems: ItemSchema[];
}

class Cart extends React.Component<CartProps, CartState> {
  state = {
    allItems: [...this.props.items],
    cartItems: []
  };

  removeItem(index: number) {
    const cartItems = [...this.state.cartItems];
    cartItems.splice(index, 1);
    this.setState({ cartItems });
  }

  addToCart(id: string) {
    const allItems = [...this.state.allItems];

    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].id === id) {
        const newItem = allItems.splice(i, 1)[0];
        const cartItems: ItemSchema[] = [...this.state.cartItems];
        cartItems.push(newItem);
        this.setState({
          allItems,
          cartItems
        });
        break;
      }
    }
  }

  render() {
    const allItems = [...this.state.allItems];
    const cartItems = [...this.state.cartItems];

    const cartContent =
      cartItems.length === 0 ? (
        "Your cart is empty."
      ) : (
        <ul className="list-group">
          {cartItems.map((item: ItemSchema, index) => {
            return (
              <li key={index} className="card list-group-item">
                <div className="center-v" style={{ width: "40%" }}>
                  <span className="text-muted">Item Name</span>
                  <span className="text-active">{item.name}</span>
                </div>

                <div className="center-v">
                  <span className="text-muted">Quantity</span>
                  <div>
                    <button className="btn btn-warning">-</button>
                    <span className="text-active"> {item.quantity} </span>
                    <button className="btn btn-success">+</button>
                  </div>
                </div>

                <div className="center-v">
                  <span className="text-muted">Price</span>
                  <span className="text-active">Rs. {item.price}</span>
                </div>

                <div className="center-v">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      );

    const cartInfoContent =
      cartItems.length === 0 ? (
        ""
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      );

    return (
      <div className="container center-hv">
        <h3 className="title">Add to Cart Page</h3>

        <AddToCart
          onAddItemClick={id => this.addToCart(id)}
          itemsList={allItems.map(item => ({ name: item.name, id: item.id }))}
        />

        <div className="list-items-container">{cartContent}</div>

        {cartInfoContent}
      </div>
    );
  }
}

export default Cart;
