import React from 'react';
import './CommentHeader.css';

const CommentHeader = (props) => {
    return (
        <div className= "comment-section ui comments">
            <h3 className=" comment-header ui dividing header">Comments</h3>
            {props.children}
        </div>
    );
};

export default CommentHeader;