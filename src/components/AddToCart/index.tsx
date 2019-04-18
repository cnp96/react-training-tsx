import React from "react";
import "./addToCart.css";

interface SearchItemSchema {
  id: string;
  name: string;
}

export interface AddToCartProps {
  onAddItemClick: (name: string) => void;
  itemsList: SearchItemSchema[];
}

export interface AddToCartState {
  itemName: string;
  itemId: string;
  searchList: SearchItemSchema[];
}

class AddToCart extends React.Component<AddToCartProps, AddToCartState> {
  state = { itemName: "", itemId: "", searchList: [] };

  resetItemName() {
    this.setState({ itemName: "" });
  }

  updateItemName(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const inputItemName = e.target.value.toLowerCase();
    const { itemsList } = this.props;

    const searchList = itemsList.filter(item =>
      item.name.toLowerCase().startsWith(inputItemName)
    );

    this.setState({ itemName: inputItemName, searchList });
  }

  selectItemFromSearch(item: SearchItemSchema) {
    const itemName = item.name;
    const itemId = item.id;
    this.setState({
      itemName,
      itemId,
      searchList: []
    });
  }

  render() {
    const { onAddItemClick } = this.props;
    const searchList: SearchItemSchema[] = [...this.state.searchList];

    const searchListContent =
      searchList.length === 0 ? (
        <div className="search-results" />
      ) : (
        <div className="search-results">
          <ul className="list-group">
            {searchList.map((item, index) => (
              <li
                onClick={() => this.selectItemFromSearch(item)}
                key={index}
                className="list-group-item"
              >
                <a>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      );

    return (
      <div className="add-item-container center-h">
        <div className="search">
          <input
            type="text"
            placeholder="Enter item name"
            className="form-control custom-inp-default"
            value={this.state.itemName}
            onChange={e => this.updateItemName(e)}
          />
          {searchListContent}
        </div>
        &nbsp;
        <button
          className="btn btn-md btn-primary m-0"
          onClick={() => {
            this.resetItemName();
            onAddItemClick(this.state.itemId);
          }}
        >
          Add Item
        </button>
      </div>
    );
  }
}

export default AddToCart;
