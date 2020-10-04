import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Admin</h1>
                <button className="btn btn-primary" onClick={()=>(this.props.history.push("/proform/new"))}>Add</button>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map((product)=>{
                            return ( 
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><i style={{cursor:"pointer"}} onClick={ ()=> this.props.history.push(`/proform/${product.id}`) } className="fas fa-edit"></i></td>
                                    <td><i style={{cursor:"pointer"}} onClick={ ()=> this.props.onDelete(product) } className="fas fa-trash"></i></td>
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
 
export default Admin;