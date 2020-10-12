import React, { Component } from 'react'
import axios from 'axios';
export default class Post extends Component {
    state = {
        post: null//individual post is stored
    }
    componentDidMount() { //auto get props for class components and route info
        console.log(this.props);
        let id = this.props.match.params.post_id; //from console find this out
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id) // send json obj for that individual post
            .then(res => { //res is the response from axios.get
                //console.log(res)
                this.setState({
                    post: res.data
                })
            });
    }
    render() {
        const individualPost = this.state.post ? (
            <div className="post">
                <h4 className="center">
                    {this.state.post.title}
                </h4>
                <p>
                    {this.state.post.body}
                </p>
            </div>
        ) : (
                <div className="center">No post exits</div>
            )
        return (
            <div className="container">
                {individualPost}
            </div>
        )
    }
}
