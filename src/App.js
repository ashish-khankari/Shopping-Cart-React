import React from "react";
// import CartItem from "./CartItem";
import Cart from "./Cart";
import './index.css';
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://m.media-amazon.com/images/S/aplus-media/sc/38c59744-32aa-4d2a-bc2f-12aa4744566f.__CR0,0,1000,1000_PT0_SX300_V1___.png',
          id: 1
        },
        {
          price: 999,
          title: 'Phone',
          qty: 10,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGK5RmZwvbA3TMta-vMGFL6kCU3aTUCq5Nw&usqp=CAU',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7yqkB4FF30u9E1NodF2zsA3lIBdI5iMUy6XAQSyb_u8jjmV3uP9M6agB4Ou6ewSsjf8&usqp=CAU',
          id: 3
        }
      ]
    }
  }
  handleincreaseQuantity = (product) => {
    // console.log('incraese Quantity', product)
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    })

  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;


    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

getCartCount =() =>{
  
  const {products} = this.state;
  let count =0;

  products.forEach((product) =>{
    count+=product.qty;
  })

  return count;

}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal =0;
  products.map((product) =>{
    cartTotal = cartTotal + product.qty * product.price;

  })
  return cartTotal;

}

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count ={this.getCartCount()}/>
        <Cart 
        products ={products}
        onIncreaseQuantity={
            this.handleincreaseQuantity
        }
        onDecreaseQuantity={
            this.handleDecreaseQuantity
        }

        onhandleDeleteProduct={
            this.handleDeleteProduct
        }/><h1>Total: {this.getCartTotal()}</h1>
      </div>
    );
  }
}

export default App;
