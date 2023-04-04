import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetailes = () => {
    const post = useLoaderData();
    const { id, body, title } = post;
    const navigate = useNavigate();
    return (
        <div style={{ border: '2px solid red', backgroundColor: 'Highlight', color: 'black', borderRadius: '10px', padding: '10px' }}>
            <h3>{id}</h3>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <button onClick={() => navigate(-1)}>GO back</button>
        </div>
    );
};

export default PostDetailes;