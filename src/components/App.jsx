import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import Home from './home';
import About from './about';
import Contact from './contact';
import ProductDetails from './product-details';
import PageNotFound from './page-not-found';
import Login from './login';

class App extends Component {
    state = { 
        products: [
            {id: 1, name: 'Burger', count: 3,price: 25, IsInCart: false},
            {id: 2, name: 'Cola', count: 5,price: 12, IsInCart: false},
            {id: 3, name: 'Fries', count: 9,price: 55, IsInCart: false}
        ]
    }
    
    handleDelete = (product)=>{
        // clone  edit  set-State
        const newproducts = this.state.products.filter((p)=>
            p.id !== product.id
        );
        this.setState({products: newproducts});
    }
    handleReset = () =>{
    /**Clone */   let products = [...this.state.products];
    /**edit */    products = products.map((p)=>{
        p.count = 0;
        return p;
    });
    /**setState */this.setState({products}); 
    }
    handleIncrement = (product) =>{
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //Edit
        products[index].count++;
        //setState
        this.setState({products})
    }
    handleInCartChange = (product) =>{
        //Clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //Edit
        products[index].IsInCart = !products[index].IsInCart;
        //setState
        this.setState({products});
    }
    
    render() { 
        return ( 
        <React.Fragment>
            <NavBar productsCount={this.state.products.length}/>
            <div className="container">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/notfound" component={PageNotFound}/>
                <Route path="/product/:id" render = {(props)=> (
                <ProductDetails 
                    products={this.state.products}
                    {...props}
                />
                )} />
                <Route path="/cart" render={(props)=>(
                    <ShoppingCart 
                        products={this.state.products} 
                        productsCount={this.state.products.length}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}
                        {...props}
                    />
                )}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/home" render = {()=> (
                    <Home 
                        products={this.state.products}
                        onCartChange={this.handleInCartChange}
                    />
                )} />
                <Redirect from="/" to="/home" />
                <Redirect to='/notfound' />
            </Switch>
            
            {/* <ShoppingCart 
                products={this.state.products} 
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
                onReset={this.handleReset}
            /> */}
            </div>
        </React.Fragment>
        );
    }
}

export default App;
