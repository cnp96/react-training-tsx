import React from "react";
import "./addToCart.css";

export interface AddToCartProps {
  onAddItemClick: (name: string) => void;
  itemsList: string[];
}

export interface AddToCartState {
  itemName: string;
  searchList: string[];
}

class AddToCart extends React.Component<AddToCartProps, AddToCartState> {
  state = { itemName: "", searchList: [] };

  resetItemName() {
    this.setState({ itemName: "" });
  }

  updateItemName(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const itemName = e.target.value;
    const itemNameInLower = itemName.toLowerCase();
    const { itemsList } = this.props;

    const searchList =
      itemName === ""
        ? []
        : itemsList.filter(item =>
            item.toLowerCase().startsWith(itemNameInLower)
          );

    this.setState({ itemName, searchList });
  }

  selectItemFromSearch(itemName: string) {
    this.setState({
      itemName,
      searchList: []
    })
  }

  render() {
    const { onAddItemClick } = this.props;
    const { searchList } = this.state;

    const searchListContent =
      searchList.length === 0 ? (
        <div className="search-results" />
      ) : (
        <div className="search-results">
          <ul className="list-group">
            {searchList.map((item, index) => (
              <li key={index} className="list-group-item">
                <a onClick={() => this.selectItemFromSearch(item)}>{item}</a>
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
          className="btn btn-primary"
          onClick={() => {
            this.resetItemName();
            onAddItemClick(this.state.itemName);
          }}
        >
          Add Item
        </button>
      </div>
    );
  }
}

export default AddToCart;
