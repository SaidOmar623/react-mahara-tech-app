import React, { Component } from 'react';
import Joi from "joi-browser"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
            errors: {}
         }
    }

    schema = {
        email: Joi.string().required(),
        password: Joi.string().required()
    }

    validate = ()=>{
        const errors = {};
        //Basic Validation
    //     if(this.state.email.trim() === "")
    //         errors.email = "Email is required";
    //     if(this.state.password.trim() === "")
    //         errors.password = "Password is required";
    //     //setState
    //     this.setState({errors});
    //    return Object.keys(errors).length === 0 ? null: errors;

        //Joi Validation
        const state = {...this.state};
        delete state.errors;
        const result = Joi.validate(state, this.schema, {abortEarly: false});
        console.log(result);
        //no Error
        if(result.error === null){
            //set errors Obj to empty
            this.setState({errors:{}})
            return null;
        } 
        
        //Get error message 
        for(const error of result.error.details){
            errors[error.path] = error.message;
        }
        this.setState({errors});
    }

    // email = React.createRef();
    handleSubmit= e =>{
        e.preventDefault();
        // const email = this.email.current.value;
        // console.log("submitted: ", email);
        const errors = this.validate()
        if(errors) return;
        console.log("Submitted")

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
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input /*ref={this.email}*/ 
                            name="email"
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={this.state.email} 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            onChange={this.handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        {this.state.errors.email && (
                            <div className="alert alert-danger">{this.state.errors.email}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            name="password"
                            type="password" 
                            className="form-control" 
                            id="password" 
                            onChange={this.handleChange}
                            value={this.state.password} 
                            placeholder="Password" 
                        />
                        {this.state.errors.password && (
                            <div className="alert alert-danger">{this.state.errors.password}</div>
                        )}
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;