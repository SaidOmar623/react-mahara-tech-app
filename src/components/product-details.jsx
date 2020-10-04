import React, { Component } from 'react';
// import qs from 'query-string';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // handleSave = ()=> this.props.history.push('/cart');
    handleSave = ()=> this.props.history.replace('/cart');
    render() { 
        // console.log(qs.parse(this.props.location.search));
        const product = this.props.products.filter((p)=> p.id === parseInt(this.props.match.params.id))[0];
        return ( 
            <React.Fragment>
                <h1>Name: { product.name }</h1> 
                <h6>Count: { product.count }</h6>
                <button onClick={this.handleSave} className="btn btn-primary btn-sm">Save</button>
            </React.Fragment>
        );
    }
}
 
export default ProductDetails;