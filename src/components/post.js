import React, { Component } from 'react';
import '../post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.initialLikes
        }
        this.doLike = this.doLike.bind(this);
    }
    doLike() {
        this.setState({likes:this.state.likes + 1}, () =>{
            console.log("doLike state", this.state);
        });
    }
    render() {
        const post = this.props.post;
        console.log(this.props);
        return (
            <div className={'post'}>
                <h3>{post.content}</h3>
                <h4>{post.author}</h4>
                <br/>
                <small>{post.time}</small>
                <br/>   
                <div style={likeLine}>
                    <p>Likes: {this.state.likes}</p>
                    <button onClick={this.doLike}
                        style={{
                            'backgroundColor': 'blue',
                            'color': 'white',
                            'fontSize':'16',
                            'fontWeight':'bolder',
                            'border': 'none',
                            'borderRadius':10,
                            'padding': 5
                        }}>
                        Like
                        </button>
                </div>
            </div>
        );
    }
}

const likeLine = { 'display': 'flex', 'justifyContent': 'space-around', 'height': 30 }

export default Post;