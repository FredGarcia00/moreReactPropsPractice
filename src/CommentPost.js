import React from 'react';
import faker from 'faker';
import './CommentPost.css';

const CommentPost = (props) => {
    return (
       
        <div className="comment">
            <a className="avatar">
                <img src={faker.image.avatar()}></img>
            </a>
            <div className="content">
                <a className="author">
                    {props.user}
                </a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    {props.text}
                </div>
            </div>
        </div>

    );
};

export default CommentPost;