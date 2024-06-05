import React, { useState } from 'react';
import './App.css';
// import {FaRegUserCircle} from 'react-icons/fa'
import { RiDeleteBin6Line } from "react-icons/ri";
import img from './assets/user.png';

function App() {
  const [comments, setComments] = useState([
    {
      name: 'Michael G',
      comment: 'Establish clear governance policies, regulations, and accountability mechanisms around Al development and use.',
      date: new Date(),
    },
  ]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name,
      comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
    setComments([newComment, ...comments]);
    setName('');
    setComment('');
  };

  const handleRemove = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
    const commentDate = new Date(date);

    if (commentDate.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (commentDate.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date;
    }
  };

  return (
    <div className="container">
      <h1>How can we ensure AI systems remain aligned with human values and ethics?</h1>
      <div className="discussion">
        <h2>Discussion ({comments.length})</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">

          <input
            type="text"
            id="name"
            value={name}
            
            onChange={(event) => setName(event.target.value)}
            placeholder='Your name'
            required
          />
        </div>
        <div className="input-field">

          <textarea
            id="comment"
            value={comment}
            placeholder='Write a comment...'
            onChange={(event) => setComment(event.target.value)}
         
            required
          />
        </div>
        <button type="submit">Post comment</button>
      </form>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment">

            <div className="comment-header">
              {/* <FaRegUserCircle style={{height:'50px',width:'25px'}}/> */}
              <img src={img} alt="user-img" />
              <span className="comment-name">{comment.name}</span>
              <span className="comment-date">{formatDate(comment.date)}</span>
            </div>

            <p className="comment-text">{comment.comment}</p>
          <div className='remove-section'>
          <RiDeleteBin6Line style={{color:'#666'}}/>
          <a
          href="#"
              className="remove-button"
              onClick={() => handleRemove(index)}
            >
              Remove
            </a>
          </div>
       
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;