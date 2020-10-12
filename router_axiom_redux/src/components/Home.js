import React, { Component } from 'react'
import axios from 'axios';
export default class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {//lifecycle hook
        axios.get('https://jsonplaceholder.typicode.com/posts')//asynchronous
            .then(res => { //res is the response from axios.get
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10) //select first 10 posts
                })
            });
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? ( //fetch data and store in list
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}> 
                        <div className="card-content">
                            <span className="card-title">
                                {post.title}
                            </span>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No Posts Yet!</div>
            );
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
