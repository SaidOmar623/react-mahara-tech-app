import React, { Component } from 'react';
class Posts extends Component {
    state = { posts:[] };
    componentDidMount(){
        fetch('http://localhost:3001/posts')
        .then(res=>res.json())
        .then(data=>this.setState({posts:data}))
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Posts</h1>
                {this.state.posts.map(post=>(
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <h6>{post.author}</h6>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Posts;