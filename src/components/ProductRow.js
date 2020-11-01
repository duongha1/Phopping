import React, { Component } from 'react';

class ProductRow extends Component {
    render() { 
        const {id, name, price, image} = this.props.product;
        return (  
            <div className="table-rows">
                <div className="table-cell">
                    {id}
                </div>
                <div className="table-cell">
                    {name}
                </div>
                <div className="table-cell">
                    {price}€
                </div>
                <div className="table-cell">
                    <img src={image}  alt=""/>
                </div>
                <div className="table-cell">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        );
    }
}
 
export default ProductRow;