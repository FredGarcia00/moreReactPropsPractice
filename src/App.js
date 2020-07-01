import React from 'react';
import CommentPost from './CommentPost';
import CommentHeader from './CommentHeader';
import faker from 'faker'
import './App.css';

const App = () => {
    return (
        <div className="main">
            <img src={faker.image.city()}/>
            <CommentHeader>
                <CommentPost
                user="Jess"
                text="I can't wait to start traveling again, great post!!"/>
                <CommentPost
                user="jordan"
                text="Great post. Always useful info"/>
                <CommentPost
                user="Ash"
                text="Awwwwwwww yeah"/>
                <CommentPost
                user="Manuel"
                text="Nice night for a cruise"/>
          
            </CommentHeader>

        </div>
    );
};

export default App;