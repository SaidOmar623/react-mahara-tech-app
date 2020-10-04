import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    
    render() { 
        const classes = this.props.product.count === 0 ? "badge badge-warning m-2" : "badge badge-primary m-2";
        return (
            <React.Fragment>
                {/* <img src={this.state.imgUrl} alt="ReactLogo"/> */}
                {/* <span>{this.props.children}</span> */}
                <div className="row">
                    <div className="col-2">
                        <Link to={`/product/${this.props.product.id}`}>{this.props.product.name}</Link>
                    </div>
                    <div className="col">
                        <span className={classes}>{this.props.product.count}</span>
                        <button /*onClick={()=> this.props.onIncrement(this.props.product)}*/ className="btn btn-success btn-sm">+</button>
                        <span style={{cursor: "pointer"}} /*onClick={()=>this.props.onDelete(this.props.product)}*/ ><i className="fas fa-trash m-2"></i></span>
                    </div>
                </div>
                {/* <ul>
                    {this.state.proNames.map(proname => 
                        <li key={proname} >{proname}</li>
                    )}
                </ul>   */}
            </React.Fragment>    
        );
    }
}

export default Product;