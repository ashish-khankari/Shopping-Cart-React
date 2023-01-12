import React from "react";

class CartItem extends React.Component{
    render () {
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style = {styles.items}>Phone</div>
                    <div style = {{color:'#777', fontSize: 15}}>Rs 999</div>
                    <div style = {{color:'#777', fontSize: 15}}>Qty: 1</div>
                    <div className="cart-item-actions">

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    },

    items:{
        fontSize: 25
    }
    
}

export default CartItem;