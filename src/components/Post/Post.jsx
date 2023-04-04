import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, body, title } = post;
    const navigate = useNavigate()

    // const hanlderNavigation = () => {
    //     navigate(`/posts/${id}`)
    // }
    
    return (
        <div style={{ border: '2px solid red', backgroundColor: 'Highlight', color: 'black', borderRadius: '10px', padding: '10px' }}>
            <h3>{id}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
            <Link to={`/posts/${id}`}><button>show me Post Detailes</button></Link>
            <button onClick={() => navigate(`/posts/${id}`)}>with handler detailes</button>
        </div>
    );
};

export default Post;