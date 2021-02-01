import "./App.css";
import React from "react";
import Cart from "./components/Cart";
import Item from "./components/Item";
import CartItem from "./components/CartItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  state = {
    items: [],
    selectedItems: [
      // {
      //   name: '',
      //   price: '',
      // }
    ],
  };

  async componentDidMount() {
    const response = await fetch(
      `https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`
    );
    const data = await response.json();

    this.setState({
      items: data,
    });
  }

  handleSubmit = (name, price) => {
    console.log(name, price);
    this.setState((prevState) => ({
      selectedItems: [...prevState.selectedItems, { name: name, price: price }],
    }));
  };

  handleDelete = (item) => {
    // console.log(item);
    this.setState((prevState) => ({
      selectedItems: prevState.selectedItems.filter(
        (itemElement) => itemElement !== item
      ),
    }));
  };

  render() {
    const { items, selectedItems } = this.state;

    return (
      <Router>
        <header>
          <Link to="/">
            <h1>MouseHeavan</h1>
          </Link>
          <Cart selectedItems={selectedItems} />
        </header>
        <main location="[object Object]" computedmatch="[object Object]">
          <Route
            path="/"
            exact
            render={(props) => (
              <Item {...props} items={items} click={this.handleSubmit} />
            )}
          />
          {/* <Item
            items={items}
            click={this.handleSubmit}
          /> */}
          <Route
            path="/cart"
            render={(props) => (
              <CartItem
                {...props}
                selectedItems={selectedItems}
                remove={this.handleDelete}
              />
            )}
          />
          {/* <Route path="/cart" component={CartItem} /> */}
        </main>
      </Router>
    );
  }
}

export default App;
