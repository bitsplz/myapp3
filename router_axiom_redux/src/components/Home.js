import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Image from '../pokeball.png';
export default class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {//lifecycle hook
        axios.get('https://jsonplaceholder.typicode.com/posts')//asynchronous
            .then(res => { //res is the response from axios.get
                //console.log(res)
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
                    <img src={Image} alt="pokeball"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}><span className="card-title red-text">
                                {post.title}
                            </span></Link>
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
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
