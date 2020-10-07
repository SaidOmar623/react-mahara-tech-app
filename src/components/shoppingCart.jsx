import React, { Component } from 'react';

import Product from './products';

class ShoppingCart extends Component {
    state={
        shopcart: []
    }

    // handleDelete = (product)=>{
    //     // clone  edit  set-State
    //     // const newproducts = this.state.shopcart.map((p)=>{
    //     //     if(p.id === product.id){
    //     //         // product.IsInCart = !product.IsInCart;
    //     //         // this.state.shopcart.

    //     //         console.log("delete");
    //     //         console.log(product);
                
    //     //     }
    //     // });
    //     const shopcart = this.state.shopcart.filter((p)=>( p.id !== product.id ))
    //     this.setState({shopcart});
    // }
    // // handleReset = () =>{
    // // /**Clone */   let products = [...this.state.products];
    // // /**edit */    products = products.map((p)=>{
    // //     p.count = 0;
    // //     return p;
    // // });
    // // /**setState */this.setState({products}); 
    // // }
    handleIncrement = (product) =>{
        //Clone
        const shopcart = [...this.state.shopcart];
        const index = shopcart.indexOf(product);
        shopcart[index] = {...shopcart[index]};
        //Edit
        shopcart[index].count++;
        //setState
        this.setState({shopcart})
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Shopping Cart Page</h1>
                {/* <button className="btn btn-danger" onClick={this.props.onReset}>Reset</button> */}
                {this.props.products.map(product =>{ 
                    if(product.IsInCart){
                        // if(this.state.shopcart.length === 0){
                        this.state.shopcart.push(product);
                        // }else if(this.state.shopcart.length > 0 && !this.state.shopcart.some(p=> p.id === product.id)){
                        //     this.state.shopcart.push(product);
                        // }
                        return(
                            // <Product key={product.id} product={product} />
                            <Product key={product.id} product={product} /*onDelete={this.handleDelete}*/ onIncrement={this.handleIncrement} >
                            {/* <h3>{product.id}</h3> */}
                            </Product>
                        )
                    }
                    return null;
                })
                }                                                                            
            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;