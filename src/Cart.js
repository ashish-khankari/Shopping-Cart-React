// A state is way to store local data for a particular component
import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={
                            props.onIncreaseQuantity
                        }
                        onDecreaseQuantity={
                            props.onDecreaseQuantity
                        }

                        onhandleDeleteProduct={
                            props.onhandleDeleteProduct
                        }
                    />
                )
            })}
        </div>
    );
}


export default Cart;