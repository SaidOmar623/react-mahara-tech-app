import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import { provider } from 'react-redux';
import NavBar from './navbar';
import ShoppingCart from './shoppingCart';
import Home from './home';
import About from './about';
import Contact from './contact';
import ProductDetails from './product-details';
import PageNotFound from './page-not-found';
import Login from './login';
import Admin from './admin';
import ProForm from './pro-form';
import Posts from './posts'
import { ToastContainer, toast } from 'react-toastify';
import PostForm from './postForm';


class App extends Component {
    state = { 
        products: [
            // {id: 1, name: 'Burger', count: 3,price: 25, IsInCart: false},
            // {id: 2, name: 'Cola', count: 5,price: 12, IsInCart: false},
            // {id: 3, name: 'Fries', count: 9,price: 55, IsInCart: false}
        ]
    }

    async componentDidMount(){
        // Call Backend using Axios 
        const {data} = await axios.get('http://localhost:3000/products');
        // console.log(data);
        // setState
        this.setState({products: data})

        // //using Fetch
        // const promise = fetch('https://jsonplaceholder.typicode.com/posts');
        // // console.log(promise);
        // const result = promise.then(res => res.json());
        // // console.log(result);
        // result.then(data => console.log(data))
    }
    
    handleDelete = async (product)=>{
        // Old Data
        const oldProducts = [...this.state.products];

        // await axios.delete('http://localhost:3000/products/'+product.id)

        // clone  edit  set-State
        const products = this.state.products.filter((p)=>
            p.id !== product.id
        );
        this.setState({products});

        try{
            //call Backend
            await axios.delete('http://localhost:3000/products/'+product.id)
        }catch(ex){
            toast("Can't Delete Product");
            this.setState({ products : oldProducts })
        }
        

    }
    // handleReset = () =>{
    // /**Clone */   let products = [...this.state.products];
    // /**edit */    products = products.map((p)=>{
    //     p.count = 0;
    //     return p;
    // });
    // /**setState */this.setState({products}); 
    // }
    // handleIncrement = (product) =>{
    //     //Clone
    //     const products = [...this.state.products];
    //     const index = products.indexOf(product);
    //     products[index] = {...products[index]};
    //     //Edit
    //     products[index].count++;
    //     //setState
    //     this.setState({products})
    // }
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
            <provider store={store}>
                <ToastContainer />
                <NavBar productsCount={this.state.products.length}/>
                <div className="container">
                    <Switch>
                        <Route path="/admin" render={(props)=>(
                            <Admin 
                                products={this.state.products}
                                onDelete={this.handleDelete}
                                {...props}
                            />
                        )}/>
                        <Route path="/proform/:id?" component={ProForm}/>
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
                    <hr/>
                    <PostForm />
                    <hr/>
                    <Posts />
                </div>
            </provider>
        </React.Fragment>
        );
    }
}

export default App;
