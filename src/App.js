import React from "react";
import "./App.css";
// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import { firestore } from "./firebase";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db = firebase.firestore()
  }

  
  componentDidMount() {
    this.db.collection("products")
    // .where('price', '>', 789)
    // to get the items according to filter
    .onSnapshot(snapshot => {
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ products: products, loading: false });
    });
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id)

    docRef
      .update({qty: products[index].qty + 1})
    .then(()=>{})
    .catch((error)=>{
      console.log('error', error)
    })
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef1 = this.db.collection('products').doc(products[index].id)
    if (products[index].qty === 0) {
      return;
    }
    docRef1
    
    .update({
      qty: products[index].qty-1
    })
    .then(()=>{})
    .catch((error)=>{
      console.log('error' , error)
    })
  };

  handleDeleteProduct = id => {
    const { products } = this.state;
    // const index = products.indexOf(id);


    // const index = products.id;
    const docRef2 = this.db.collection('products').doc(id)

    docRef2
    .delete({
      items: products.filter(product => product.id !== id)
    })
.then({})
.catch((error=>{
  console.log('error', error)
}))
    // const items = products.filter(product => product.id !== id);

    // this.setState({
    //   products: items
    // });
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct =() =>{
    this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 3,
      title: 'bike',
      id: 1
    })
    .then((docRef) =>{
      console.log('Product has been added', docRef)
    })
    .catch((error)=>{
      console.log('errpr', error);
    })
  }

 

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct} style ={{padding :20, fontSize: 25}}>Add a Product</button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products ..</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
