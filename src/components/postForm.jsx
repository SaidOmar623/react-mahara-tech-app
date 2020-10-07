import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    state = { 
        title: '',
        author: ''
    }
    
    handleChange = (e) =>{
        //clone
        let state= {...this.state};
        //edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //setState
        this.setState(state)
    }

    handleSubmit= async e=>{
        e.preventDefault();
        const post={...this.state};
        await axios.post('http://localhost:3002/posts', post)
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            name="title"
                            type="text" 
                            value={this.state.title}
                            className="form-control" 
                            aria-describedby="emailHelp" 
                            placeholder="title" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            name="author"
                            type="text" 
                            value={this.state.author}
                            className="form-control"
                            onChange={this.handleChange}
                            placeholder="author" 
                        /> 
                    </div>
                    <button type="submit" className="btn btn-primary">Add Post</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default PostForm;