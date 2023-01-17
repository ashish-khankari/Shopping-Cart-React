import React from "react";
import './index.css';
// import Cart from "./Cart";

class CartItem extends React.Component {

    increaseQuantity = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }
        //to decreaes qty use use state
        this.setState({
            qty: this.state.qty - 1
        })
    }

    render() {
        // console.log('this.prop', this.props)
        const { price, title, qty } = this.props.product;
        const { product, onIncreaseQuantity, onDecreaseQuantity, onhandleDeleteProduct } = this.props;
        return (
            <div className="cart-item">
                {this.props.jsx}

                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={styles.items}>{title}</div>
                    <div style={{ color: '#777', fontSize: 25 }}>Rs. {price}</div>
                    <div style={{ color: '#777', fontSize: 25 }}>{qty}</div>
                    <div className="cart-item-actions">

                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={() => onDecreaseQuantity(product)}
                        />

                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                            onClick={() => onhandleDeleteProduct(product.id)}


                        />
                    </div>
                </div>
            </div>
        )
    }
}
// A state is way to store local data for a particular component

const styles = {
    image: {
        height: 180,
        width: 180,
        borderRadius: 4,
        background: '#ccc'
    },

    items: {
        fontSize: 40
    }

}

export default CartItem;