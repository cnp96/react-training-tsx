import React from "react";
import "./cart.css";
import AddToCart from "../AddToCart";
import CartItem from "../CartItem";
import CartInfo from "../CartInfo";

export interface ItemSchema {
  id: string;
  name: string;
  quantity: number;
  price: number;
  discount: number;
}

export interface CartProps {
  items: ItemSchema[];
}

export interface CartState {
  allItems: ItemSchema[];
  cartItems: ItemSchema[];
}

class Cart extends React.Component<CartProps, CartState> {
  state = {
    allItems: [...this.props.items],
    cartItems: new Array<ItemSchema>()
  };

  removeItem(id: string) {
    const { cartItems, allItems } = this.state;
    const newCartItems = cartItems.filter(item => item.id !== id);

    const removedItem = this.props.items.filter(item => item.id === id)[0];
    if (removedItem !== undefined) {
      allItems.push(removedItem);
    }
    this.setState({ cartItems: newCartItems, allItems });
  }

  incrementItem(id: string) {
    const cartItems = [...this.state.cartItems];
    for (let item of cartItems) {
      if (item.id === id) {
        item.quantity += 1;
        this.setState({ cartItems });
        break;
      }
    }
  }
  decrementItem(id: string) {
    const cartItems = [...this.state.cartItems];
    for (let item of cartItems) {
      if (item.id === id && item.quantity > 1) {
        item.quantity -= 1;
        this.setState({ cartItems });
        break;
      }
    }
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
              <CartItem
                key={index}
                item={item}
                onRemoveClick={id => this.removeItem(id)}
                onDecrementClick={id => this.decrementItem(id)}
                onIncrementClick={id => this.incrementItem(id)}
              />
            );
          })}
        </ul>
      );

    const cartInfoContent =
      cartItems.length === 0 ? "" : <CartInfo items={cartItems} />;

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
