import React, { Component } from 'react';
import axios from 'axios';

class ProForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            name: '',
            price: ''
         }
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        
        if(id !== "new"){
            const {data} = await axios.get('http://localhost:3000/products/'+id);
            const state = {...this.state};
            state.name = data.name;
            state.price = data.price;
            state.id = data.id;
            this.setState( state );
        }
    }

    handleSubmit= async e =>{
        e.preventDefault();

        //Call Backend
        if(this.props.match.params.id === "new"){
            //Add Product
            const obj = { ...this.state, count: 0, IsInCart: false };
            await axios.post('http://localhost:3000/products', obj);
        }else{
            //Edit Product
            const obj = { ...this.state, count: 0, IsInCart: false };
            //delete id
            delete obj.id;
            await axios.put('http://localhost:3000/products/'+this.state.id, obj)
        }
        
        this.props.history.replace("/admin");
    }
    handleChange = (e) =>{
        //clone
        let state= {...this.state};
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //setState
        this.setState(state)
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>{this.props.match.params.id === "new" ? 'Add Product' : 'Edit Product'}</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            name="name"
                            type="text" 
                            value={this.state.name}
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="Product Name" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            name="price"
                            type="text" 
                            value={this.state.price}
                            className="form-control"
                            onChange={this.handleChange}
                            placeholder="Product Price" 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">{this.props.match.params.id === "new" ? 'Add' : 'Edit'}</button>
                </form>
            </React.Fragment>
        
        );
    }
}
 
export default ProForm;