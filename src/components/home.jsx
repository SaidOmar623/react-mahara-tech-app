import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Menu</h1>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product)=>{
                            const style = !product.IsInCart ? {color: "#808080", cursor: "pointer"} : {cursor: "pointer"};
                            return ( 
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><i className="fas fa-cart-plus" style={style} onClick={()=>this.props.onCartChange(product)}></i></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Home;