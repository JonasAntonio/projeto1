import React, { Component } from 'react';

class PostCreator extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    createPost() {
        const newPost = {
            content: this.state.text,
            author: 'Jonas',
            time: new Date().getTime(),
            initialLikes: 0
        }
        this.props.onCreate(newPost);
    }

    render() {
        console.log(this.props.onCreate);
        return (
            <div style={{padding: 15}}>
                <h3>Novo Post</h3>
                <input style={{width: '100%'}}
                 value={this.state.text} onChange={(event) => {
                    const value = event.target.value;
                    this.setState({text: value});
                }}/>
                <style />
                <button onClick={()=>this.createPost()}>Postar</button>
            </div>
        );
    }
}

export default PostCreator;