import React, { Component } from 'react';
import Post from './components/post';
import PostCreator from './components/postCreator';
import './post.css';

const postArray = [
    {
        content: 'asdasdasdadasdasdas',
        time: '16:23',
        author: 'Jonas',
        initialLikes: 2
    },
    {
        content: 'gsjdfgnçksdjfnsd',
        time: '16:48',
        author: 'Zé',
        initialLikes: 5
    },
    {
        content: 'eienhj298rh-9rvth',
        time: '22:23',
        author: 'Astrôncio',
        initialLikes: 9
    }
]

class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: postArray
        }
    }

    insertPost(post) {
        const myPost = this.state.posts;
        myPost.push(post);
        this.setState({posts: myPost});
    }

  render() {
    return (
      <div>
          <h1>Minha rede social</h1>
            <PostCreator onCreate={this.insertPost.bind(this)}/>
          {this.state.posts.map((post,i) => {
              return (
                <Post key={i} post={post}/>
              );
          })}
      </div>
    );
  }
}

export default App;
